import Button from "../Common/Button";
import Input from "../Common/Input";
import stageone from "../../assets/authpage/stage_one_active.svg";
import SignUpInputField from "./SignUpInputField";
import { useState } from "react";
const SignUpContainer = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  const changeNickname = (e) => {
    setNickname(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="m-auto w-[620px] h-[480px] rounded-[16px] border-[1px] border-[#D9DBE1] ">
      <div className="flex justify-center mt-[32px] mb-[32px]">
        <img src={stageone} />
      </div>
      <div className="flex flex-col gap-[20px] items-center">
        <SignUpInputField
          fieldName="닉네임"
          showButton={true}
          placeholder="특수문자 제외 2~10자"
          autoFocus={true}
          changeInputValue={changeNickname}
          value={nickname}
        />
        <SignUpInputField
          fieldName="이메일"
          showButton={true}
          changeInputValue={changeEmail}
          value={email}
        />
        <SignUpInputField
          fieldName="비밀번호"
          width="336px"
          showButton={false}
          placeholder="영문대소문자/숫자/특수문자 모두 포함/8~16자"
          changeInputValue={changePassword}
          value={password}
        />
        <SignUpInputField
          fieldName="비밀번호 확인"
          width="336px"
          showButton={false}
          changeInputValue={changePasswordCheck}
          password={passwordCheck}
        />
        <SignUpInputField
          fieldName="전화번호"
          width="336px"
          showButton={false}
          changeInputValue={changePhoneNumber}
          password={phoneNumber}
        />
        <button className="mt-[16px] w-[112px] h-[40px] bg-neutralgray text-neutralwhite rounded-[4px]">
          다음
        </button>
      </div>
    </div>
  );
};
export default SignUpContainer;
