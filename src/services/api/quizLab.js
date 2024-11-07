import client from "./client";

const get = async (url) => {
  const res = await client.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const getStoredQuizNote = async (page) => {
  try {
    const data = await get(`/quiz-lab/notes?page=${page}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(console.error("노트 조회 실패", error));
  }
};

export const postNewQuiz = async (quizNum) => {
  try {
    const data = await post(`/quiz-lab/generate`, quizNum);
    console.log("퀴즈 생성 성공", data);
    return data;
  } catch (error) {
    console.error("퀴즈 생성하기 실패", error);
  }
};

export const postReQuiz = async (quizNum) => {
  try {
    const data = await post(`/quiz-lab/regenerate`, quizNum);
    console.log("퀴즈 재생성 성공", data);
    return data;
  } catch (error) {
    console.error("퀴즈 재생성하기 실패", error);
  }
};

export const getStoredQuiz = async (page) => {
  try {
    const data = await post(`/quiz-lab/quizzes?page=${page}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error("퀴즈 조회 실패", error);
  }
};
