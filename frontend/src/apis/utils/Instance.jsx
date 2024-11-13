const BASE_URL = "https://metalog.store";

const defaultApi = axios.create({
  baseURL: BASE_URL,
  headers: {
      "Content-Type": "application/json",
  },
});