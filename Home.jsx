import React from 'react'
import bg from '../assets/bg.mp4'
import './home.css'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react';
export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5x speed
    }
  }, []);
  return (
    <div>
  <video
      ref={videoRef}
      src={bg}
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1
      }}
    />
 <Link to='/About'><div className='more'>
  <h3>Explore More</h3>
  </div></Link>
  <Link to='/Test'><div className='more check'>
  <h3>Check Here</h3>
  </div></Link>
  <Link to='/Service'><div className='more all'>
  <h3>All Services</h3>
  </div></Link>
    </div>
  )
}
