import { useEffect, useState } from "react";
import user_img_ex from ".././../assets/mypage/user_img_ex.svg";
import Input from "../Common/Input";
import EditInputField from "./EditInputField";
import { getNicknameDoubleCheck } from "../../services/api/auth";
import Button from "../Common/Button";
import MajorComponent from "./MajorComponent";
import AlarmSettingComponent from "./AlarmSettingComponent";
import { patchProfile } from "../../services/api/user";
import useEditProfileStore from "../../store/editProfile";

const EditProfileComponent = ({ profileData, updatedMajor }) => {
  const [nicknameInputValue, setNicknameInputValue] = useState("");
  const [nicknameDoubleCheck, setNicknameDoubleCheck] = useState(true);
  const [nicknameDoubleCheckMsg, setNicknameDoubleCheckMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileImage, setProfileImage] = useState(null); // 사진 상태 추가
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(false);
  const [isNextButtonActive, setIsNextButtonActive] = useState(false);
  const [initImg, setInitImg] = useState("");
  const { setEditProfile } = useEditProfileStore();

  useEffect(() => {
    setInitImg(profileData.imgUrl);
    setNicknameInputValue(profileData.nickname);
    const formattedPhoneNumber = profileData.phoneNumber.replace(
      /(\d{3})(\d{3,4})(\d{4})/,
      "$1-$2-$3"
    );
    setPhoneNumber(formattedPhoneNumber);
  }, []);

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

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0]; // 선택한 파일
    if (file) {
      setProfileImage(file); // 상태에 파일을 저장
    }
  };

  const handleNextButton = async () => {
    const formData = new FormData();
    formData.append("nickName", nicknameInputValue);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber.replace(/-/g, ""));
    if (profileImage) {
      formData.append("imgUrl", profileImage);
    }
    console.log(formData.get("nickName"));
    console.log(formData.get("password"));
    console.log(formData.get("phoneNumber"));
    console.log(formData.get("imgUrl"));
    try {
      const res = await patchProfile(formData);
      console.log(res);

      if (res.data === "Profile updated successfully") {
        // 성공 메시지 확인
        setEditProfile(false);
      }
    } catch (error) {
      console.error("프로필 편집하기 실패:", error);
    }
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

  const handleDeleteImg = () => {
    setProfileImage(null);
  };

  return (
    <>
      <div className="flex flex-col gap-3 text-neutralBlack">
        <div className="text-base font-semibold">프로필 수정</div>
        <div className="text-sm font-medium text-gray_400">
          편집 버튼을 클릭해서 프로필 정보를 수정할 수 있어요.
        </div>
        <div className="flex flex-col gap-[1.38rem] items-center  mt-3 mb-7 pt-4">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={
                initImg
                  ? initImg
                  : profileImage
                  ? URL.createObjectURL(profileImage) // 파일 객체일 경우 URL 생성
                  : user_img_ex
              }
            />
          </div>
          <div className="flex gap-4">
            <label
              htmlFor="profileImage"
              className="flex items-center text-center h-6 px-3 py-[0.38rem] rounded-[0.25rem] bg-secondary_bg text-xs text-gray_400 hover:text-primary_blue cursor-pointer"
            >
              사진 업로드
            </label>
            <input
              id="profileImage"
              type="file"
              className="hidden"
              onChange={handleProfileImageChange}
            />
            <button
              onClick={handleDeleteImg}
              className="flex items-center h-6 px-3 py-[0.38rem] rounded-[0.25rem] bg-secondary_bg text-xs text-gray_400 hover:text-primary_blue"
            >
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
          <div className="">
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
          <div className="w-[30rem] border-b-[0.0625rem] border-gray_100"></div>
          <MajorComponent
            profileData={profileData}
            updatedMajor={updatedMajor}
          />
          <div className="w-[30rem] border-b-[0.0625rem] border-gray_100"></div>
          <AlarmSettingComponent />
        </div>
      </div>
    </>
  );
};
export default EditProfileComponent;
