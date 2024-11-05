const Commentary = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-[48.75rem] h-auto p-4 rounded-[0.5rem] bg-secondary_bg">
        <div className="text-base font-semibold text-neutralBlack">
          1번 해설
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="text-base font-medium text-gray_400">정답</div>
            <div className="text-base font-semibold text-primary_blue">
              3번. action 객체
            </div>
          </div>
          <div className="flex gap-2">
            <div className="text-base font-medium text-gray_400">풀이</div>
            <div className="w-[42rem] text-wrap text-base font-medium text-neutralBlack">
              useReducer Hook을 사용하면, 이는 [state, dispatch]의 형태로 배열을
              반환합니다. 여기서 0번째 인덱스는 현재 컴포넌트의 상태(state)를
              나타냅니다. 이 상태 값은 컴포넌트에서 사용되는 데이터의 현재
              상태를 의미하며, 상태 업데이트는 반환된 dispatch 함수를 통해
              이루어집니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Commentary;
