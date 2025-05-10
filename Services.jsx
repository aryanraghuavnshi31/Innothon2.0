import React from 'react'
import './services.css'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
  RadialBarChart, RadialBar, 
} from 'recharts';
export default function Services() {
  const radial = [
    {
      name: 'Phishing Emails',
      value: 580,
      fill: '#ff7300',
    },
    {
      name: 'Malicious Emails',
      value: 370,
      fill: '#387908',
    }
  ]
  const services = [
    {
      icon: "🔍",
      title: "URL Threat Scanner",
      description: "Analyze web addresses to detect potential security threats before you visit."
    },
    {
      icon: "🛡️",
      title: "Malware Detection",
      description: "Identify and eliminate harmful software that could compromise your system."
    },
    {
      icon: "🔐",
      title: "Phishing Protection",
      description: "Guard against fraudulent attempts to steal sensitive information."
    }
  ];

const data = [
  { month: 'Jan', phishingEmails: 320, maliciousEmails: 280, phishingSMS: 140 },
  { month: 'Feb', phishingEmails: 400, maliciousEmails: 300, phishingSMS: 180 },
  { month: 'Mar', phishingEmails: 350, maliciousEmails: 270, phishingSMS: 160 },
  { month: 'Apr', phishingEmails: 500, maliciousEmails: 320, phishingSMS: 210 },
  { month: 'May', phishingEmails: 450, maliciousEmails: 300, phishingSMS: 190 },
  { month: 'Jun', phishingEmails: 480, maliciousEmails: 330, phishingSMS: 230 },
  { month: 'Jul', phishingEmails: 420, maliciousEmails: 310, phishingSMS: 200 },
  { month: 'Aug', phishingEmails: 460, maliciousEmails: 290, phishingSMS: 220 },
  { month: 'Sep', phishingEmails: 490, maliciousEmails: 340, phishingSMS: 210 },
  { month: 'Oct', phishingEmails: 530, maliciousEmails: 350, phishingSMS: 250 },
  { month: 'Nov', phishingEmails: 510, maliciousEmails: 330, phishingSMS: 240 },
  { month: 'Dec', phishingEmails: 580, maliciousEmails: 370, phishingSMS: 270 },
];
  return (
  
    <div className='services-container'>
      <h2 className='services-title'>The Services We Provide</h2>
      <div className='services-grid'>
        {
          services.map((e, index) => (
            <div className='service-card' key={index}>
              <div className='service-icon'>{e.icon}</div>
              <h2 className='service-title'>{e.title}</h2>
              <p className='service-description'>{e.description}</p>
            </div>  
          ))
        }
      </div>
    <div style={{ width: '100%', height: 400,backgroundColor: '#fffffff0', padding: '2rem',color:'black', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>📊 Last year's Monthly Threat Trends</h2>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 40, left: 0, bottom: 0 }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="phishingEmails" stroke="#ff7300" name="Phishing Emails" />
          <Line type="monotone" dataKey="maliciousEmails" stroke="#387908" name="Malicious Emails" />
          <Line type="monotone" dataKey="phishingSMS" stroke="#8884d8" name="Phishing SMS/Messages" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div style={{ width: '100%', height: 400, backgroundColor: '#fffffff0', padding: '1rem',color:'black', borderRadius: '12px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>🎯 Last Month's Email Threat Overview</h2>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="30%"
          outerRadius="90%"
          barSize={20}
          data={radial}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="value"
          />
          <Tooltip />
          <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
          </div>
    
  )}