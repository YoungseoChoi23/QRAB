import useEditMajorModal from "../../store/editMajorModal";
import DefaultButton from "./Button/DefaultButton";

const MajorComponent = ({ profileData, updatedMajor }) => {
  const majorStyle = "w-[3.5rem] text-xs font-medium text-gray_400";
  const { setEditMajorModal } = useEditMajorModal();
  console.log(updatedMajor);
  return (
    <>
      <div className="relative flex gap-[4.25rem] w-[28.5rem]">
        <div className="text-sm font-medium text-neutralBlack">전공</div>
        <div className="flex flex-col gap-[1.2rem]">
          <div className="flex gap-[3.5rem]">
            <div className={majorStyle}>주전공</div>
            <div className="text-sm font-medium text-neutralBlack">
              {updatedMajor[0]}
            </div>
          </div>
          <div className="flex gap-[3.5rem]">
            <div className={majorStyle}>부·복수전공</div>
            <div className="text-sm font-medium text-neutralBlack">
              {updatedMajor[1] ? updatedMajor[1] : "부·복수전공 없음"}
            </div>
          </div>
          <div className="flex gap-[3.5rem]">
            <div className={majorStyle}>부·복수전공</div>
            <div className="text-sm font-medium text-neutralBlack">
              {updatedMajor[2] ? updatedMajor[2] : "부·복수전공 없음"}
            </div>
          </div>
        </div>
        <div className="absolute right-0">
          <DefaultButton onClick={() => setEditMajorModal(true)} text="편집" />
        </div>
      </div>
    </>
  );
};
export default MajorComponent;
