import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './output.css'
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';
import ChangePassword from './components/Account/ChangePassword';
import Claim from './components/Online-Service/Claim/Claim';


function App() {
  return (
    <>
      <BrowserRouter>
      
          <Routes>
            <Route path="/"  element={  <><Header/> <LoginForm /><Footer/> </>} />
            <Route path="/home" element={ <><Header/> <NavBar/><Footer/> </> } />
            <Route path="/Change-password" element={ <><Header/> <ChangePassword/><Footer/> </> } />
             <Route path="/claim" element={ <><Header/> <Claim/><Footer/> </> } />

          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
