import kiratechLogo from "assets/Logo.png";
import {
  MdOutlineNotificationsNone,
  MdSettings,
  MdLogin,
} from "react-icons/md";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 border-kira-grayText bg-kira-white py-5 drop-shadow-lg">
      <div className="relative m-auto flex max-w-[1200px] px-[30px] flex-row items-center justify-between">
        <img alt="Kiratech logo" src={kiratechLogo} className="h-[50px]" />
        <div className="cursor-pointer flex items-center justify-end space-x-7">
          <MdOutlineNotificationsNone size={25} />
          <MdSettings size={25} />
          <MdLogin size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
