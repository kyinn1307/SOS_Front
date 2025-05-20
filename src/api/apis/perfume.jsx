import { postData } from "./apiClient";

export const createCustomPerfume = (data) => postData("/perfumes/custom", data);

export const createOriginalPerfume = (data) =>
  postData("/perfumes/production", data);
