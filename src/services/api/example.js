import client from "./client";

export const get = async (url) => {
  const res = await client.get(url);
  return res?.data;
};

export const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};
