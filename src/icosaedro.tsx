import * as THREE from 'three'
import React, { useRef, FC } from 'react'
import { useFrame, ThreeElements, useLoader, Canvas, RenderProps } from '@react-three/fiber'
import { MeshRefractionMaterial } from '@react-three/drei'
import { RGBELoader } from 'three/examples/jsm/Addons.js'

const rotationSpeed = 0.1
const radiusIcosaedro = 3

export function IcosaedroShape (props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * rotationSpeed
    meshRef.current.rotation.y += delta * rotationSpeed
  })

  // https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr <--- Looks awesome but too bright
  // https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/shanghai_bund_4k.hdr <--- meh
  // https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/moonless_golf_4k.hdr <--- Looks nasty
  // https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_07_4k.hdr <--- Looks good
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_07_1k.hdr')
  return (

    <mesh
      {...props}
      ref={meshRef}
    >
      <icosahedronGeometry args={[radiusIcosaedro]} />
      <MeshRefractionMaterial envMap={texture} toneMapped={false} />
    </mesh>
  )
}

interface IcosaedroProps extends Omit<RenderProps<HTMLCanvasElement>, 'size'>, React.HTMLAttributes<HTMLDivElement>{}

const Icosaedro: FC<IcosaedroProps> = (props) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }} {...props}
    >
      <IcosaedroShape />
    </Canvas>

  )
}

export default Icosaedro
