import client from "./client";

const get = async (url) => {
  const res = await client.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const postAddFriend = async (addFriendData) => {
  try {
    const data = await post(`/friends`, addFriendData);
    console.log("친구 추가 성공", data);
    return data;
  } catch (error) {
    console.error("친구 추가 실패", error);
  }
};
