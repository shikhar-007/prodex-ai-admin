import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  canEnterOtp: false,
  openSuccessModal: false,
  qrValue: "",
  verifyOtp: false,
  authToken: "",
  token: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setCanEnterOtp: (state, action) => {
      state.canEnterOtp = action.payload;
    },
    setOpenSuccessModal: (state, action) => {
      state.openSuccessModal = action.payload;
    },
    setQrValue: (state, action) => {
      state.qrValue = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setVerifyOtp: (state, action) => {
      state.verifyOtp = action.payload;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setCanEnterOtp,
  setOpenSuccessModal,
  setQrValue,
  setVerifyOtp,
  setAuthToken,
  setToken,
} = globalSlice.actions;

export default globalSlice.reducer;
