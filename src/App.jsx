import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  // useState to track changes in mode-toggle
  const [isDarkMode, setDarkMode] = useState(false); 

  // Effect to toggle the class on the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Function to change the state of mode-toggle
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !isDarkMode);

  };

  return (
    <div > 
      <Header toggleDarkMode={toggleDarkMode}/>

    </div>
      
  );
}

export default App;
