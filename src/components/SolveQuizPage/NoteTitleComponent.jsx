const NoteTitleComponent = ({ noteTitle }) => {
  return (
    <>
      <div className="flex items-center w-[48.75rem] h-16 p-4 rounded-[0.5rem] bg-secondary_bg text-base text-medium text-gray_400">
        {noteTitle}
      </div>
    </>
  );
};
export default NoteTitleComponent;
