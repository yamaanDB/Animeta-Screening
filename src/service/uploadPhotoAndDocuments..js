import axios from "axios";
import { endpoints } from "Constants/api";
import axiosHelpers from "Constants/axiosHelpers";
import {
  updateResidentTypes,
  updatePropertyTypes,
  setBasicDetails,
} from "../redux/slice/basicSlice";

export const uploadImagesAndDocuments = async (data) => {
  let request = await axios({
    method: "post",
    url: `${endpoints.uploadImageAndDocuments.UPLOAD_IMAGES_AND_DOCUMENTS}`,
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data,
  }).catch(axiosHelpers);
  return request;
};
export const submitImagesAndDocuments = async (data) => {
  let request = await axios({
    method: "post",
    url: `${endpoints.uploadImageAndDocuments.PROCEED_IMAGES_AND_DOCUMENTS}`,
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data,
  }).catch(axiosHelpers);
  return request;
};
export const getImagesAndDocuments = async (Id) => {
  try {
    const url = `${endpoints.uploadImageAndDocuments.GET_IMAGES_AND_DOCUMENTS}/${Id}`;
    const response = await axios.get(url, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching company details:", error);
    throw error;
  }
};
