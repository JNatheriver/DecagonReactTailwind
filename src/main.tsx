import React from 'react'
import ReactDOM from 'react-dom/client'
import Box from './App.tsx'
import './index.css'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
    </Canvas>
  </React.StrictMode>
)
