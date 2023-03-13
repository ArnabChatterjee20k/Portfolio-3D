import React from 'react'
import { Html, useProgress } from '@react-three/drei'
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html style={{ marginTop: "1rem" }}>
      <span className='canvas-load'></span>
      <p style={{ fontSize: 28, color: "#fff" }}>{progress.toFixed(2)}</p>
    </Html>
  )
}

export default Loader