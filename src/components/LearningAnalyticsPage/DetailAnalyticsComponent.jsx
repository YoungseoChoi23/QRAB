const DetailAnalyticsComponent = () => {
  return (
    <>
      <div
        className={`flex justify-center w-full ${
          isBrightMode ? "" : "rounded-t-[2.5rem]"
        } h-screen bg-secondary_bg`}
      >
        <div
          className={`${
            isBrightMode ? "mt-[30px]" : "mt-[72px]"
          } w-[940px] flex flex-col gap-6`}
        ></div>
      </div>
    </>
  );
};
export default DetailAnalyticsComponent;
