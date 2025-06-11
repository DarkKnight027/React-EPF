import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/LoginForm/userSlice";
import collapsibleReducer from "../components/OnlineService/OneMember/collapsibleSlice";
import personalInfoReducer from "../components/OnlineService/OneMember/PersonalInfo/personalInfoSlice";
import presentAccountDetailsReducer from "../components/OnlineService/OneMember/PresentAccountDetails/presentAccountDetailsSlice";
import claimReducer from "../components/OnlineService/Claim/claimSlice"; // ✅ newly added
import trackClaimReducer from "../components/OnlineService/TrackClaimStatus/trackClaimSlice";
import kycReducer from "../components/Manage/Kyc/kycSlice";
import companyReducer from "../components/Manage/JointDecleration/companySlice";
import eNominationReducer from "../components/Manage/ENomination/eNominationSlice"; 

export const store = configureStore({
  reducer: {
    user: userReducer,
    collapsible: collapsibleReducer,
    personalInfo: personalInfoReducer,
    presentAccountDetails: presentAccountDetailsReducer,
    claim: claimReducer, // ✅ add claim reducer
     trackClaim: trackClaimReducer,
        kyc: kycReducer,
    company: companyReducer,
    eNomination: eNominationReducer, 
  },
});
