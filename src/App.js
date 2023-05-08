import Header from "components/Layout/Header";
import avatar from "assets/Avatar.png";
import KiraButton from "components/Button/KiraButton";
import { MdAdd, MdSearch, MdRefresh, MdClose } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import KiraTextField from "components/TextField/KiraTextField";
import { useCallback, useEffect, useState } from "react";
import NameListTable from "components/Table/NameListTable";
import KiraModal from "components/Modal/KiraModal";
import { fetchUsers } from 'services'

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleTextField = (e) => {
    setSearchValue(e.target.value);
  };
  // modal details
  const [selectedUser, setSelectedUser] = useState({});

  // modal state
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUser({});
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleViewItem = (user) => {
    handleOpenModal();
    setSelectedUser(user);
  };
  const fetchApi = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetchUsers();
      setData(res.results);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    const abortController = new AbortController();
    // cleanup on unmount. The API will be called only once onmount
    return () => {
      fetchApi();
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        <NameListTable data={data} handleViewItem={handleViewItem} />
        <div className="flex justify-center">
          <KiraButton
            onClick={fetchApi}
            variant="contained"
            className="gap-x-[14px] text-kira-white"
          >
            <MdRefresh size={20} />
            Refresh
          </KiraButton>
        </div>
      </div>
      <KiraModal
        open={openModal}
        onClose={handleCloseModal}
        className={"py-[20px] px-[30px]"}
      ><div className="space-y-[30px]">
          <div className="flex items-center justify-between">
            <h1 className="text-h1">
              {selectedUser?.name?.first} {selectedUser?.name?.last}
            </h1>
            <MdClose
              onClick={handleCloseModal}
              size={25}
              className="text-kira-grayText cursor-pointer"
            />
          </div>
          <div className="space-y-[10px]">
            {[
              {
                title: "Date",
                value: selectedUser?.dob?.date
                  ? new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(selectedUser?.dob?.date))
                  : "-",
              },
              {
                title: "status",
                value: selectedUser?.status || "-",
              },
              {
                title: "Gender",
                value:
                  selectedUser?.gender?.charAt(0).toUpperCase() +
                  selectedUser?.gender?.slice(1) || "-",
              },
              {
                title: "Country",
                value: selectedUser?.location?.country || "-",
              },
              {
                title: "Email",
                value: selectedUser?.email || "-",
              },
            ]?.map((item, index) => (
              <div key={index} className="flex items-center">
                <p className="text-kira-grayText w-[100px]">{item?.title}</p>
                <p className="flex-1">{item?.value}</p>
              </div>
            ))}
          </div>
        </div></KiraModal>
    </div>
  );
}

export default App;
