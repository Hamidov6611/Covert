import { useState } from "react";
import { Link } from "react-router-dom";

const UserSidebar = () => {
    const [menu, setMenu] = useState({menu1: true, menu2: false})
  return (
    <aside className="hidden md:flex h-full fixed flex-col w-[277.5px]  py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-col justify-between flex-1 mt-6 ">
        <nav>
          <Link to="/user-home"
            className={`${menu.menu1 ? 'bg-white border-l-[5px] py-[15px] border-l-[#1348F9] text-[#2F2E40CC]' : "text-white ml-[5px]"} mb-4 flex items-center px-4 py-2`}
           onClick={() => setMenu({...menu, menu1: true, menu2: false})}
          >
            <div className="w-6 h-5 cursor-pointer">
              <img src="/tab.svg" alt="side1" width={100} height={100} />
            </div>
            <span className="ml-3 font-medium">Мои отправления</span>
          </Link>
          <Link to="/user-home"
            className={`${menu.menu2 ? 'bg-white border-l-[5px] py-[15px] border-l-[#1348F9] text-[#2F2E40CC]' : "text-white ml-[5px]"} flex items-center px-4 py-2`}
           onClick={() => setMenu({...menu, menu2: true, menu1: false})}
          >
            <div className="w-6 h-5 cursor-pointer">
              <img src="/side5.svg" alt="side1" width={100} height={100} />
            </div>
            <span className="ml-3 font-medium">Сообщения</span>
          </Link>
          
        </nav>
      </div>
    </aside>
  );
};

export default UserSidebar;
