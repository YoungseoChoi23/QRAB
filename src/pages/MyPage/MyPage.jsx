import { useEffect, useState } from "react";
import NavBar from "../../components/Common/NavBar";
import AddFriendButtton from "../../components/MyPage/Button/AddFriendButtton";
import FriendsList from "../../components/MyPage/FriendsList";
import UserInfoBox from "../../components/MyPage/UserInfoBox";
import FriendNoteModal from "../../components/MyPage/Modal/FriendNoteModal";
import useShowFriendNoteModal from "../../store/showFriendNoteModal";
import useDeleteFriendModal from "../../store/deleteFriendModal";
import FriendDeleteModal from "../../components/MyPage/Modal/FriendDeleteModal";
import useAddFriendModalStore from "../../store/addFriendModal";
import FriendAddModal from "../../components/MyPage/Modal/FriendAddModal";
import useEditProfileStore from "../../store/editProfile";
import EditProfileComponent from "../../components/MyPage/EditProfileComponent";
import { getProfile } from "../../services/api/user";
import { useQuery } from "@tanstack/react-query";
import useEditMajorModal from "../../store/editMajorModal";
import EditMajorModal from "../../components/MyPage/Modal/EditMajorModal";

const MyPage = () => {
  const { showFriendNoteModal } = useShowFriendNoteModal();
  const { deleteFriendModal } = useDeleteFriendModal();
  const { addFriendModal } = useAddFriendModalStore();
  const { editProfile } = useEditProfileStore();
  const { editMajorModal } = useEditMajorModal();
  const [updatedMajor, setUpdatedMajor] = useState([]);
  const {
    data: profileData,
    isError,
    error,
  } = useQuery({
    queryKey: ["profileData"],
    queryFn: () => getProfile(),
  });

  useEffect(() => {
    setUpdatedMajor(profileData.majorIds);
  }, []);

  return (
    <>
      <div className={`w-full h-screen bg-neutralwhite`}>
        <NavBar />
        <div className=" flex flex-col items-center">
          <div
            className={`flex justify-center w-full h-auto pb-[5rem] bg-white`}
          >
            <div className="flex flex-col gap-6 w-[53.75rem] pt-8">
              <div className="text-2xl font-bold text-neutralBlack">
                마이페이지
              </div>
              <div className="flex gap-[6.25rem]">
                <UserInfoBox
                  profileData={profileData}
                  updatedMajor={updatedMajor}
                />
                {editProfile ? (
                  <EditProfileComponent
                    profileData={profileData}
                    updatedMajor={updatedMajor}
                  />
                ) : (
                  <FriendsList friendships={profileData.friendships} />
                )}
              </div>
              <div className="flex justify-end mt-[1rem]">
                <AddFriendButtton />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showFriendNoteModal && <FriendNoteModal />}
      {deleteFriendModal && <FriendDeleteModal />}
      {addFriendModal && <FriendAddModal />}
      {editMajorModal && <EditMajorModal setUpdatedMajor={setUpdatedMajor} />}
    </>
  );
};
export default MyPage;
