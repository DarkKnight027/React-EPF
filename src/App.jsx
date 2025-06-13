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
import CollapsiblePage from "./components/OnlineService/OneMember/CollapsiblePage";
import ChangePassword from "./components/Account/ChangePassword";
import Claim from "./components/OnlineService/Claim/Claim";
import MarkExit from "./components/Manage/MarkExit/MarkExit";
import TrackClaimStatus from "./components/OnlineService/TrackClaimStatus/TrackClaimStatus";
import Annexure from "./components/OnlineService/Annexure/Annexure";
import ServiceHistory from "./view/serviceHistory/ServiceHistory";

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
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <LoginForm />
                <Footer />
              </>
            }
          />
          <Route
            path="/Change-password"
            element={
              <>
                <Header />
                <NavBar /> <ChangePassword />
                <Footer />
              </>
            }
          />
          <Route
            path="/claim"
            element={
              <>
                <Header />
                <NavBar /> <Claim />
                <Footer />
              </>
            }
          />
          <Route
            path="/mark-exit"
            element={
              <>
                <Header />
                <NavBar /> <MarkExit />
                <Footer />
              </>
            }
          />
          <Route
            path="/claim-status"
            element={
              <>
                <Header />
                <NavBar /> <TrackClaimStatus />
                <Footer />
              </>
            }
          />
          <Route
            path="/annexure-k"
            element={
              <>
                <Header />
                <NavBar /> <Annexure />
                <Footer />
              </>
            }
          />
          <Route
            path="contact-details"
            element={
              <>
                <Header />
                <NavBar />
                <ChangeContactDetails />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <NavBar />
                <Footer />
              </>
            }
          />
          <Route
            path="/kyc"
            element={
              <>
                <Header />
                <NavBar />
                <Kyc />
                <Footer />
              </>
            }
          />
          <Route
            path="/epf-transfer"
            element={
              <>
                <CollapsiblePage />
              </>
            }
          />
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
                <NavBar />
                <ServiceHistory />
                <Footer />
              </>
            }
          />
          <Route
            path="/uan-card"
            element={
              <>
                <Header />
                <NavBar />
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
                <NavBar />
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
                <NavBar />
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
                <NavBar />
                <JointDeclaration />
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
