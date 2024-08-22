import { NavLink } from "react-router-dom";
import { MenuList } from "../../constants/MenuList";
import qrabLogo from "../../assets/common/qrabLogo.svg";
import userImg from "../../assets/common/navbar/userImg.svg";
const NavBar = () => {
  const handleLogo = () => {};
  return (
    <div>
      <div className="flex mt-[24px] justify-center items-center">
        <img onClick={handleLogo} src={qrabLogo} alt="qrab_logo" />
        <div className="ml-[168px] mr-[168px] flex items-center justify-center gap-[42px] text-neutralwhite text-l font-medium">
          {MenuList.map((it) => (
            <NavLink to={it.to} key={it.id}>
              {it.name}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-[8px] items-center w-[66px] h-[22px] rounded-[24px] border-[1px] border-[#404040] pt-[6px] pr-[12px] pb-[6px] pl-[8px] box-content">
          <img className="w-[16px] h-[16px]" src={userImg} />
          <div className="text-l font-medium text-neutralwhite">로그인</div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
