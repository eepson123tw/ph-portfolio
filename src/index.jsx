// @ts-nocheck
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { StrictMode } from 'react'
import { Leva } from 'leva'
import { Perf } from 'r3f-perf'

import ReactDOM from 'react-dom/client'
import Portfolio from './Portfolio'
import './style.css'

const App = () => {
  return (
    <>
      <StrictMode>
        <Canvas
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpaces
          }}
          flat
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [4, 2, 6]
          }}
        >
          <Portfolio />
        </Canvas>
      </StrictMode>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
