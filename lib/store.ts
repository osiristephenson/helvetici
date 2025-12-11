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

interface Workflow {
  id: string;
  name: string;
  nodes: Node[];
  edges: Edge[];
  createdAt: number;
  updatedAt: number;
}

interface HelveticiStore {
  nodes: Node[];
  edges: Edge[];
  selectedNode: string | null;
  isRunning: boolean;
  outputs: Record<string, any>;
  currentWorkflowId: string | null;
  currentWorkflowName: string | null;

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
  saveWorkflow: (name: string) => void;
  loadWorkflow: (id: string) => void;
  getWorkflows: () => Workflow[];
  deleteWorkflow: (id: string) => void;
  newWorkflow: () => void;
}

export const useStore = create<HelveticiStore>((set, get) => ({
  nodes: [],
  edges: [],
  selectedNode: null,
  isRunning: false,
  outputs: {},
  currentWorkflowId: null,
  currentWorkflowName: null,

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

  saveWorkflow: (name) => {
    const { nodes, edges, currentWorkflowId } = get();

    if (typeof window === 'undefined') return;

    const workflows = JSON.parse(localStorage.getItem('helvetici_workflows') || '[]');
    const now = Date.now();

    if (currentWorkflowId) {
      // Update existing workflow
      const index = workflows.findIndex((w: Workflow) => w.id === currentWorkflowId);
      if (index !== -1) {
        workflows[index] = {
          ...workflows[index],
          name,
          nodes,
          edges,
          updatedAt: now,
        };
      }
    } else {
      // Create new workflow
      const newWorkflow: Workflow = {
        id: `workflow-${now}`,
        name,
        nodes,
        edges,
        createdAt: now,
        updatedAt: now,
      };
      workflows.push(newWorkflow);
      set({ currentWorkflowId: newWorkflow.id });
    }

    localStorage.setItem('helvetici_workflows', JSON.stringify(workflows));
    set({ currentWorkflowName: name });
  },

  loadWorkflow: (id) => {
    if (typeof window === 'undefined') return;

    const workflows = JSON.parse(localStorage.getItem('helvetici_workflows') || '[]');
    const workflow = workflows.find((w: Workflow) => w.id === id);

    if (workflow) {
      set({
        nodes: workflow.nodes,
        edges: workflow.edges,
        currentWorkflowId: workflow.id,
        currentWorkflowName: workflow.name,
      });
    }
  },

  getWorkflows: () => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('helvetici_workflows') || '[]');
  },

  deleteWorkflow: (id) => {
    if (typeof window === 'undefined') return;

    const workflows = JSON.parse(localStorage.getItem('helvetici_workflows') || '[]');
    const filtered = workflows.filter((w: Workflow) => w.id !== id);
    localStorage.setItem('helvetici_workflows', JSON.stringify(filtered));

    // If deleting current workflow, clear it
    if (get().currentWorkflowId === id) {
      set({
        nodes: [],
        edges: [],
        currentWorkflowId: null,
        currentWorkflowName: null,
      });
    }
  },

  newWorkflow: () => {
    set({
      nodes: [],
      edges: [],
      currentWorkflowId: null,
      currentWorkflowName: null,
    });
  },
}));
