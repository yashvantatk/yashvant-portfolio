import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const Rig = ({ children }) => {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += (state.pointer.x * 0.45 - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (-state.pointer.y * 0.3 - ref.current.rotation.x) * 0.05;
  });
  return <group ref={ref}>{children}</group>;
};

const Shapes = () => {
  const knot = useRef();
  useFrame((_, delta) => {
    if (knot.current) knot.current.rotation.z += delta * 0.12;
  });
  return (
    <Rig>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
        <mesh ref={knot}>
          <torusKnotGeometry args={[1.2, 0.34, 200, 28]} />
          <meshStandardMaterial color="#10B981" wireframe emissive="#10B981" emissiveIntensity={0.45} />
        </mesh>
      </Float>
      <Float speed={2.2} floatIntensity={2.4}>
        <mesh position={[2.6, 1.3, -1]}>
          <icosahedronGeometry args={[0.45, 0]} />
          <meshStandardMaterial color="#06B6D4" wireframe emissive="#06B6D4" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <Float speed={1.8} floatIntensity={2}>
        <mesh position={[-2.5, -1.2, -0.5]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#8B5CF6" wireframe emissive="#8B5CF6" emissiveIntensity={0.4} />
        </mesh>
      </Float>
    </Rig>
  );
};

export default function Hero3D() {
  return (
    <div
      data-testid="hero-3d-canvas"
      className="absolute inset-0 lg:left-auto lg:right-[-8%] lg:w-[62%] opacity-40 lg:opacity-100 pointer-events-none"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 5.2], fov: 48 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={40} color="#10B981" />
        <pointLight position={[-5, -3, 3]} intensity={24} color="#06B6D4" />
        <Shapes />
      </Canvas>
    </div>
  );
}
