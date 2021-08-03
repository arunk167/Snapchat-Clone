const API_BASE_URL = 'https://dummyapi.io/data/api';
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const USERS=getApiUrl('/user') 
// export const SIGNUP=getApiUrl('/user/registerUser')
// export const UPLOADIMAGE=getApiUrl('/common/uploadFile')
// export const OTPVERIFY=getApiUrl('/user/v1/verifyOtp')
// export const DISPLAYLIST=getApiUrl('/user/v1/getUserSearch')
// export const USER_NEAR_ME=getApiUrl('/user/v1/getUserNearMe')
 