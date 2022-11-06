import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";
export const Fox = (props) => {
  const model = useGLTF("./Fox/glTF/Fox.gltf");
  const animations = useAnimations(model.animations, model.scene);
  const { animationName } = useControls({
    animationName: { options: animations.names },
  });

  useEffect(() => {
    const action = animations.actions[animationName];
    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationName]);

  return <primitive object={model.scene} {...props} />;
};
