import { useQuery } from "@tanstack/react-query";
import NavBar from "../../components/Common/NavBar";
import PageDefauleTemplate from "../../components/Common/PageDefauleTemplate";
import CreatedQuizComponent from "../../components/SolveQuizPage/CreatedQuizComponent";
import { getCategory } from "../../services/api/noteStore";

const SolveQuizPage = () => {
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
      <PageDefauleTemplate pageName="퀴즈 풀기">
        <CreatedQuizComponent categoryData={categoryData} />
      </PageDefauleTemplate>
    </>
  );
};
export default SolveQuizPage;
