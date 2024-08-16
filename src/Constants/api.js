// .ENV
export const baseUrl = "http://doodlebluelive.com:2223/api/v1",
  authService = `${baseUrl}/users`,
  propertyBasicDetailsService = `${baseUrl}/property`;

export const endpoints = {
  auth: {
    SEND_OTP: `${authService}/sendOTP`,
    VERIFY_OTP: `${authService}/verifyOTP`,
    CREATE_PASSWORD: `${authService}/createPassword`,
    LOGIN: `${authService}/signIn`,
    RESET_PASSWORD: `${authService}/resetPassword`,
    FORGET_PASSWORD: `${authService}/forgetPassword `,
    LOGOUT: `${authService}/logout`,
  },
  basicdetails: {
    ADD_BASIC_DETAILS: `${propertyBasicDetailsService}/basicDetails`,
    ADD_RESIDENT_TYPE: `${propertyBasicDetailsService}/residentType`,
    ADD_PROPERTY_TYPE: `${propertyBasicDetailsService}/addType`,
    GET_PROPERTY_TYPES: `${propertyBasicDetailsService}/typeList`,
    GET_RESIDENT_TYPES: `${propertyBasicDetailsService}/residentType`,
    GET_BASIC_DETAILS: `${propertyBasicDetailsService}/basicDetails`,
  },
  uploadImageAndDocuments: {
    UPLOAD_IMAGES_AND_DOCUMENTS: `${propertyBasicDetailsService}/fileUploads`,
    PROCEED_IMAGES_AND_DOCUMENTS: `${propertyBasicDetailsService}/createMedia`,
    GET_IMAGES_AND_DOCUMENTS: `${propertyBasicDetailsService}/media/list`,
  },
  companyDetails: {
    ADD_COMPANY: `${propertyBasicDetailsService}/company`,
    GET_COMPANY_DETAILS: `${propertyBasicDetailsService}/company`,
  },
  stayDetails: {
    ADD_UPDATE_STAY_TYPE: `${propertyBasicDetailsService}/stayType`,
    ADD_DEFINE_ROOM_TYPE: `${propertyBasicDetailsService}/roomType`,
    GET_STAY_TYPE: `${propertyBasicDetailsService}/stayType`,
  },
  chargersAndTimings: {
    ADD_CHARGERS_TIMINGS: `${propertyBasicDetailsService}/chargesTimings`,
    GET_CHARGERS_TIMINGS: `${propertyBasicDetailsService}/chargesTimings`,
  },
  roomPackages: {
    ADD_ROOM_PACKAGES: `${propertyBasicDetailsService}/roomPackage`,
    GET_ROOM_PACKAGES: `${propertyBasicDetailsService}/roomPackage`,
    GET_ROOM_TYPE_LIST: `${propertyBasicDetailsService}/roomType`,
  },
  serviceAmenity: {
    GET_FREQUENCY_LIST: `${propertyBasicDetailsService}/frequencyList`,
    ADD_FREQUENCY: `${propertyBasicDetailsService}/addFrequencies`,
    SERVICES_AMENITIES: `${propertyBasicDetailsService}/servicesAmenities`,
    GET_ROOM_TYPE: `${propertyBasicDetailsService}/roomType`,
  },
  tabStatus: {
    GET_TAB_STATUS: `${propertyBasicDetailsService}/tabStatus`,
  },
  propertyList: {
    GET_PROPERTY_LIST: `${propertyBasicDetailsService}/list`,
    DELETE_PROPERTY_LIST: `${propertyBasicDetailsService}/delete`,
  },
};
