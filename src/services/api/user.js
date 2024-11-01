import client from "./client";

const get = async (url) => {
  const res = await client.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const getProfile = async () => {
  try {
    const res = await get("/profiles");
    console.log(res);
    return res;
  } catch (error) {
    console.error("프로필 가져오기 실패", error);
  }
};

export const GetDoubleCheckNickname = async (nickname) => {
  try {
    const res = await get(`/users/check-nickname?nickname=${nickname}`);
    console.log(res);
    return res;
  } catch (error) {
    console.error("중복 체크 실패");
  }
};
