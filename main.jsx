import React from 'react';
import { LiquidGlass } from 'liquid-glass-react';
import 'liquid-glass-react/styles.css'; // Required styles

export default function GlassButton() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <LiquidGlass
        displacementScale={64}
        blurAmount={0.1}
        saturation={130}
        aberrationIntensity={2}
        elasticity={0.35}
        cornerRadius={100}
        padding="8px 16px"
        onClick={() => console.log('Button clicked!')}
      >
        <span className="text-white font-medium">Click Me</span>
      </LiquidGlass>
    </div>
  );
}
