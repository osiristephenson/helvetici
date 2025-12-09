'use client';

import { useEffect, useRef } from 'react';

// This is the Three.js version - install with: npm install three @types/three
// Uncomment when you have a GLB model

export default function Hero3DAdvanced() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamic import to avoid SSR issues
    import('three').then(async (THREE) => {
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      renderer.setSize(600, 600);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current?.appendChild(renderer.domElement);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Load your GLB model (from ReadyPlayer.me or custom)
      const loader = new GLTFLoader();
      let model: THREE.Object3D | null = null;

      loader.load(
        '/avatar.glb', // Your 3D model file
        (gltf) => {
          model = gltf.scene;
          model.scale.set(1, 1, 1);
          scene.add(model);
        },
        undefined,
        (error) => {
          console.error('Error loading model:', error);
        }
      );

      camera.position.z = 2;

      // Animation loop
      let rotation = 0;
      const animate = () => {
        requestAnimationFrame(animate);

        rotation += 0.005;
        if (model) {
          model.rotation.y = rotation;
        }

        renderer.render(scene, camera);
      };

      animate();

      // Cleanup
      return () => {
        renderer.dispose();
        containerRef.current?.removeChild(renderer.domElement);
      };
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[600px] h-[600px] mx-auto"
    />
  );
}
