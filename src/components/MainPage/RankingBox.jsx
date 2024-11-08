const RankingBox = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-[16.5rem] h-[18.375rem] px-6 border-[1px] border-white rounded-[1rem] bg-[rgba(255,255,255,0.10)]">
        <div className="mb-2 text-xl font-semibold text-white">랭킹</div>
        <div className="mb-4 text-base font-semibold text-gray_300">
          이번 달 가장 많은 퀴즈를 푼 친구
        </div>
        <div className="flex flex-col gap-[0.4rem] h-[9.875rem]">
          <div className="flex gap-4 ">
            <div className="text-xl font-semibold text-gray_300">1</div>
            <div className="text-base font-medium text-white">leko</div>
          </div>

          <div className="flex gap-4 ">
            <div className="text-xl font-semibold text-gray_300">2</div>
            <div className="text-base font-medium text-white">ys</div>
          </div>
          <div className="flex gap-4 ">
            <div className="text-xl font-semibold text-gray_300">3</div>
            <div className="text-base font-medium text-white">영서</div>
          </div>
          <div className="flex gap-4 ">
            <div className="text-xl font-semibold text-gray_300">4</div>
            <div className="text-base font-medium text-white">lek12o</div>
          </div>
          <div className="flex gap-4 ">
            <div className="text-xl font-semibold text-gray_300">5</div>
            <div className="text-base font-medium text-white">hello</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RankingBox;
