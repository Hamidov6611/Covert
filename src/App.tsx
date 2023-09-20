import { Link, Route, Routes } from "react-router-dom";
import {
  Blog,
  BlogDetail,
  Calculator,
  Main,
  Reviews,
  Service,
} from "./app/delivery";
import {
  AddClient,
  AddConsignessComp,
  AddDispatch,
  AddShippers,
  AdminLogin,
  AdminPage,
  Chat,
  Clients,
  Conignees,
  Dispatch,
  Message,
  Rates,
  Shippers,
  Wallet,
  Way,
} from "./app/dashboard";
import ChioggiaMap from "./Map";
import {  UserContext } from "./context/userContext";
import { useEffect, useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import {
  Gruze,
  Profile,
  UserChat,
  UserHomePage,
  UserMessage,
} from "./app/user";
import { SideContext } from "./context/sidemenu";

function App() {
  const [user, setUser] = useState();
  const [side, setSide] = useState(false);
  const [isUser, setIsUser] = useState(false)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsUser(true)
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, isUser, setIsUser }}>
      <SideContext.Provider value={{ side, setSide }}>
        <div className="relative w-full h-full">
          {side && (
            <div className="bg-white min-w-[250px] shadow-xl border rounded-md py-3 px-8 fixed right-[5.2%] top-[100px] md:top-[140px] z-50 md:z-30">
            <p className="text-[15px] md:text-[19px] text-[#1348F9] font-medium md:font-semibold lg:font-bold">
              {user?.first_name} {user?.last_name}
            </p>
            <p className="text-[14px] font-normal md:text-[16px] lg:tetx-[18px] mt-2 text-[#2F2E40]">
              {user?.email}
            </p>
            <p className="mt-2 text-[13px] sm:text-[14px] md:text-[16px] font-light md:font-normal text-[#2F2E40]">
              ID: 2965456
            </p>
            <div className="mt-2 flex items-center">
              <div className="w-6 h-6 mr-[15%]">
                <img src="/dark.svg" alt="one" className="w-full h-full" />
              </div>
              <p className="text-[14px] sm:text-[17px] text-[#2F2E40CC] ">
                Мои объявления
              </p>
            </div>
            <div className="mt-2 flex items-center">
              <div className="w-6 h-6 mr-[15%]">
                <img src="/dal.svg" alt="one" className="w-full h-full" />
              </div>
              <p className="text-[14px] sm:text-[17px] text-[#2F2E40CC] ">
                Профиль <br />
                пользователя
              </p>
            </div>
            <div className="mt-2 flex items-center">
              <div className="w-6 h-6 mr-[15%]">
                <img src="/ark.svg" alt="one" className="w-full h-full" />
              </div>
              <Link
                to={"/user-profile"}
                className="text-[14px] sm:text-[17px] text-[#2F2E40CC] "
              >
                Данные учетной <br /> записи
              </Link>
            </div>

            <div className="flex items-center w-full justify-center mt-4">
              <button className="mr-2">
                <PowerSettingsNewIcon sx={{ color: "#1348F9" }} />
              </button>
              <p className="text-[15px] sm:text-[16px] md:text-[18px] tetx-[#1348F9] font-medium md:font-semibold text-[#1348F9]">
                Выход
              </p>
            </div>
          </div>
          )}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/services" element={<Service />} />
            <Route path="/map" element={<ChioggiaMap />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/addclient" element={<AddClient />} />
            <Route path="/client" element={<Clients />} />
            <Route path="/addshippers" element={<AddShippers />} />
            <Route path="/shippers" element={<Shippers />} />
            <Route path="/addconsignees" element={<AddConsignessComp />} />
            <Route path="/consignees" element={<Conignees />} />
            <Route path="/adddispatch" element={<AddDispatch />} />
            <Route path="/dispatch" element={<Dispatch />} />
            <Route path="/message" element={<Message />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/way" element={<Way />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/user-home" element={<UserHomePage />} />
            <Route path="/user-about" element={<Gruze />} />
            <Route path="/user-profile" element={<Profile />} />
            <Route path="/user-message" element={<UserMessage />} />
            <Route path="/user-chat" element={<UserChat />} />
          </Routes>
        </div>
      </SideContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
