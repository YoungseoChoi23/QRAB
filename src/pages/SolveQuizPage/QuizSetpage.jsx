import PageDefauleTemplate from "../../components/Common/PageDefauleTemplate";
import QuizSetComponent from "../../components/SolveQuizPage/QuizSetComponent";
import SolveQuizComponent from "../../components/SolveQuizPage/SolveQuizComponent";

const QuizSetPage = () => {
  return (
    <>
      <PageDefauleTemplate pageName="퀴즈 풀기">
        <QuizSetComponent />
      </PageDefauleTemplate>
    </>
  );
};
export default QuizSetPage;
