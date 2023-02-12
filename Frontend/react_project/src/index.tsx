import React from 'react';    // offers acces to components
import ReactDOM from 'react-dom/client';    // reacts with the browser and renders objects
import App from './App';
import StateProvider from './Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
