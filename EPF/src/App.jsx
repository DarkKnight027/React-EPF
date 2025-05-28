import React from 'react'

import './App.css'
import './output.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';

function App() {


  return (
    <>
    <Header/>
      <LoginForm />
      <Footer />
    </>
  )
}

export default App
