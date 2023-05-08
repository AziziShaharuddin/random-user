import Header from "components/Layout/Header";
import avatar from "assets/Avatar.png";
import KiraButton from "components/Button/KiraButton";
import { MdAdd, MdSearch, MdRefresh } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import KiraTextField from "components/TextField/KiraTextField";
import { useState } from "react";
import NameListTable from "components/Table/NameListTable";
import KiraModal from "components/Modal/KiraModal";

const data = [
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Jennie",
      last: "Nichols"
    },
    location: {
      street: {
        number: 8929,
        name: "Valwood Pkwy",
      },
      city: "Billings",
      state: "Michigan",
      country: "United States",
      postcode: "63104",
      coordinates: {
        latitude: "-69.8246",
        longitude: "134.8719"
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin"
      }
    },
    email: "jennie.nichols@example.com",
    login: {
      uuid: "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
      username: "yellowpeacock117",
      password: "addison",
      salt: "sld1yGtd",
      md5: "ab54ac4c0be9480ae8fa5e9e2a5196a3",
      sha1: "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
      sha256: "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
    },
    dob: {
      date: "1992-03-08T15:13:16.688Z",
      age: 30
    },
    registered: {
      date: "2007-07-09T05:51:59.390Z",
      age: 14
    },
    phone: "(272) 790-0888",
    cell: "(489) 330-2385",
    id: {
      name: "SSN",
      value: "405-88-3636"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
    nat: "US"
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Jennie",
      last: "Nichols"
    },
    location: {
      street: {
        number: 8929,
        name: "Valwood Pkwy",
      },
      city: "Billings",
      state: "Michigan",
      country: "United States",
      postcode: "63104",
      coordinates: {
        latitude: "-69.8246",
        longitude: "134.8719"
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin"
      }
    },
    email: "jennie.nichols@example.com",
    login: {
      uuid: "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
      username: "yellowpeacock117",
      password: "addison",
      salt: "sld1yGtd",
      md5: "ab54ac4c0be9480ae8fa5e9e2a5196a3",
      sha1: "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
      sha256: "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
    },
    dob: {
      date: "1992-03-08T15:13:16.688Z",
      age: 30
    },
    registered: {
      date: "2007-07-09T05:51:59.390Z",
      age: 14
    },
    phone: "(272) 790-0888",
    cell: "(489) 330-2385",
    id: {
      name: "SSN",
      value: "405-88-3636"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
    nat: "US"
  },
]

function App() {
  const [searchValue, setSearchValue] = useState("");
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
  console.log('selectedUser', selectedUser);
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
      >hello</KiraModal>
    </div>
  );
}

export default App;
