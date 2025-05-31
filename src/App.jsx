import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./output.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/LoginForm/LoginForm";
import Passbook from "./view/passbook/Passbook";
import UANCard from "./view/uanCard/UANCard";
import Profile from "./view/profile/profile";
import ENomaination from "./components/Manage/enomination/enomination";
import JointDeclaration from "./components/Manage/JointDecleration/JointDeclaration";
import ChangeContactDetails from "./components/Manage/Contact/ChangeContactDetails";
import Kyc from "./components/Manage/Kyc/Kyc";
import CollapsiblePage from './components/OnlineService/OneMember/CollapsiblePage';
import ChangePassword from "./components/Account/ChangePassword";
import Claim from "./components/OnlineService/Claim/Claim";
import MarkExit from "./components/Manage/MarkExit/MarkExit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <><Header /> <LoginForm /><Footer /></>} />
          <Route path="/Change-password" element={ <><Header /> <ChangePassword/><Footer /></>} />
           <Route path="/claim" element={ <><Header /> <Claim/><Footer /></>} />
           <Route path="/mark-exit" element={ <><Header /> <MarkExit/><Footer /></>} />

          <Route path="contact-details" element={ <><Header/><ChangeContactDetails/><Footer/> </> } />
          <Route path="/home"element={<><Header /><NavBar/><Footer /></>}/>
           <Route path="/kyc"element={<><Header /><Kyc /><Footer /></>}/>
           <Route path="/epf-transfer" element={<><CollapsiblePage /></>} />
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <NavBar />
                <Profile />
                <Footer />
              </>
            }
          />
          <Route
            path="/service-history"
            element={
              <>
                <Header />
                <Passbook />
                <Footer />
              </>
            }
          />
          <Route
            path="/uan-card"
            element={
              <>
                <Header />
                <UANCard />
                <Footer />
              </>
            }
          />
          <Route
            path="/Passbook"
            element={
              <>
                <Header />
                <Passbook />
                <Footer />
              </>
            }
          />
           <Route
            path="/e-nomination"
            element={
              <>
                <Header />
                <ENomaination />
                <Footer />
              </>
            }
          />
           <Route
            path="/joint-declaration"
            element={
              <>
                <Header />
                <JointDeclaration/>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
