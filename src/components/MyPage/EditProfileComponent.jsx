import { useEffect, useState } from "react";
import user_img_ex from ".././../assets/mypage/user_img_ex.svg";
import Input from "../Common/Input";
import EditInputField from "./EditInputField";
import { getNicknameDoubleCheck } from "../../services/api/auth";
import Button from "../Common/Button";
import MajorComponent from "./MajorComponent";
import AlarmSettingComponent from "./AlarmSettingComponent";

const EditProfileComponent = () => {
  const [nicknameInputValue, setNicknameInputValue] = useState("");
  const [nicknameDoubleCheck, setNicknameDoubleCheck] = useState(true);
  const [nicknameDoubleCheckMsg, setNicknameDoubleCheckMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(false);
  const [isNextButtonActive, setIsNextButtonActive] = useState(false);

  useEffect(() => {
    setIsNextButtonActive(
      isNicknameValid &&
        isPasswordValid &&
        isPasswordCheckValid &&
        phoneNumber !== "" &&
        nicknameDoubleCheckMsg === "사용 가능한 닉네임입니다."
    );
  }, [
    isNicknameValid,
    isPasswordValid,
    isPasswordCheckValid,
    phoneNumber,
    nicknameDoubleCheckMsg,
  ]);

  const handleNicknameInputValue = (e) => {
    setNicknameInputValue(e.target.value);
  };

  const handlePasswordInputValue = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckInputValue = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handlePhoneNumberInputValue = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleNextButton = () => {
    // const filteredPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");
    // setShowSignUpContainer2({
    //   nickname,
    //   username: email,
    //   password,
    //   passwordConfirm: passwordCheck,
    //   phoneNumber: filteredPhoneNumber,
    // });
  };

  const handleNicknameDoubleCheck = async () => {
    const res = await getNicknameDoubleCheck(nicknameInputValue);
    setNicknameDoubleCheckMsg(res);

    if (res === "이미 사용 중인 닉네임입니다.") {
      setNicknameDoubleCheck(false);
    } else {
      setNicknameDoubleCheck(true);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 text-neutralBlack">
        <div className="text-base font-semibold">프로필 수정</div>
        <div className="text-sm font-medium text-gray_400">
          편집 버튼을 클릭해서 프로필 정보를 수정할 수 있어요.
        </div>
        <div className="flex flex-col gap-[1.38rem] items-center  mt-3 mb-7 pt-4">
          <div className="w-20 h-20">
            <img src={user_img_ex} />
          </div>
          <div className="flex gap-4">
            <button className="flex items-center text-center h-6 px-3 py-[0.38rem] rounded-[0.25rem] bg-secondary_bg text-xs text-gray_400 hover:text-primary_blue">
              사진 업로드
            </button>
            <button className="flex items-center h-6 px-3 py-[0.38rem] rounded-[0.25rem] bg-secondary_bg text-xs text-gray_400 hover:text-primary_blue">
              사진 삭제
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <EditInputField
              fieldName="닉네임"
              type="nickname"
              placeholder="한글/영문대소문자/2~10자"
              width="17rem"
              showButton={true}
              changeInputValue={handleNicknameInputValue}
              value={nicknameInputValue}
              onValidateChange={setIsNicknameValid}
              handleDoubleCheck={handleNicknameDoubleCheck}
              doubleCheckMsg={nicknameDoubleCheckMsg}
              doubleCheckTF={nicknameDoubleCheck}
              setDoubleCheckMsg={setNicknameDoubleCheckMsg}
            />
            <EditInputField
              fieldName="이메일"
              type="email"
              width="23rem"
              value="email@naver.com"
              readonly={true}
            />
            <EditInputField
              fieldName="비밀번호 변경"
              type="password"
              width="23rem"
              placeholder="영문대소문자/숫자/특수문자 모두 포함/8~16자"
              changeInputValue={handlePasswordInputValue}
              value={password}
              onValidateChange={setIsPasswordValid}
            />
            <EditInputField
              fieldName="비밀번호 확인"
              type="password"
              width="23rem"
              changeInputValue={handlePasswordCheckInputValue}
              value={passwordCheck}
              onValidateChange={setIsPasswordCheckValid}
              password={password}
            />
            <EditInputField
              fieldName="전화번호"
              width="23rem"
              value={phoneNumber}
              changeInputValue={handlePhoneNumberInputValue}
            />
          </div>
          <div className="w-[30rem] border-b-[0.0625rem] border-gray_100"></div>
          <MajorComponent />
          <div className="w-[30rem] border-b-[0.0625rem] border-gray_100"></div>
          <AlarmSettingComponent />
          <div className="mt-1">
            <button
              className={`mt-[16px] w-[112px] h-[40px] ${
                isNextButtonActive
                  ? "bg-primary_blue"
                  : "bg-neutralgray cursor-not-allowed"
              } text-neutralwhite rounded-[4px]`}
              onClick={handleNextButton}
              disabled={!isNextButtonActive}
            >
              완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProfileComponent;
