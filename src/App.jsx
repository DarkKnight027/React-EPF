import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./output.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/content/Home";
import Passbook from "./view/passbook/Passbook";
import UANCard from "./view/uanCard/UANCard";
import Profile from "./view/profile/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <LoginForm />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header /> <NavBar />
                <Footer />{" "}
              </>
            }
            g
          />

          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/service-history"
            element={
              <>
                <Header />
                <Passbook />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/uan-card"
            element={
              <>
                <Header />
                <UANCard />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/Passbook"
            element={
              <>
                <Header />
                <Passbook />
                <Footer />{" "}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
