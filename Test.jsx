import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './test.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = 'http://172.16.40.174:5000';
export default function Test() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      toast.error('Please enter a valid URL!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/predict`,
        { message: url },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        if (response.data.prediction === 'Spam') {
          toast.error('⚠️ Threat Detected: This link appears malicious!');
        } else {
          toast.success('✅ This link appears safe.');
        }
      } else {
        toast.error(
          `Error: Server responded with status ${response.status}. ${
            response.data?.error || 'An unknown error occurred.'
          }`
        );
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          `Error: ${error.response.data?.error || 'An error occurred while scanning the link.'}`
        );
        console.error('Error Details:', error.response.data);
      } else if (error.request) {
        toast.error(
          'Error: No response from the server. Please check your network connection.'
        );
        console.error('Error Details:', error.request);
      } else {
        toast.error('Error: An error occurred while setting up the request.');
        console.error('Error Details:', error.message);
      }
    } finally {
      setLoading(false);
      setUrl('');
    }
  };

  return (
    <div className="testcontain">
      <div className="form-container">
        <ToastContainer position="top-center" />
        <div className="scanner-card">
          <h2>🔍 Link Threat Scanner</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="url"
              value={url}
              placeholder="Enter a URL to scan..."
              onChange={(e) => setUrl(e.target.value)}
              required
              disabled={loading}
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Scanning...' : 'Scan Now'}
            </button>
          </form>
        </div>

        <div className="info-card">
          <h3>🔐 How It Works</h3>
          <p>We scan URLs using AI models and threat intelligence to detect phishing, malware, or scam links.</p>
          <ul>
            <li>Real-time scanning</li>
            <li>ML-trained phishing pattern recognition</li>
            <li>Secure, private input</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
