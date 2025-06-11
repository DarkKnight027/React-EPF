import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  documents: {
    Bank: {
      imageBase64: null,
      isUploaded: false,
    },
    PAN: {
      imageBase64: null,
      isUploaded: false,
    },
    Passport: {
      imageBase64: null,
      isUploaded: false,
    },
  },
};

const kycSlice = createSlice({
  name: 'kyc',
  initialState,
  reducers: {
    saveKycDocument: (state, action) => {
      const { type, imageBase64 } = action.payload;
      if (state.documents[type]) {
        state.documents[type] = {
          imageBase64,
          isUploaded: true,
        };
      }
    },
    removeKycDocument: (state, action) => {
      const { type } = action.payload;
      if (state.documents[type]) {
        state.documents[type] = {
          imageBase64: null,
          isUploaded: false,
        };
      }
    },
    resetAllKycDocuments: (state) => {
      Object.keys(state.documents).forEach((type) => {
        state.documents[type] = {
          imageBase64: null,
          isUploaded: false,
        };
      });
    },
  },
});

export const { saveKycDocument, removeKycDocument, resetAllKycDocuments } = kycSlice.actions;
export default kycSlice.reducer;
