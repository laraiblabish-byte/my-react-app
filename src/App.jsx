import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Contact from './components/Contact';
import Report from './components/Report';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  HashRouter as Router,
  Routes,
  Route

} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light', 'bg-dark', 'bg-primary', 'bg-warning', 'bg-success', 'bg-danger');
  };

  const toggleMode = (cls) => {
    removeBodyClasses();


    if (typeof cls === 'string') {
      document.body.classList.add('bg-' + cls);
      document.body.style.backgroundColor = '';
      document.body.style.color = cls === 'warning' ? 'black' : 'white';
      showAlert(`${cls.charAt(0).toUpperCase() + cls.slice(1)} mode enabled`, "success");
      return;

    }

    if (mode === 'light') {
      setMode('dark');
      document.body.classList.add('bg-dark');
      document.body.style.backgroundColor = '#36454f';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'WickedWords - Dark Mode'
    } else {
      setMode('light');
      document.body.classList.add('bg-light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'WickedWords - Light Mode'
    }
  };
  return (
    <Router>


      <Navbar title="WickedWords" aboutText="About SpellText" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className='container my-3'>
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          <Route exact path="/about"  element={<About mode={mode} />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/report" element={<Report />} />
        </Routes>
      </div>


    </Router>
  );
}

export default App;