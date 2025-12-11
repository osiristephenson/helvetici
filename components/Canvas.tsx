'use client';

import { useMemo, useCallback, useRef } from 'react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ConnectionMode,
  useReactFlow,
  ReactFlowProvider,
} from '@xyflow/react';
import { useStore } from '@/lib/store';
import TextInputNode from './nodes/TextInputNode';
import AIGenerateNode from './nodes/AIGenerateNode';
import PreviewNode from './nodes/PreviewNode';

function CanvasContent() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } = useStore();
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { screenToFlowPosition } = useReactFlow();

  const nodeTypes = useMemo(
    () => ({
      textInput: TextInputNode,
      aiGenerate: AIGenerateNode,
      preview: PreviewNode,
    }),
    []
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      console.log('Dropped node type:', type);

      if (!type) {
        console.log('No type found in dataTransfer');
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      console.log('Adding node at position:', position);
      addNode(type, position);
    },
    [screenToFlowPosition, addNode]
  );

  return (
    <div className="w-full h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        connectionMode={ConnectionMode.Loose}
        fitView
        className="bg-[#FAFAFA]"
        defaultEdgeOptions={{
          animated: false,
          style: { strokeWidth: 2, stroke: '#D1D5DB' },
        }}
      >
        <Background
          color="#E5E7EB"
          gap={20}
          size={1}
          variant={BackgroundVariant.Dots}
        />
        <Controls className="bg-white border border-gray-300 rounded shadow-sm" />
        <MiniMap
          nodeColor="#9CA3AF"
          maskColor="rgba(0, 0, 0, 0.1)"
          className="bg-white border border-gray-300 rounded shadow-sm"
        />
      </ReactFlow>
    </div>
  );
}

export default function Canvas() {
  return (
    <ReactFlowProvider>
      <CanvasContent />
    </ReactFlowProvider>
  );
}
