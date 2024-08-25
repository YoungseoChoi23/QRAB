import { forwardRef, useEffect, useRef } from "react";

const MajorInput = ({ value, text, autoFocus = false }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className="flex flex-col items-center gap-[8px]">
      <div className="text-[14px] font-medium">{text}</div>
      <input
        value={value}
        ref={inputRef}
        className="text-neutralblack text-[13px] w-[180px] h-[40px] border-[1px] border-gray_100 rounded-[4px] p-[12px] focus:border-primary_blue focus:border-[2px] focus:outline-none"
        placeholder="목록에서 선택하기"
        readOnly
      />
    </div>
  );
};
export default MajorInput;
