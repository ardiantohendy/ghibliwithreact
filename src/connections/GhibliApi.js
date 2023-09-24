import axios from "axios";

const baseUrl = "https://ghibliapi.vercel.app/films";

export const getFilms = async () => {
  const films = await axios.get(baseUrl);
  //   console.log({ movie: films.data });
  return films.data;
};
