import axios from "axios";
import type { UnsplashPhoto } from "../types/unsplash";

const accessKey = import.meta.env.VITE_UNSPLASH_KEY;

export const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    client_id: accessKey,
  },
});

export const getPhotos = async (): Promise<UnsplashPhoto[]> => {
  const res = await unsplash.get("/photos", {
    params: { per_page: 12 },
  });
  return res.data;
};