// @ts-nocheck
import React from 'react'
import { Text, Html, useGLTF, Float, Center } from '@react-three/drei'
export default function Phone(props) {
  const phone = useGLTF('phone.gltf')
  return (
    <Center>
      <Float speed={1.75} floatIntensity={2} rotationIntensity={0.4}>
        <primitive object={phone.scene} rotation-x={-0.256} scale={1.65}>
          <Html
            transform
            wrapperClass='htmlScreen'
            distanceFactor={1.17}
            position={[0.14, 1.3, 0.01]}
          >
            <iframe src='https://portfolio.zeabur.app/' />
          </Html>
        </primitive>
        <Text
          font='./silkscreen-v1-latin_latin-ext-regular.woff'
          fontSize={0.5}
          position={[3.5, 3, 0.75]}
          rotation-y={-0.25}
          maxWidth={1}
        >
          Allen Shih
        </Text>
      </Float>
    </Center>
  )
}
useGLTF.preload('phone.gltf')
