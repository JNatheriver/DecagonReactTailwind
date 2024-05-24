import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, ThreeElements, useLoader } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { RGBELoader } from 'three/examples/jsm/Addons.js'

export default function Box (props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => (meshRef.current.rotation.x += delta))

  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')

  return (
    <mesh
      {...props}
      ref={meshRef}
    >
      <icosahedronGeometry args={[3]} />
      <MeshTransmissionMaterial
        clearcoat={1}
        clearcoatRoughness={0}
        transmission={1}
        chromaticAberration={0.03}
        anisotropicBlur={0.1}
        // Set to > 0 for diffuse roughness
        roughness={0}
        thickness={4.5}
        ior={1.5}
        // Set to > 0 for animation
        distortion={0.1}
        distortionScale={0.2}
        temporalDistortion={0.2}
      />
    </mesh>
  )
}
