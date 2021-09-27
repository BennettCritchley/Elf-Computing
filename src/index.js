import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const FEATURES = {
  Processor: [
    {
      name: 'Intel Core I9 Max',
      cost: 700
    },
    {
      name: 'AMD ThreadRipper X3990 (64 Cores, 128 Threads)',
      cost: 1200
    }
  ],
  "Operating System": [
    {
      name: 'Windows 10 - 32Bit',
      cost: 100
    },
    {
      name: 'Windows 10 - 64Bit',
      cost: 150
    },
    {
      name: 'Linux',
      cost: 0
    }
  ],
  "Video Card": [
    {
      name: 'Nvidia Ge-Force RTX 2080TI.',
      cost: 1450.00
    },
    {
      name: 'Nvidia Ge-Force RTX 3090.',
      cost: 2500
    }
  ],
  Display: [
    {
      name: 'MSI Optix 27" 120Hz 1080p Monitor',
      cost: 300
    },
    {
      name: 'MSI Optix 27" 165Hz 4k Monitor',
      cost: 1400
    },
  ]
};

ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));
