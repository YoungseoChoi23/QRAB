import SignUpContainer from "../../components/AuthPage/SignUpContainer";
import Input from "../../components/Common/Input";
import NavBar from "../../components/Common/NavBar";

const Signup = () => {
  return (
    <>
      <NavBar />

      <div className="flex justify-center m-auto w-full min-w-[1396px] h-2/3 min-h-[500px] bg-neutralwhite absolute bottom-0 rounded-t-[40px]">
        <div className="text-2xl font-bold text-neutralwhite mt-[80px] flex justify-center absolute top-[-150px]">
          회원가입
        </div>
        <SignUpContainer />
      </div>
    </>
  );
};
export default Signup;
