import { NavLink } from "react-router-dom";
import { MenuList } from "../../constants/MenuList";
import qrabLogo from "../../assets/common/qrabLogo.svg";
import userImg from "../../assets/common/navbar/userImg.svg";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import bright_userImg from "../../assets/common/navbar/bright_userImg.svg";
import { useState } from "react";
import { authSubMenuList } from "../../constants/AuthNavbar";

const NavBar = () => {
  const [hoveredAuth, setHoveredAuth] = useState(false);

  const { isBrightMode } = useIsBrightModeStore();
  const handleLogo = () => {};
  return (
    <div>
      <div
        className={`flex pt-[24px] pb-[5px] mb-[145px] justify-center items-center ${
          isBrightMode ? "border-b-[1px]" : ""
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
          onMouseEnter={() => setHoveredAuth(true)}
          onMouseLeave={() => setHoveredAuth(false)}
          className="relative"
        >
          <div
            className={`flex gap-[8px] items-center w-[66px] h-[22px] rounded-[24px] ${
              isBrightMode
                ? "bg-secondary_skyblue"
                : "border-[1px] border-[#404040]"
            } py-[6px] pr-[12px] pl-[8px] box-content cursor-pointer`}
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
              로그인
            </div>
          </div>
          {/* 투명한 간격 추가 */}
          <div className="h-[8px] bg-transparent"></div>
          {/* 실제 메뉴 목록 */}
          {hoveredAuth && (
            <div className="absolute right-[-15px] flex flex-col w-[7.5rem] h-20 rounded-[8px] bg-white">
              <div className="flex flex-col h-full justify-center items-center font-medium ">
                <NavLink
                  className="hover:text-primary_blue hover:underline"
                  to="/login"
                >
                  로그인
                </NavLink>
                <div className="w-[56px] h-[1px] my-2 bg-gray_100"></div>
                <NavLink
                  className="hover:text-primary_blue hover:underline"
                  to="/signup"
                >
                  회원가입
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
