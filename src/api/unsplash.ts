import axios from "axios";
import type { UnsplashPhoto } from "../types/unsplash";

const accessKey = import.meta.env.VITE_UNSPLASH_KEY;

export const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    client_id: accessKey,
  },
});

export const getPhotos = async (
  page: number,
  perPage: number
): Promise<{ data: UnsplashPhoto[]; total: number }> => {
  const res = await unsplash.get("/photos", {
    params: {
      page,
      per_page: perPage,
    },
  });

  const total = Number(res.headers["x-total"]);

  return {
    data: res.data,
    total,
  };
};
