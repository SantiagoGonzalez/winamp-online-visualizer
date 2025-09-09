"use client"
import { Dithering, LiquidMetal, GrainGradient } from '@paper-design/shaders-react';


export function DitherVisualizer() {
  return (
    <div className="relative h-full w-full">
      <div className="relative h-full w-full">
        {/* Main Circle Visualizer */}



<GrainGradient
  style={{ height: 1100 }}
  colorBack="hsl(0, 0%, 0%)"
  softness={0.5}
  intensity={0.5}
  noise={0.25}
  shape="corners"
  offsetX={0}
  offsetY={0}
  scale={1}
  rotation={0}
  speed={1}
  colors={[
    "hsl(267, 100%, 50%)",
    "hsl(286, 100%, 83%)",
    "hsl(195, 100%, 50%)",
    "hsl(250, 100%, 50%)"
  ]}
/>



{/* 
        <Dithering
          style={{ height: 500 }}
          colorBack="#b5f047"
          // colorFront="#b5f047" //acid-lime
          colorFront="#18181b" //azul
          shape="warp"
          type="random"
          pxSize={2}
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={45}
          speed={.9}
        /> */}

        {/* <Dithering
          style={{ height: 1000 }}
          colorBack="hsl(0, 0%, 0%)"
          colorFront="#b5f047" //acid-lime
          // colorFront="hsl(198, 100%, 50%)" //azul
          shape="warp"
          type="random"
          pxSize={6}
          offsetX={0}
          offsetY={0}
          scale={.5}
          rotation={45}
          speed={.9}
        /> */}
    </div>
    </div>
  )
}