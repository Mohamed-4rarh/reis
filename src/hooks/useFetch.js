import axios from "axios";

export const useFetch = async (url, params) => {
  try {
    console.log("test fetch");
    const response = await axios.get(url, {
      headers: {
    'X-RapidAPI-Key': 'aae01abc3emsha73c8d08688ded1p1275acjsne6c5237181b9',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
      params: params,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
