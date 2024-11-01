import { useEffect, useRef, useState } from "react";
import Button from "../Common/Button";
import Input from "../Common/Input";
import DoubleCheckButton from "./DoubleCheckButton";
import { GetDoubleCheckNickname } from "../../services/api/user";
import SnackBar from "../Common/SnackBar";
import useSnackbarStore from "../../store/useSnackbarStore";

const SignUpInputField = ({
  fieldName,
  showButton,
  width = "240px",
  placeholder,
  autoFocus = false,
  changeInputValue,
  value,
  type,
  password,
  onValidateChange,
  handleDoubleCheck,
  doubleCheckMsg,
  doubleCheckTF,
  setDoubleCheckMsg,
  inputType,
}) => {
  const inputRef = useRef(null);
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <>
      <div className="flex items-center gap-[16px]">
        <div className="w-[77px] text-[14px] font-medium">{fieldName}</div>
        <Input
          setButtonActive={setButtonActive}
          ref={inputRef}
          width={width}
          placeholder={placeholder}
          changeInputValue={changeInputValue}
          value={value}
          fieldName={fieldName}
          type={type}
          password={password}
          onValidateChange={onValidateChange}
          doubleCheckMsg={doubleCheckMsg}
          doubleCheckTF={doubleCheckTF}
          setDoubleCheckMsg={setDoubleCheckMsg}
          inputType={inputType}
        />
        {showButton && (
          <DoubleCheckButton
            buttonText="중복 확인"
            buttonActive={buttonActive}
            handleDoubleCheck={handleDoubleCheck}
          />
        )}
      </div>
    </>
  );
};
export default SignUpInputField;
