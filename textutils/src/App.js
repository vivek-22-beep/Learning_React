import { useState } from 'react';
import './App.css';
import AboutUs from './Component/AboutUs';
import Navbar from './Component/Navbar';
//import TextForm from './Component/TextForm';


function App() {
  const [mode,setMode]=useState('dark');//whether dark mode is enabled or not
  return (
    <>
    <Navbar title="Textutils" mode={mode} />

    <div className='container'>
    {/* <TextForm heading="Enter Text Here"/> */}
    <AboutUs />
    </div>
      
    </>
  );
}

export default App;
