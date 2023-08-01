import axios from "axios";

export const useFetch = async (url, params) => {
  try {
    console.log("fetching...");
    const response = await axios.get(url, {
      headers: {
    'X-RapidAPI-Key': 'b88fb84a70msh4dad4efbd7f7061p1692c3jsnd3aec78be49e',
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
