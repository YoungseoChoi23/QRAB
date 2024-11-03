import { useEffect, useState } from "react";
import DoubleCheckButton from "../AuthPage/DoubleCheckButton";
import Input from "../Common/Input";

const EditInputField = ({
  fieldName,
  showButton,
  width,
  placeholder,
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
  readonly = false,
}) => {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="w-[4.8125rem] text-sm font-medium text-neutralBlack">
          {fieldName}
        </div>
        <Input
          setButtonActive={setButtonActive}
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
          readonly={readonly}
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
export default EditInputField;
