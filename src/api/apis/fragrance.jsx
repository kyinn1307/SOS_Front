import { getData } from "../apiClient";

export const fetchFragranceCategories = () => getData("/fragrances/category");
