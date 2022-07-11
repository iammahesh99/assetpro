export const GET_USER_PREFERENCE_DATA_URL =
  "https://assetpro-dev.c5ailabs.com/api/preference_check";
export const getUserPreference = async (bearerToken) =>
  fetch(GET_USER_PREFERENCE_DATA_URL, {
   method:'POST',
    headers: { 
      'Content-Type':'application/json',
      'Authorization': "Bearer "+ bearerToken 
    },
    referrerPolicy:'no-referrer'
   });
