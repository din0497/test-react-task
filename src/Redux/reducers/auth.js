import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const baseURL = "http://92.63.206.40:1122/api";

const initialState = {
  authed: localStorage.getItem("token") ? true : false,
  token: null,
  userInfo: {},
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.authed = true;
      state.token = action.payload;
    },
    setUserData: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { loginSuccess, setUserData } = auth.actions;

export default auth.reducer;

export const logIn = (login, password, onSuccess, onError) => async (dispatch) => {
  try {
    let formData = new FormData();
    formData.append("login", login);
    formData.append("password", password);
    const res = await axios.post(`${baseURL}/login`, formData);
    if (res.data.msg == "ok") {
      dispatch(loginSuccess(res.data.token));
      onSuccess()
    }
    console.log(res);
       return false
  } catch (err) {
    console.log(err);
  }
};

export const getUser = () => async (dispatch, getState) => {
  try {
    const { token } = getState((state) => state.auth);
    const res = await axios.get(`${baseURL}/user`, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log(res);
    if (res.data) {
      dispatch(setUserData(res.data));
    }
    return res;
  } catch (err) {
    console.log(err.response.data);
  }
};
