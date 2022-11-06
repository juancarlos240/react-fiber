import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useGLTF } from "@react-three/drei";

export const Model = () => {
  const model = useGLTF("./hamburger.glb");
  return <primitive object={model.scene} scale={0.35} />;
};
