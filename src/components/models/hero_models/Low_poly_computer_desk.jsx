import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/low_poly_computer_desk.glb')
  
  return (
    <group {...props} dispose={null}>
      {/* This is the standard way to render GLTF nodes. 
        If your model is simple, it likely has a 'Scene' or a 'Cube' node. 
        If you aren't sure, try <primitive object={nodes.Scene} /> 
      */}
      <primitive object={nodes.Scene || nodes.Cube || Object.values(nodes)[0]} />
    </group>
  )
}

useGLTF.preload('/models/low_poly_computer_desk.glb')