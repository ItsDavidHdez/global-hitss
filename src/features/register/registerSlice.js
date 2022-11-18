import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: [],
  reducers: {
    addRegister: (state, action) => {
      state.push(action.payload);
      console.log(state);
      localStorage.setItem("register", JSON.stringify(state));
      const getItem = JSON.parse(localStorage.getItem("register"));
      console.log(getItem);
      getItem.push(action.payload);
      localStorage.setItem("register", JSON.stringify(getItem));
    },
  },
});

export const { addRegister } = registerSlice.actions;
export default registerSlice.reducer;
