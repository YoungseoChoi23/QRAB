const StoredNote = ({ noteName, noteContent, noteIcon, category }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-t-[16px] border-l-[1px] border-r-[1px] border-t-[1px] border-gray_100 w-[300px] h-[100px] bg-gray_500 relative">
        <div className="mt-[10px] absolute right-[-10px] ">
          <img src={noteIcon} />
        </div>
        <div className="leading-6 ml-[20px] mt-[16px] w-[196px] h-[72px] text-wrap  font-semibold text-neutralwhite text-[20px]">
          {noteName}
        </div>
      </div>
      <div className="rounded-b-[16px] w-[300px] h-[100px] border-l-[1px] border-r-[1px] border-b-[1px] border-gray_100 bg-[#F4F6FA]">
        <div className="ml-[20px] mt-[12px] w-[262px] h-[35px] leading-4 text-wrap font-medium text-gray_400 text-[14px]">
          {noteName}
        </div>
      </div>
    </div>
  );
};
export default StoredNote;
