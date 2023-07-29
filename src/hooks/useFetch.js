import axios from "axios";

export const useFetch = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "aae01abc3emsha73c8d08688ded1p1275acjsne6c5237181b9",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
      params: {
        locationExternalIDs: "5002,6020",
        purpose: "for-rent",
        hitsPerPage: "25",
        page: "0",
        lang: "en",
        sort: "city-level-score",
        rentFrequency: "monthly",
        categoryExternalID: "4",
      },
    });
    const data = response.data.hits;
    return data;
  } catch (error) {
    console.log(error);
  }
};
