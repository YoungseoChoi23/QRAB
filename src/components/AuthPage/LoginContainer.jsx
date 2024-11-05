import { useEffect, useState } from "react";
import SignUpInputField from "./SignUpInputField";
import FindButton from "./FindButton";
import Button from "../Common/Button";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/api/auth";
import useSnackbarStore from "../../store/useSnackbarStore";
import useAuthStore from "../../store/authStore";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const { setIsSnackbar } = useSnackbarStore();
  const { setAuthenticated } = useAuthStore();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email && password) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [email, password]);

  const handleButton = async () => {
    const userData = {
      username: email,
      password: password,
    };

    const res = await postLogin(userData);
    if (res) {
      console.log("로그인 성공", res);
      setAuthenticated(true);
      navigate("/storenote");
    } else {
      console.log("로그인 실패", res);
      setIsSnackbar(true);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative mt-[41px] w-[620px] h-[172px] rounded-[16px] border-[1px] border-[#D9DBE1]">
        <div className="flex gap-[12px] justify-center mt-[40px]">
          <div className="flex flex-col items-center justify-center gap-[12px]">
            <SignUpInputField
              fieldName="이메일"
              width="274px"
              showButton={false}
              changeInputValue={changeEmail}
              value={email}
              inputType="login"
            />
            <SignUpInputField
              fieldName="비밀번호"
              width="274px"
              showButton={false}
              placeholder="영문대소문자/숫자/8~16자"
              changeInputValue={changePassword}
              value={password}
              type="password"
              inputType="login"
            />
          </div>
          <Button
            handleButton={handleButton}
            buttonActive={buttonActive}
            width="80px"
            height="92px"
            buttonText="로그인"
          />
        </div>
      </div>
      <div className="flex gap-[16px] mt-[56px] justify-center items-center">
        <div className="w-[283px] h-[0px] border-[1px] border-gray_100"></div>
        <span className="w-[21px] text-gray_100 text-[12px]">또는</span>
        <div className="w-[283px] h-[0px] border-[1px] border-gray_100"></div>
      </div>
      <div className="flex gap-[22px] mt-[39px]">
        <FindButton text="아이디 찾기" />
        <FindButton text="비밀번호 찾기" />
        <FindButton
          handleButton={() => {
            navigate("/signup");
          }}
          text="회원가입"
        />
      </div>
    </div>
  );
};
export default LoginContainer;
