
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useTheme } from "./ThemeProvider";
import type * as THREE from "three";

interface SpinningMeshProps {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
}

const SpinningMesh = ({ position, color, speed, distort }: SpinningMeshProps) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01 * speed;
      mesh.current.rotation.y += 0.01 * speed;
    }
  });

  return (
    <mesh position={position} ref={mesh}>
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial 
          color={color} 
          attach="material" 
          distort={distort} 
          speed={2} 
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </mesh>
  );
};

export default function AnimatedSphere() {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <SpinningMesh 
          position={[0, 0, 0]} 
          color={isDarkTheme ? '#9333ea' : '#8b5cf6'} 
          speed={0.5}
          distort={0.5}
        />
      </Canvas>
    </div>
  );
}
