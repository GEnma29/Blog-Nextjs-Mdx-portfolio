import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Scene from "./Scene.js"
function Box() {
    const box = useRef();
    useFrame(()=>{
        box.current.rotation.x += 0.003;
        box.current.rotation.y += 0.02;
    })
  return (
    <mesh ref={box} scale={(10, 10, 10)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={0xffff00} />
    </mesh>
  );
}

const Figure = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [100, 100, 40] }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box  />
    </Canvas>
  );
};

export default Figure;
