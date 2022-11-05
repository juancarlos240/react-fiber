import {
  Html,
  OrbitControls,
  Text,
  PivotControls,
  Float,
  MeshReflectorMaterial,
  TransformControls,
} from "@react-three/drei";
import { useRef } from "react";
import { useControls, button } from "leva";
import { Perf } from "r3f-perf";

export function Experience() {
  const cubeRef = useRef();
  const sphere = useRef();
  const { position, color, visible } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0 },
      max: 4,
      min: -4,
    },
    color: "#ff0000",
    visible: true,
    clickMe: button(() => {
      console.log("click it");
    }),
    choice: { options: ["a", "b", "c"] },
  });
  const { perfVisible } = useControls({
    perfVisible: true,
  });

  return (
    <>
      {perfVisible ? <Perf position="top-left" /> : null}
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={100}
        fixed={true}
      >
        <mesh
          ref={sphere}
          position={[position.x, position.y, 0]}
          visible={visible}
        >
          <sphereGeometry />
          <meshStandardMaterial color={color} />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            occlude={[sphere, cubeRef]}
          >
            That's a sphere 👍
          </Html>
        </mesh>
      </PivotControls>
      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} mode="translate" />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
          color="greenyellow"
        />
      </mesh>

      <Float speed={5} floatIntensity={2}>
        <Text
          font="./AmaticSC-Regular.ttf"
          fontSize={1}
          color="red"
          position-y={2}
        >
          Flotando
        </Text>
      </Float>
    </>
  );
}
