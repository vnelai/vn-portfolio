import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  // useState to track changes in mode-toggle
  const [isDarkMode, setDarkMode] = useState(false); 

  // Function to change the state of mode-toggle
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Header toggleDarkMode={toggleDarkMode}/>

    </div>
      
  );
}

export default App;
