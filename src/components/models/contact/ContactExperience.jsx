import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import OfficeDesk from "./Office_desk";

const ContactExperience = () => {
  return (
    /* The class canvas-wrapper must be defined in your CSS to have a set height */
    <div className="canvas-wrapper">
      <Canvas shadows camera={{ position: [0, 2, 6], fov: 30, near: 0.1, far: 1000 }}>
        
        {/* Lighting for better material visibility */}
        <ambientLight intensity={0.6} color="#fff4e6" />
        <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" castShadow />

        {/* Camera Controls - target [0,0,0] keeps the desk centered */}
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />

        {/* Orange Box Floor/Base */}
        {/* Orange Box Floor/Base */}
<group>
  <mesh
    receiveShadow
    position={[0, -1.5, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
  >
    {/* Change args from [30, 30] to [100, 100] or even [500, 500] */}
    <planeGeometry args={[100, 100]} />
    
    <meshStandardMaterial color="#a46b2d" />
  </mesh>
</group>

        {/* Desk Model - Centered and aligned */}
        <group 
          scale={0.05} 
          position={[0.8, -1.4, 0]} 
          rotation={[0, -Math.PI / 4, 0]} 
          castShadow
        >
          <OfficeDesk />
        </group>
      </Canvas>
    </div>
  );
};

export default ContactExperience;