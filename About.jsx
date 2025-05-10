import React from 'react'
import './about.css'
import bg from '../assets/bg.mp4'
import { useRef, useEffect } from 'react';

export default function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5x speed
    }
  }, []);
  const data = [
    {
      year: '1990s',
      title: 'Origins',
      content: 'Phishing started on AOL where hackers impersonated staff to steal user credentials via fake emails or messages.',
    },
    {
      year: '2000s',
      title: 'Email Phishing Boom',
      content: 'Email became the main phishing vector. Fake bank and PayPal emails asked users to verify accounts via spoofed sites.',
    },
    {
      year: '2000s',
      title: 'Malicious Links & Attachments',
      content: 'Emails began containing malicious links and attachments that downloaded malware or redirected users.',
    },
    {
      year: '2010s',
      title: 'SMS, Smishing & Messaging Attacks',
      content: 'Attackers began using SMS (smishing), voice calls (vishing), and messaging apps like WhatsApp for scams.',
    },
    {
      year: '2010s–2020s',
      title: 'Advanced Threats',
      content: 'Spear phishing, phishing-as-a-service (PhaaS), and AI-generated phishing emails emerged.',
    },
    {
      year: '2020s',
      title: 'Pandemic Surge',
      content: 'COVID-19-related phishing surged, using health urgency to trick users with fake vaccine and lockdown alerts.',
    },
  ]

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
    <div className="about-container">
      <h1 className="about-heading">📜 History of Phishing & Email Threats</h1>
      <div>
        {data.map((item, index) => (
          <div key={index} className="history-card">
            <h2>{item.year} – {item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

  )
}
