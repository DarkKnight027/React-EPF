import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nominations: [
    {
      id: 1,
      status: 'Nomination Successful',
      dateTime: '30-NOV-2023 17:50',
    },
    {
      id: 2,
      status: 'Pending Approval',
      dateTime: '01-DEC-2023 11:30',
    },
    {
      id: 3,
      status: 'Nomination Successful',
      dateTime: '15-DEC-2023 09:15',
    }
  ]
};

const eNominationSlice = createSlice({
  name: 'eNomination',
  initialState,
  reducers: {
    addNomination: (state, action) => {
      state.nominations.push(action.payload);
    }
  }
});

export const { addNomination } = eNominationSlice.actions;
export default eNominationSlice.reducer;
