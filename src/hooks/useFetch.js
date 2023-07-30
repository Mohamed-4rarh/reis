import axios from "axios";

export const useFetch = async (url, params) => {
  try {
    console.log("test fetch");
    const response = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "4cb711fb4amsh34a8679891bd0b6p16f5b5jsn803d8c49fefb",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
      params: params,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
