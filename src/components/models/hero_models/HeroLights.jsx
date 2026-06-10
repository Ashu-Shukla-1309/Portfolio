import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* 1. KEY LIGHT: Brightened for more visibility */}
    <spotLight
      position={[0, 8, 6]}
      angle={0.2}
      penumbra={0.3}
      intensity={300} // Increased from 150
      color="#ffffff"
      castShadow
    />

    {/* 2. FILL LIGHT: New light to specifically illuminate the chair/floor area */}
    <pointLight 
      position={[-3, 2, 3]} 
      intensity={120} 
      color="#f0f0f0" // Neutral white fill
      distance={15}
    />

    {/* 3. RIM LIGHT: Adds a highlight to the chair's edge to separate it from the darkness */}
    <pointLight 
      position={[3, 3, -2]} 
      intensity={100} 
      color="#ffffff" 
    />

    {/* 4. ATMOSPHERIC LIGHTS: Kept for style, but intensity balanced */}
    <spotLight position={[4, 5, 4]} angle={0.3} penumbra={0.5} intensity={60} color="#4cc9f0" />
    <spotLight position={[-3, 5, 5]} angle={0.4} penumbra={1} intensity={80} color="#9d4edd" />

    {/* 5. SOFT MOODY FILL */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 15, 5, 5)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
    />
  </>
);

export default HeroLights;