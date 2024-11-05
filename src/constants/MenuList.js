export const MenuList = [
  { id: 1, name: "홈", to: "/main" },
  { id: 2, name: "노트 저장소", to: "/storenote" },
  {
    id: 3,
    name: "퀴즈 연구소",
    to: "/quizlab",
    subMenu: [
      { name: "퀴즈 생성하기", to: "/quizlab/createQuiz" },
      { name: "퀴즈 보관소", to: "/quizlab/quizStorage" },
      { name: "북마크", to: "/quizlab/bookMark" },
    ],
  },
  { id: 4, name: "퀴즈 풀기", to: "/solvequiz" },
  {
    id: 5,
    name: "학습 분석",
    to: "/learning-analytics",
    subMenu: [
      { name: "월별 학습 기록", to: "/learning-analytics/monthly" },
      { name: "학습 결과 분석", to: "/learning-analytics/detail" },
    ],
  },
];
