"use client";
import { Canvas } from "@react-three/fiber";
import { Planet } from "@/components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "@/components/AnimatedHeaderSection";
import React, { Suspense, useEffect, useState } from "react";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [canRender3d, setCanRender3d] = useState(false);
  const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;

  useEffect(() => {
    const supportsWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    setCanRender3d(supportsWebGL());
  }, []);

  return (
    <>
      <section id="home" className="flex flex-col justify-end min-h-screen">
        <AnimatedHeaderSection
          subTitle={"404 No Bugs Found"}
          title={"KIRTAN THAKKAR"}
          text={text}
          textColor={"text-black"}
        />
        <figure
          className="absolute inset-0 -z-50"
          style={{ width: "100vw", height: "100vh" }}
        >
          {canRender3d ? (
            <Canvas
              shadows
              camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
            >
              <ambientLight intensity={0.5} />
              <Suspense fallback={null}>
                <Float speed={0.5}>
                  <Planet scale={isMobile ? 0.7 : 1} />
                </Float>
                <Environment resolution={256}>
                  <group rotation={[-Math.PI / 3, 4, 1]}>
                    <Lightformer
                      form={"circle"}
                      intensity={2}
                      position={[0, 5, -9]}
                      scale={10}
                    />
                    <Lightformer
                      form={"circle"}
                      intensity={2}
                      position={[0, 3, 1]}
                      scale={10}
                    />
                    <Lightformer
                      form={"circle"}
                      intensity={2}
                      position={[-5, -1, -1]}
                      scale={10}
                    />
                    <Lightformer
                      form={"circle"}
                      intensity={2}
                      position={[10, 1, 0]}
                      scale={16}
                    />
                  </group>
                </Environment>
              </Suspense>
            </Canvas>
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-black/5 to-transparent" />
          )}
        </figure>
      </section>
    </>
  );
};

export default Hero;
