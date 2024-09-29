"use client"
import React, { useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import s from './style.module.css'
import useStoreZustand from '@/app/hook/useStoreZustand'

import * as THREE from 'three'
function MyOrthographicCamera() {
  const {  size, set } = useThree()

  useEffect(() => {
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
  useFrame((state) => {
    state.camera.position.y = window.lenis?.scroll * -1
  })
  return null
}

export default function Canvas3d() {
  const { canvasTrack } = useStoreZustand();
  const halfWindow = window.innerHeight/2
  return (
    <div className={s.canvas3d}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <axesHelper args={[window.innerWidth]} />
        <MyOrthographicCamera />
        <mesh position={[0,-canvasTrack.hero.h/2+halfWindow - canvasTrack.hero.t,0]}>
            <planeGeometry args={[canvasTrack.hero.w,canvasTrack.hero.h]}/>
            <meshBasicMaterial opacity={.5} color={'blue'} transparent={true} />
        </mesh>
      </Canvas>
    </div>
  )
}
