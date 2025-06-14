import React from "react";
import CollapsibleBox from "./CollapsibleBox";
import InstructionsList from "./InstructionList/InstructionsList";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import PresentAccountDetails from "./PresentAccountDetails/PresentAccountDetails";
import PreviousAccountDetailsForm from "./PresentAccountDetails/PreviousAccountDetailsForm";
import NavBar from "../../NavBar/NavBar";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const CollapsiblePage = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20 min-h-screen bg-gray-50 p-4">
        <CollapsibleBox title="Instructions" sectionKey="instructions">
          <InstructionsList />
        </CollapsibleBox>

        <CollapsibleBox title="Personal Information" sectionKey="personalInfo">
          <PersonalInfo />
        </CollapsibleBox>

        {/* ✅ New CollapsibleBox for Present Account Details */}
        <CollapsibleBox
          title="Present Account Details"
          sectionKey="presentAccountDetails"
        >
          <PresentAccountDetails />
        </CollapsibleBox>
        <CollapsibleBox
  title="Previous Account Details"
  sectionKey="previousAccountDetails"
>
  <PreviousAccountDetailsForm />
</CollapsibleBox>
      </div>
      <Footer />
    </>
  );
};

export default CollapsiblePage;
