import QuizLabContainer from "../../components/QuizLabPage/QuizLabContainer";
import CreateQuizModal from "../../components/QuizLabPage/Modal/CreateQuizModal";
import useIsCreateQuizModalStore from "../../store/isCreateQuizModalStore";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/api/noteStore";
import PageDefauleTemplate from "../../components/Common/PageDefauleTemplate";
import BookMarkComponent from "../../components/QuizLabPage/BookMarkComponent";

const BookMarkQuizPage = () => {
  const {
    isError: isCategoryError,
    data: categoryData,
    error: categoryError,
  } = useQuery({
    queryKey: ["getCategory"],
    queryFn: getCategory,
  });

  if (isCategoryError) {
    console.error("Error fetching categories:", categoryError);
    return <div>오류 발생: {categoryError.message}</div>;
  }

  if (!categoryData) {
    return <div>데이터가 없습니다.</div>;
  }
  return (
    <>
      <PageDefauleTemplate pageName="퀴즈 연구소">
        <BookMarkComponent categoryData={categoryData} />
      </PageDefauleTemplate>
    </>
  );
};

export default BookMarkQuizPage;
