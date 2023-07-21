// @ts-nocheck
import React, {
  useRef,
  Suspense,
  useState,
  useEffect,
  useLayoutEffect
} from 'react'
import {
  useGLTF,
  Environment,
  useAnimations,
  Html,
  Float
} from '@react-three/drei'

export default function YoungMan(props) {
  const model = useGLTF('model.gltf')
  const animations = useAnimations(model.animations, model.scene)
  useEffect(() => {
    const action = animations.actions['pose_jeune']
    action.reset().fadeIn(0.5).play()
    return () => {
      action.fadeOut(0.5)
    }
  }, [])
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'></hemisphereLight>
      <pointLight intensity={1}></pointLight>
      <Environment preset='dawn' />
      <fog attach='fog' args={['red', 5, 20]} />
      <primitive
        object={model.scene}
        scale={5}
        position={[0, -2, 0]}
        rotation={[-0.01, 0.2, -0.1]}
      >
        <Float speed={1.5} floatIntensity={0.25}>
          <Html position={[-0.2, 0.8, 0]} wrapperClass='label' center>
            <div>
              <p className='text'>
                Switch to <span>Computer Mode</span> for better support,or click
                this link for more information.
              </p>
              <p
                className='link'
                onClick={() => {
                  window.open('https://portfolio.zeabur.app/')
                }}
              >
                https://portfolio.zeabur.app/
              </p>
            </div>
          </Html>
        </Float>
      </primitive>
    </mesh>
  )
}
useGLTF.preload('model.gltf')
