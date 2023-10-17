import React from 'react'
import ReactDOM from 'react-dom/client'

import { ProfileProvider } from './context/ProfileContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </React.StrictMode>,
)
