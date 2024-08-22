import { useEffect } from "react";
import Button from "../Common/Button";
import Input from "../Common/Input";

const SignUpInputField = ({ fieldName, buttonActive, width = "240px" }) => {
  return (
    <div className="flex justify-center items-center gap-[16px]">
      <div className="w-[77px] text-[14px] font-medium">{fieldName}</div>
      <Input width={width} />
      {buttonActive && <Button />}
    </div>
  );
};
export default SignUpInputField;
