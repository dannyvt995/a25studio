"use client"
import React, { useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import s from './style.module.css'

import * as THREE from 'three'
function MyOrthographicCamera() {
  const {  size, set } = useThree()

  useEffect(() => {
    console.log(size)
    const aspect = size.width / size.height
    const frustumSize = size.height

    // Camera cần là một OrthographicCamera
    const orthoCam = new THREE.OrthographicCamera(
      (-frustumSize * aspect) / 2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      1000
    )

    set({ camera: orthoCam }) // Thiết lập camera mới
    orthoCam.position.set(0, 0, 1000) // Vị trí camera
    orthoCam.lookAt(0, 0, 0)
    orthoCam.updateProjectionMatrix()
  }, [])

  return null
}

export default function Index() {

  return (
    <div className={s.canvas3d}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <MyOrthographicCamera />
        <mesh >
            <planeGeometry args={[892.08,401.08]}/>
            <meshBasicMaterial color={'blue'} />
        </mesh>
      </Canvas>
    </div>
  )
}
