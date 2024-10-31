import { NavLink, useNavigate } from "react-router-dom";
import { MenuList } from "../../constants/MenuList";
import qrabLogo from "../../assets/common/qrabLogo.svg";
import userImg from "../../assets/common/navbar/userImg.svg";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import bright_userImg from "../../assets/common/navbar/bright_userImg.svg";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/api/user";
import { useEffect, useState } from "react";
const NavBar = () => {
  const { isBrightMode } = useIsBrightModeStore();
  const handleLogo = () => {};
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setNickname("qrab");
      // const res = getProfile();
      // console.log(res);
      // setNickname(res.nickname);
    }
  }, []);

  // const { isError, data, error } = useQuery({
  //   queryKey: ["getProfile"],
  //   queryFn: getProfile,
  // });

  // if (!data) {
  //   return <div>데이터가 없습니다.</div>;
  // }

  // if (isError) {
  //   console.error("Error fetching user info:", error);
  //   return <div>오류 발생: {error.message}</div>;
  // }

  return (
    <div>
      <div
        className={`flex justify-center h-[77px] ${
          isBrightMode ? "border-b-[1px] " : "mb-[169px]"
        } `}
      >
        <div
          className={`w-full h-[76px] flex justify-center items-center  ${
            isBrightMode ? "bg-neutralwhite" : "bg-[#262626] fixed"
          } `}
        >
          <img onClick={handleLogo} src={qrabLogo} alt="qrab_logo" />
          <div
            className={`text-l font-medium ml-[168px] mr-[168px] flex items-center justify-center gap-[42px] ${
              isBrightMode ? "text-neutralblack" : "text-neutralwhite"
            } `}
          >
            {MenuList.map((it) => (
              <NavLink
                className={`${
                  isBrightMode
                    ? "hover:text-primary_blue hover:font-semibold"
                    : ""
                }`}
                to={it.to}
                key={it.id}
              >
                {it.name}
              </NavLink>
            ))}
          </div>
          <div
            onClick={() => navigate("/login")}
            className={`cursor-pointer flex gap-[8px] items-center w-[66px] h-[22px] rounded-[24px] ${
              isBrightMode
                ? "bg-secondary_skyblue"
                : "border-[1px] border-[#404040]"
            } pt-[6px] pr-[12px] pb-[6px] pl-[8px] box-content`}
          >
            <img
              className="w-[16px] h-[16px]"
              src={`${!isBrightMode ? userImg : bright_userImg}`}
            />
            <div
              className={`text-l font-medium ${
                isBrightMode ? "text-primary_blue" : "text-neutralwhite"
              }`}
            >
              {nickname ? nickname : "로그인"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
