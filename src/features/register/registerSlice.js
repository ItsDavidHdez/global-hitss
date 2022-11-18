import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "David",
    email: "david@example.com",
    gener: "Hombre",
    hobbies: ["dkashdjk", "hobbi2"],
  },

  {
    id: 2,
    name: "Daniela",
    email: "daniela@example.com",
    gener: "Mujer",
    hobbies: ["dkashdjk", "hobbi2"],
  },
];

export const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {},
});

export default registerSlice.reducer;
