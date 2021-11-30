import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "ddb2864c62mshd3a06510c7ee159p1b122fjsnd2e3399bdbd7",
    },
  });
  return data
};
