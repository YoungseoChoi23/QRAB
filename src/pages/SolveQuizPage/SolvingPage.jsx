import NavBar from "../../components/Common/NavBar";
import SolveQuizComponent from "../../components/SolveQuizPage/SolveQuizComponent";

const SolvingPage = () => {
  return (
    <>
      <div className={`w-full h-screen bg-neutralwhite `}>
        <NavBar />
        <SolveQuizComponent />
      </div>
    </>
  );
};
export default SolvingPage;
