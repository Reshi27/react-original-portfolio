import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Navigate, useNavigate } from "react-router-dom";
export interface Auth {
  name: string;
  password: string;
}

const initialState: Auth = {
  name: "mahareshi",
  password: "reshi123",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authentication: (state, action) => {
      if (state.name === action.payload && state.password === action.payload) {
        alert("Login Successfull");
      } else {
        alert("Login Failed");
      }
    },
  },
});

export const { authentication } = authSlice.actions;

export default authSlice.reducer;
