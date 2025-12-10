import { create } from 'zustand';
import {
  Node,
  Edge,
  addEdge,
  Connection,
  applyNodeChanges,
  applyEdgeChanges,
  NodeChange,
  EdgeChange,
} from '@xyflow/react';

interface HelveticiStore {
  nodes: Node[];
  edges: Edge[];
  selectedNode: string | null;
  isRunning: boolean;
  outputs: Record<string, any>;

  // Actions
  onNodesChange: (changes: NodeChange<Node>[]) => void;
  onEdgesChange: (changes: EdgeChange<Edge>[]) => void;
  onConnect: (connection: Connection) => void;
  addNode: (type: string, position: { x: number; y: number }) => void;
  updateNodeData: (nodeId: string, data: any) => void;
  deleteNode: (nodeId: string) => void;
  setSelectedNode: (nodeId: string | null) => void;
  setOutput: (nodeId: string, value: any) => void;
  runFlow: () => Promise<void>;
}

export const useStore = create<HelveticiStore>((set, get) => ({
  nodes: [],
  edges: [],
  selectedNode: null,
  isRunning: false,
  outputs: {},

  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },

  addNode: (type, position) => {
    const newNode: Node = {
      id: `${type}-${Date.now()}`,
      type,
      position,
      data: { label: type },
    };
    set({ nodes: [...get().nodes, newNode] });
  },

  updateNodeData: (nodeId, data) => {
    set({
      nodes: get().nodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...data } } : node
      ),
    });
  },

  deleteNode: (nodeId) => {
    set({
      nodes: get().nodes.filter((node) => node.id !== nodeId),
      edges: get().edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId),
    });
  },

  setSelectedNode: (nodeId) => {
    set({ selectedNode: nodeId });
  },

  setOutput: (nodeId, value) => {
    set({
      outputs: { ...get().outputs, [nodeId]: value },
    });
  },

  runFlow: async () => {
    const { nodes, edges, updateNodeData } = get();
    set({ isRunning: true });

    try {
      // Find all AI Generate nodes
      const aiNodes = nodes.filter((node) => node.type === 'aiGenerate');

      for (const aiNode of aiNodes) {
        // Find input nodes connected to this AI node
        const inputEdges = edges.filter((edge) => edge.target === aiNode.id);

        // Collect all inputs
        let prompt = '';
        let context = '';

        for (const edge of inputEdges) {
          const sourceNode = nodes.find((n) => n.id === edge.source);
          if (sourceNode?.type === 'textInput') {
            prompt += (sourceNode.data.value || '') + '\n';
          }
        }

        if (!prompt.trim()) continue;

        // Get user's API key from localStorage (if available)
        const userApiKey = typeof window !== 'undefined'
          ? localStorage.getItem('helvetici_api_key')
          : null;

        // Call the API
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: prompt.trim(),
            context,
            outputType: 'component',
            userApiKey: userApiKey || undefined,
          }),
        });

        const data = await response.json();

        if (data.error) {
          console.error('API error:', data.error);
          continue;
        }

        // Find preview nodes connected to this AI node
        const outputEdges = edges.filter((edge) => edge.source === aiNode.id);

        for (const edge of outputEdges) {
          const targetNode = nodes.find((n) => n.id === edge.target);
          if (targetNode?.type === 'preview') {
            updateNodeData(targetNode.id, { output: data.output });
          }
        }
      }
    } catch (error) {
      console.error('Flow execution error:', error);
    } finally {
      set({ isRunning: false });
    }
  },
}));
