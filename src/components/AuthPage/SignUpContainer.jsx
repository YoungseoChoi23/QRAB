import Button from "../Common/Button";
import Input from "../Common/Input";
import stageone from "../../assets/authpage/stage_one_active.svg";
import SignUpInputField from "./SignUpInputField";
import { useEffect, useState } from "react";
import {
  getEmailDoubleCheck,
  getNicknameDoubleCheck,
} from "../../services/api/auth";
const SignUpContainer = ({ setShowSignUpContainer2 }) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNextButtonActive, setIsNextButtonActive] = useState(false);

  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(false);

  //닉네임, 이메일 중복 체크 메시지
  const [emailDoubleCheckMsg, setEmailDoubleCheckMsg] = useState("");
  const [nicknameDoubleCheckMsg, setNicknameDoubleCheckMsg] = useState("");
  //중복 체크 메시지가 사용 가능하다는 메시지면 true, 아니면 false
  const [doubleEmailCheck, setEmailDoubleCheck] = useState(false);
  const [doubleNicknameCheck, setNicknameDoubleCheck] = useState(false);

  useEffect(() => {
    setIsNextButtonActive(
      isNicknameValid &&
        isEmailValid &&
        isPasswordValid &&
        isPasswordCheckValid &&
        phoneNumber !== "" &&
        emailDoubleCheckMsg === "사용 가능한 이메일입니다." &&
        nicknameDoubleCheckMsg === "사용 가능한 닉네임입니다."
    );
  }, [
    isNicknameValid,
    isEmailValid,
    isPasswordValid,
    isPasswordCheckValid,
    phoneNumber,
    emailDoubleCheckMsg,
    nicknameDoubleCheckMsg,
  ]);

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

  const handleNextButton = () => {
    const filteredPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");

    setShowSignUpContainer2({
      nickname,
      username: email,
      password,
      passwordConfirm: passwordCheck,
      phoneNumber: filteredPhoneNumber,
    });
  };

  const handleNicknameDoubleCheck = async () => {
    const res = await getNicknameDoubleCheck(nickname);
    setNicknameDoubleCheckMsg(res);

    if (res === "이미 사용 중인 닉네임입니다.") {
      setNicknameDoubleCheck(false);
    } else {
      setNicknameDoubleCheck(true);
    }
  };

  const handleEmailDoubleCheck = async () => {
    const res = await getEmailDoubleCheck(email);
    setEmailDoubleCheckMsg(res);
    if (res === "이미 사용 중인 이메일입니다.") {
      setEmailDoubleCheck(false);
    } else {
      setEmailDoubleCheck(true);
    }
  };

  return (
    <div className="relative mt-[36.5px] w-[620px] h-[480px] rounded-[16px] border-[1px] border-[#D9DBE1] ">
      <div className="flex justify-center mt-[32px] mb-[32px]">
        <img className="" src={stageone} />
      </div>
      <div className="flex flex-col gap-[20px] items-center ">
        <SignUpInputField
          fieldName="닉네임"
          showButton={true}
          placeholder="특수문자 제외 2~10자"
          autoFocus={true}
          changeInputValue={changeNickname}
          value={nickname}
          onValidateChange={setIsNicknameValid}
          handleDoubleCheck={handleNicknameDoubleCheck}
          doubleCheckMsg={nicknameDoubleCheckMsg}
          doubleCheckTF={doubleNicknameCheck}
          setDoubleCheckMsg={setNicknameDoubleCheckMsg}
        />
        <SignUpInputField
          fieldName="이메일"
          showButton={true}
          changeInputValue={changeEmail}
          value={email}
          onValidateChange={setIsEmailValid}
          handleDoubleCheck={handleEmailDoubleCheck}
          doubleCheckMsg={emailDoubleCheckMsg}
          doubleCheckTF={doubleEmailCheck}
          setDoubleCheckMsg={setEmailDoubleCheckMsg}
        />
        <SignUpInputField
          fieldName="비밀번호"
          width="336px"
          showButton={false}
          placeholder="영문대소문자/숫자/특수문자 모두 포함/8~16자"
          changeInputValue={changePassword}
          value={password}
          type="password"
          onValidateChange={setIsPasswordValid}
        />
        <SignUpInputField
          fieldName="비밀번호 확인"
          width="336px"
          showButton={false}
          changeInputValue={changePasswordCheck}
          value={passwordCheck}
          type="password"
          password={password} // 비밀번호를 전달하여 비교
          onValidateChange={setIsPasswordCheckValid}
        />
        <SignUpInputField
          fieldName="전화번호"
          width="336px"
          showButton={false}
          changeInputValue={changePhoneNumber}
          value={phoneNumber}
        />
        <button
          className={`mt-[16px] w-[112px] h-[40px] ${
            isNextButtonActive
              ? "bg-primary_blue"
              : "bg-neutralgray cursor-not-allowed"
          } text-neutralwhite rounded-[4px]`}
          onClick={handleNextButton}
          disabled={!isNextButtonActive}
        >
          다음
        </button>
      </div>
    </div>
  );
};
export default SignUpContainer;
