import { useState } from "react";
import SignUpContainer from "../../components/AuthPage/SignUpContainer";
import Input from "../../components/Common/Input";
import NavBar from "../../components/Common/NavBar";
import SignUpContainer2 from "../../components/AuthPage/SignUpContainer2";

const Signup = () => {
  const [showSignUpContainer, setShowSignUpContainer2] = useState(false);
  return (
    <>
      <NavBar />

      <div className="flex justify-center m-auto w-full min-w-[1396px] h-[700px] min-h-[500px] bg-neutralwhite absolute bottom-0 rounded-t-[40px] overflow-y-auto">
        <div className="text-2xl font-bold text-neutralwhite mt-[80px] flex justify-center absolute top-[-150px]">
          회원가입
        </div>
        {!showSignUpContainer && (
          <SignUpContainer setShowSignUpContainer2={setShowSignUpContainer2} />
        )}
        {showSignUpContainer && <SignUpContainer2 />}
      </div>
    </>
  );
};
export default Signup;
