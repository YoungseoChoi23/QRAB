import client from "./client";

const get = async (url) => {
  const res = await client.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const getUnsolvedQuiz = async (noteId, page) => {
  try {
    const data = await get(`/quiz-solving/${noteId}/unsolved?page=${page}`);
    console.log("미풀이 퀴즈 조회 성공", data);
    return data;
  } catch (error) {
    console.error("미풀이 퀴즈 조회 실패", error);
  }
};

export const getQuestions = async (quizSetId) => {
  try {
    const data = await get(`/quiz-solving/${quizSetId}/quizzes`);
    console.log("퀴즈 문제 조회 성공", data);
    return data;
  } catch (error) {
    console.error("퀴즈 문제 조회 실패", error);
  }
};

export const postQuizResult = async (quizSetId, resultData) => {
  try {
    const data = await post(
      `/quiz-solving/${quizSetId}/quizzes/grade`,
      resultData
    );
    console.log("퀴즈 채점 성공", data);
    return data;
  } catch (error) {
    console.error("퀴즈 채점 실패", error);
  }
};
