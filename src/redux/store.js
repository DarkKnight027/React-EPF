// store.jsx
import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../components/LoginForm/userSlice';
import collapsibleReducer from '../components/OnlineService/OneMember/collapsibleSlice';
import personalInfoReducer from '../components/OnlineService/OneMember/PersonalInfo/personalInfoSlice';
import presentAccountDetailsReducer from '../components/OnlineService/OneMember/PresentAccountDetails/presentAccountDetailsSlice';
import contactReducer from '../components/Manage/Contact/contactSlice';
import exitReducer from '../components/Manage/MarkExit/exitSlice'; // ✅ fixed typo here

export const store = configureStore({
  reducer: {
    user: userReducer,
    collapsible: collapsibleReducer,
    personalInfo: personalInfoReducer,
    presentAccountDetails: presentAccountDetailsReducer,
    contact: contactReducer,
    exit: exitReducer, // ✅ correct key and variable name
  },
});
