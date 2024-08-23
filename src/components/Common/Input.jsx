import { forwardRef, useEffect, useState } from "react";

const Input = forwardRef(
  (
    {
      width = "240px",
      placeholder,
      setButtonActive,
      changeInputValue,
      value,
      fieldName,
    },
    ref
  ) => {
    const nicknameRegex = /^[가-힣a-zㄱ-ㅎA-Z0-9]{2,10}$/;

    useEffect(() => {
      if (value && fieldName === "닉네임") {
        if (nicknameRegex.test(value)) {
          setButtonActive(true);
        } else {
          setButtonActive(false);
        }
      }
    }, [value]);
    return (
      <input
        ref={ref}
        className="text-[13px] font-regular border-[1px] border-gray_100 p-[10px] w-[240px] h-[40px] rounded-[7px] p-[12px] box-border focus:border-primary_blue focus:border-[2px] focus:outline-none"
        style={{ width }}
        placeholder={placeholder}
        value={value}
        onChange={changeInputValue}
      />
    );
  }
);
export default Input;
