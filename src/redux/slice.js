import { createSlice } from '@reduxjs/toolkit';


const valueSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '', },
  reducers: {
    createUserAction(state, action) {
      state.contacts.unshift(action.payload);
    },
    deleteUserAction(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
    findUserAction(state, action) {
      state.filter = action.payload;
    },
  },
});


export const { createUserAction, deleteUserAction, findUserAction } = valueSlice.actions;
export const usersReducer = valueSlice.reducer