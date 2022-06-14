import { Header, Footer } from "./components";
import { CoinCarousel, CoinPage, LandingPage } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import { makeStyles } from '@mui/styles';
import Alerts from "./components/Alerts";



const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

const App = () => {
  const classes = useStyles();

  return (
    <Router>
    
    <Header />
    <div className="gradient-bg-welcome">
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/coins" element={<CoinCarousel />} />
        <Route path="/coins/:id" element={<CoinPage />} />
        
      </Routes>
      </div>
    <Footer />
    <Alerts />
  
  </Router>
  )
}

export default App


