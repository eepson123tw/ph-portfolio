// @ts-nocheck
import React, { Suspense, useState, useLayoutEffect } from 'react'
import {
  Text,
  ContactShadows,
  Environment,
  PresentationControls,
  useProgress
} from '@react-three/drei'
import Phone from './components/Phone.jsx'
import YoungMan from './components/YoungMan.jsx'

import { useApp } from './store/app'
export default function Portfolio() {
  const { progress } = useProgress()
  const [{ windowWidth }, appDispatch] = useApp()

  return (
    <>
      <color attach='background' args={['#999']} />
      <Suspense
        fallback={
          <Text
            font='./silkscreen-v1-latin_latin-ext-regular.woff'
            fontSize={1}
            position={[0, 0, 0]}
            rotation-y={0.45}
            maxWidth={2}
          >
            Loading {progress.toFixed(2)} %...
          </Text>
        }
      >
        <ContactShadows
          color='#241a1a'
          position-y={-4}
          opacity={0.4}
          scale={5}
          blur={5}
        ></ContactShadows>
        <PresentationControls
          global={true}
          rotation={[0.1, 0.34, 0]}
          polar={[-0.8, 0.8]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          {windowWidth >= 650 && <Phone />}
          {windowWidth < 650 && <YoungMan />}
        </PresentationControls>
      </Suspense>
    </>
  )
}
