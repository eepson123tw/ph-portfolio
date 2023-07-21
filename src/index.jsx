// @ts-nocheck
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { StrictMode, useLayoutEffect } from 'react'
import { Leva } from 'leva'
import { Perf } from 'r3f-perf'

import ReactDOM from 'react-dom/client'
import Portfolio from './Portfolio'
import './style.css'
import { useApp } from './store/app'
import { AppProvider } from './store/app'
const App = () => {
  const [, appDispatch] = useApp()
  useLayoutEffect(() => {
    appDispatch({
      type: 'patch',
      windowWidth: window.innerWidth
    })
  }, [])
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
          shadows
          dpr={[1, 2]}
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
)
