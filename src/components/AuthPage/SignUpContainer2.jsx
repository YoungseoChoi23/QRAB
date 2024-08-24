import stagetwo from "../../assets/authpage/stage_two_active.svg";

const SignUpContainer2 = () => {
  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="relative m-auto w-[620px] h-[173px] rounded-[16px] border-[1px] border-[#D9DBE1] ">
        <div className="flex justify-center mt-[32px] mb-[32px]">
          <img src={stagetwo} />
        </div>
      </div>
      <div className="w-screen h-[1989px] bg-secondary_bg"></div>
    </div>
  );
};
export default SignUpContainer2;
