import dotenv from "dotenv";
import { BASE_API_URL } from "../constants/index.js";
import { ErrorHandling } from "../helpers/index.js";
dotenv.config();

export const getArticles = async (req, res) => {
  try {
    const apiCall = await fetch(
      `${BASE_API_URL}?api-key=${process.env.AUTHENTICATION_KEY}`
    );
    const response = await apiCall.json();
    if (!response) {
      ErrorHandling(res, 400);
    }
    const filterResponse = response.results.map((article) => {
      const obj = {
        title: article.title,
        abstract: article.abstract,
        url: article.url,
        image: article.multimedia[2],
      };
      return obj;
    });
    return res.json(filterResponse);
  } catch (error) {
    ErrorHandling(res, 500);
  }
};
