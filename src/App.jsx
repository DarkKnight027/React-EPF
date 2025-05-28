import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './output.css'
import NavigationBar from './components/NavagationBar/NavagationBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/"  element={  <><Header/> <LoginForm /><Footer/> </>} />
            <Route path="/home" element={  <> <Header/><NavigationBar/> <Footer/> </>} />
          </Routes>
       
    </BrowserRouter>
    </>
  )
}

export default App
