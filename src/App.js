import Header from "components/Layout/Header";
import avatar from "assets/Avatar.png";
import KiraButton from "components/Button/KiraButton";
import { MdAdd, MdSearch } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import KiraTextField from "components/TextField/KiraTextField";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const handleTextField = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="w-full min-w-[370px] min-h-screen bg-kira-background">
      <Header />
      <div className="relative bg-kira-primary ">
        <div className="m-auto max-w-[1200px] flex flex-col md:block px-[30px] py-[20px]">
          <div
            style={{ backgroundImage: `url(${avatar})` }}
            className="self-center md:absolute rounded-[4.5px] h-[150px] w-[150px] bg-cover bg-center bg-no-repeat"
          />
          <div className="md:ml-[180px] flex flex-col md:flex-row items-center md:items-end mt-[20px] space-y-[20px] md:space-y-0 md:space-x-[30px]">
            <div>
              <h1 className="text-h1 text-center md:text-left text-white">
                John Doe
              </h1>
              <p className="text-white">Last online: 2 days ago</p>
            </div>
            <div className="flex flex-col w-full md:w-auto md:flex-row items-center space-y-[10px] md:space-y-0 md:space-x-[10px]">
              <KiraButton
                variant="contained"
                className="w-full md:w-auto gap-x-[14px] bg-white text-kira-primary hover:bg-white/80"
              >
                <FaTelegramPlane size={20} />
                Send Message
              </KiraButton>
              <KiraButton
                variant="outlined"
                className="w-full text-kira-white md:w-auto gap-x-[14px]"
              >
                <MdAdd size={20} />
                Add Friend
              </KiraButton>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-[1200px] p-[30px] flex flex-col md:mt-[40px] space-y-4">
        <div className="flex flex-col items-start space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center w-full">
          <KiraTextField
            value={searchValue}
            onChange={handleTextField}
            placeholder="Search for name"
            startAdornment={
              <MdSearch size={20} className="text-kira-grayText" />
            }
            className={`w-full md:w-auto`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
