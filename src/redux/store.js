// store.jsx
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/LoginForm/userSlice";
import collapsibleReducer from "../components/OnlineService/OneMember/collapsibleSlice";
import personalInfoReducer from "../components/OnlineService/OneMember/PersonalInfo/personalInfoSlice"; // ✅ new import
import presentAccountDetailsReducer from "../components/OnlineService/OneMember/PresentAccountDetails/presentAccountDetailsSlice"; // ✅ new

export const store = configureStore({
  reducer: {
    user: userReducer,
    collapsible: collapsibleReducer,
    personalInfo: personalInfoReducer,
    presentAccountDetails: presentAccountDetailsReducer, // ✅ add to store
  },
});
