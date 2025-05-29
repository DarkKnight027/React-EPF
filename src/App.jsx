import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './output.css'
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/content/Home';



function App() {
  return (
    <>
      <BrowserRouter>
      
          <Routes>
            <Route path="/"  element={  <><Header/> <LoginForm /><Footer/> </>} />
            <Route path="/home" element={ <><Header/> <NavBar/><Home/><Footer/> </> } />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
