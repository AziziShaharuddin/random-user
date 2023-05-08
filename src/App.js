import Header from "components/Layout/Header";
import avatar from "assets/Avatar.png";
import KiraButton from "components/Button/KiraButton";
import { MdAdd } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

function App() {
  return (
    <div className="w-full min-w-[370px] min-h-screen bg-kira-background">
      <Header />
      <div className="relative bg-kira-primary ">
        <div className="m-auto max-w-[1200px] px-[30px] py-[20px]">
          <div
            style={{ backgroundImage: `url(${avatar})` }}
            className="absolute rounded-[4.5px] h-[150px] w-[150px] bg-cover bg-center bg-no-repeat"
          />
          <div className="ml-[180px] flex flex-row items-end mt-[20px] space-x-[30px]">
            <div>
              <h1 className="text-h1 text-left text-white">
                John Doe
              </h1>
              <p className="text-white">Last online: 2 days ago</p>
            </div>
            <div className="flex w-auto flex-row items-center space-x-[10px]">
              <KiraButton
                variant="contained"
                className="w-auto gap-x-[14px] bg-white text-kira-primary hover:bg-white/80"
              >
                <FaTelegramPlane size={20} />
                Send Message
              </KiraButton>
              <KiraButton
                variant="outlined"
                className="text-kira-white w-auto gap-x-[14px]"
              >
                <MdAdd size={20} />
                Add Friend
              </KiraButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
