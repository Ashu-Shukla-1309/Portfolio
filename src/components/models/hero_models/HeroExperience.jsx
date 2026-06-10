import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

// 1. Import your newly generated desk component instead of the Room
// Ensure this path matches exactly where you placed the file
import Low_poly_computer_desk from "./Low_poly_computer_desk.jsx";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
<Canvas 
  camera={{ position: [5, 5, 20], fov: 40 }} // [x, y, z] - x:5 (right), y:5 (up), z:10 (back)
>
  <OrbitControls
    enablePan={false}
    enableZoom={!isTablet}
    // Set these to limit the user's ability to rotate too far away from your "perfect" angle
    minPolarAngle={Math.PI / 4} 
    maxPolarAngle={Math.PI / 2.5}
    // Set target to look at the desk center
    target={[0, 0, 0]} 
  />

  <Suspense fallback={null}>
    <HeroLights />
    <Particles count={100} />
    
    <group
      scale={0.05} // Unified scale
      position={[1.5, -2, 0]} // Centering the model on the floor
      rotation={[0, 0, 0]} // Slight rotation to reveal the chair
    >
      <Low_poly_computer_desk />
    </group>
  </Suspense>
</Canvas>
  );
};

export default HeroExperience;