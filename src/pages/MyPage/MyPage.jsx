import NavBar from "../../components/Common/NavBar";
import AddFriendButtton from "../../components/MyPage/Button/AddFriendButtton";
import FriendsList from "../../components/MyPage/FriendsList";
import UserInfoBox from "../../components/MyPage/UserInfoBox";

const MyPage = () => {
  return (
    <>
      <div className={`w-full h-screen bg-neutralwhite `}>
        <NavBar />
        <div className=" flex flex-col items-center">
          <div
            className={`flex justify-center w-full h-screen bg-white overflow-y-hidden`}
          >
            <div className="flex flex-col gap-6 w-[53.75rem] pt-8">
              <div className="text-2xl font-bold text-neutralBlack">
                마이페이지
              </div>
              <div className="flex gap-[6.25rem]">
                <UserInfoBox />
                <FriendsList />
              </div>
              <div className="flex justify-end mt-[1rem]">
                <AddFriendButtton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPage;
