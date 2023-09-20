import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SideContext } from "../../context/sidemenu";
import { UserContext } from "../../context/userContext";

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {user} = useContext(UserContext)
  const {setSide}= useContext(SideContext)
  return (
    <div className="sticky top-0 z-50">
      <nav className="relative bg-[#1348F9] shadow h-[80px] md:h-[133px]">
      <div className="w-full px-6 h-full md:px-0 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex w-[15%] items-center justify-center">
          <Link to={"/"}>
            <img
              className="md:w-[118px] md:h-[80px] w-12 h-12"
              src={"/logo1.svg"}
            />
          </Link>
          <div className="flex lg:hidden w-[85%] justify-end">
            <button
              x-cloak
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          x-cloak
          className={` ${
            isOpen
              ? "translate-x-0 opacity-100 "
              : "opacity-0 -translate-x-full"
          } absolute top-[80px] inset-x-0 z-20  md:w-[85%] px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:justify-around md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              to={"/"}
              className="my-2  transform text-white hover:text-[#1348F9] dark:hover:text-blue-400 md:mx-4 md:my-0 text-lg font-medium border hover:font-medium p-3 rounded-lg hover:bg-white hover:border-[#1348F9] transition-all duration-50  "
            >
              Забронировать сейчас
            </Link>
            <Link to={'/'} className="my-2  transform text-white hover:text-[#1348F9] dark:hover:text-blue-400 md:mx-4 md:my-0 text-lg font-medium border hover:font-medium p-3 rounded-lg hover:bg-white hover:border-[#1348F9] transition-all duration-50 ">
              Мои отправления
            </Link>
            <Link to={'/'} className="my-2  transform text-white hover:text-[#1348F9] dark:hover:text-blue-400 md:mx-4 md:my-0 text-lg font-medium border hover:font-medium p-3 rounded-lg hover:bg-white hover:border-[#1348F9] transition-all duration-50 ">
              Калькулятор
            </Link>

            <Link to={'/'} className="my-2 md:hidden transform text-white hover:text-[#1348F9] dark:hover:text-blue-400 md:mx-4 md:my-0 text-lg font-medium border hover:font-medium p-3 rounded-lg hover:bg-white hover:border-[#1348F9] transition-all duration-50 ">
            Мои отправления
            </Link>

            <Link to={'/'} className="my-2 md:hidden transform text-white hover:text-[#1348F9] dark:hover:text-blue-400 md:mx-4 md:my-0 text-lg font-medium border hover:font-medium p-3 rounded-lg hover:bg-white hover:border-[#1348F9] transition-all duration-50 ">
            Сообщения
            </Link>
          </div>
          <button
          onClick={() => setSide((prev: boolean) => !prev)}
          className="flex justify-center flex-row items-center">
            <div className="h-16 w-16 bg-white rou rounded-full flex justify-center items-center">
              <p className="m-0 p-0 font-semibold text-[#1348F9]  text-lg tracking-[0.23px]">
              {user?.username[0]}
              </p>
            </div>

            <div className="flex ml-4 ">

            <p className="text-white font-bold text-lg mr-2">{user?.username}</p>
            <img
              src={"/Vector.svg"}
              alt="ru"
              width={15}
              height={5}
              className="cursor-pointer"
            />
            </div>
          </button>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default UserNavbar;
