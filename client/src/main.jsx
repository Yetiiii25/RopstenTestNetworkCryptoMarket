import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {TransactionProvider} from './context/TransactionContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CryptoContext from './context/CryptoContext'
import ErrorContext from './context/ErrorContext'
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransactionProvider>
      <CryptoContext>      
          <App />      
      </CryptoContext>
    </TransactionProvider>  
  </React.StrictMode>
)
