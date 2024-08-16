import axios from "axios";
import { endpoints } from "Constants/api";
import axiosHelpers from "Constants/axiosHelpers";

export const SignInAPI = async (data) => {
  const request = await axios({
    method: "post",
    url: endpoints.auth.SIGN_IN,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: data,
  }).catch(axiosHelpers);
  return request;
};

export const resetPassword = async (data) => {
  let request = await axios({
    method: "post",
    url: endpoints.auth.RESET_PASSWORD,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: data,
  });
  return request;
};

export const verifyOtp = async (data) => {
  let request = await axios({
    method: "post",
    url: endpoints.auth.VERIFY_OTP,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: data,
  });
  return request;
};

export const updateUser = async (data) => {
  let request = await axios({
    method: "put",
    url: endpoints.auth.UPDATE_USER,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: data,
  });
  return request;
};

export const changePassword = async (data) => {
  let request = await axios({
    method: "put",
    url: endpoints.auth.CHANGE_PASSWORD,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: data,
  });
  return request;
};

export const forgotPassword = async (data, token) => {
  let request = await axios({
    method: "put",
    url: endpoints.auth.FORGOT_PASSWORD,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: data,
  });
  return request;
};

export const getUserById = async (id) => {
  let request = await axios({
    method: "get",
    url: `${endpoints.auth.GET_USER_BY_ID}/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return request;
};
