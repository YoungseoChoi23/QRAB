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

export const patchProfile = async (editedData) => {
  try {
    const res = await client.patch("/profiles/updateProfile", editedData, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.error("프로필 편집하기 실패", error);
  }
};

export const putMajorEdit = async (editedMajor) => {
  try {
    const res = await client.put("/profiles/updateMajor", editedMajor);
    console.log(res);
    return res;
  } catch (error) {
    console.error("학과 편집하기 실패", error);
  }
};
