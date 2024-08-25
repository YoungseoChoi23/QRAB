import { useEffect, useRef, useState } from "react";
import Button from "../Common/Button";
import Input from "../Common/Input";

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
}) => {
  const inputRef = useRef(null);
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className="flex justify-center items-center gap-[16px] overflow-y-auto">
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
      />
      {showButton && <Button buttonActive={buttonActive} />}
    </div>
  );
};
export default SignUpInputField;
