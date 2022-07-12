export const GET_TA_INDICATION_DATA_URL =
  "https://assetpro-dev.c5ailabs.com/api/get_all_ta_and_indication";
export const get_all_ta_and_indication = async (bearerToken) =>
  fetch(GET_TA_INDICATION_DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + bearerToken,
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify({}),
  });
