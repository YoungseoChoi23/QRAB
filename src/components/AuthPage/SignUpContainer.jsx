import Button from "../Common/Button";
import Input from "../Common/Input";
import stageone from "../../assets/authpage/stage_one_active.svg";
import SignUpInputField from "./SignUpInputField";
const SignUpContainer = () => {
  return (
    <div className="m-auto w-2/5 h-5/6 rounded-[16px] border-[1px] border-[#D9DBE1] ">
      <div className="flex justify-center mt-[32px] mb-[32px]">
        <img src={stageone} />
      </div>
      <div className="flex flex-col gap-[20px]">
        <SignUpInputField fieldName="닉네임" buttonActive={true} />
        <SignUpInputField fieldName="이메일" buttonActive={true} />
        <SignUpInputField
          fieldName="비밀번호"
          width="336px"
          buttonActive={false}
        />
        <SignUpInputField
          fieldName="비밀번호 확인"
          width="336px"
          buttonActive={false}
        />
        <SignUpInputField
          fieldName="전화번호"
          width="336px"
          buttonActive={false}
        />
      </div>
    </div>
  );
};
export default SignUpContainer;
