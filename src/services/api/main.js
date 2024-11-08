import client from "./client";

const get = async (url) => {
  const res = await client.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const getMain = async () => {
  try {
    const res = await get("/qrab");
    console.log("메인 데이터 가져오기 성공", res);
    return res;
  } catch (error) {
    console.error("메인 데이터 가져오기 실패", error);
  }
};
