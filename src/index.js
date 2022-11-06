import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import { Experience } from "./Experience";
import * as THREE from "three";
import { StrictMode } from "react";
import { Leva } from "leva";

const root = ReactDOM.createRoot(document.getElementById("root"));
const optionCamera = {
  fov: 45,
  zoom: 100,
  near: 0.1,
  far: 200,
  position: [3, 2, 6],
};
root.render(
  <Canvas
    shadows
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
  >
    <Experience />
  </Canvas>
);
