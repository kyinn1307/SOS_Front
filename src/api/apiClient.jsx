import axiosInstance from "./axiosInstance";

export const getData = (url, config) => axiosInstance.get(url, config);

export const postData = (url, data, config) =>
  axiosInstance.post(url, data, config);

export const patchData = (url, data, config) =>
  axiosInstance.patch(url, data, config);

export const deleteData = (url, config) => axiosInstance.delete(url, config);
