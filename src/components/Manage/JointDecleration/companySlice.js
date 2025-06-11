// src/features/company/companySlice.js
import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    companies: [
  {
    "id": "c1",
    "name": "ABC Pvt Ltd",
    "details": "ABC Pvt Ltd is a software company in Mumbai.",
    "dateOfJoining": "2021-05-10",
    "dateOfleaving": "2020-11-22",
    "pfAmount": "₹1,20,000"
  },
  {
    "id": "c2",
    "name": "XYZ Corp",
    "details": "XYZ Corp specializes in electronics manufacturing in Delhi.",
    "dateOfJoining": "2020-11-22",
    "dateOfleaving": "2020-11-22",
    "pfAmount": "₹95,000"
  },
  {
    "id": "c3",
    "name": "LMN Ltd",
    "details": "LMN Ltd provides logistics services across India.",
    "dateOfJoining": "2019-07-01",
    "dateOfleaving": "2020-11-22",
    "pfAmount": "₹1,45,500"
  }
],
  },
  reducers: {
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
  },
});

export const { setCompanies } = companySlice.actions;
export default companySlice.reducer;
