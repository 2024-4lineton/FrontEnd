import axios from "axios";

const BASE_URL = "https://metalog.store";

export const defaultApi = axios.create({
  baseURL: BASE_URL,
  headers: {
      "Content-Type": "application/json",
  },
});