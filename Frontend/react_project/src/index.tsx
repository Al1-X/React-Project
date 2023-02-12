import React from 'react';    // offers acces to components
import ReactDOM from 'react-dom/client';    // reacts with the browser and renders objects
import App from './App';
import StateProvider from './Context';
import { AuthProvider } from './Context/auth.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <StateProvider>
        <App />
      </StateProvider>
    </AuthProvider>
  </React.StrictMode>
);
