import { Link } from "react-router-dom";
import "./navbar.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { ReactNode, useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { ForgotPassword, Login, Register } from ".";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { BASE_URL } from "../../service/auth";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface userProps {
  username: string;
  password: string;
}

type langType = {
  id: number;
  name: string;
  logo: string;
  selected: boolean;
};

const Navbar = (): ReactNode => {
  const [lang, setLang] = useState<langType[]>([
    { id: 1, name: "Russian", logo: "/ru.svg", selected: true },
    { id: 2, name: "Netherlands", logo: "/gl.svg", selected: false },
    { id: 3, name: "France", logo: "/fr.svg", selected: false },
    { id: 4, name: "England", logo: "/en.svg", selected: false },
  ]);
  const [isMenu, setIsMenu] = useState(false);
  const handleClick = () => setIsMenu((prev) => !prev);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
  const [isLang, setIsLang] = useState(false);
  const [t, i18n] = useTranslation("global");
  const [isHead, setIsHead] = useState<boolean>(false);
  let [data, setData] = useState<userProps>();

  const changeLang = () => setIsLang((prev) => !prev);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleLang = (id: number) => {
    let newArr = [...lang];
    newArr.map((item) => {
      item.selected = false;
      if (item?.id === id) {
        item.selected = true;
      }
    });
    console.log(newArr);
    console.log(id);
    setLang(newArr);
  };

  const getData = async () => {
    const token = Cookies.get("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token ? JSON.parse(token) : ""}`,
      },
    };

    const { data } = await axios.get(
      `${BASE_URL}/a_api/admin_panel/user_profiles_views/`,
      config
    );
    // console.log(data)
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div
        className={`h-[90px] lg:h-[133px] w-full bg-[#1348F9] hidden lg:flex items-center `}
      >
        <div className="w-[100%] md:w-[90%] mx-auto lg:flex items-center hidden">
          <Link to={"/"} className="w-[18%]">
            <img
              src={"/logo1.svg"}
              alt="logo"
              width={118}
              height={108}
              className="object-cover"
            />
          </Link>
          <div className="w-[82%] flex justify-between">
            <div className="flex w-[45%] justify-between items-center">
              <div className="flex">
                <Link
                  to={"/services"}
                  className="mr-2 hover:text-gray-900 text-[20px] text-white font-medium"
                >
                  {t(`nav.nav1`)}
                </Link>
                <img
                  src={"/Vector.svg"}
                  className="mr-5"
                  alt="vector"
                  width={15}
                  height={5}
                />
              </div>
              <Link
                to={"/calculator"}
                className="mr-5 hover:text-gray-900 font-medium text-[20px] text-white"
              >
                {t(`nav.nav2`)}
              </Link>
              <Link
                to={"/reviews"}
                className="mr-5 hover:text-gray-900 font-medium text-[20px] text-white"
              >
                {t(`nav.nav3`)}
              </Link>
              <Link
                to={"/blog"}
                className="mr-5 hover:text-gray-900 font-medium text-[20px] text-white"
              >
                {t(`nav.nav4`)}
              </Link>
            </div>
            <div className="w-[55%] flex justify-end items-center">
              <button
                onClick={() => setIsLogin(true)}
                className="text-[18px] font-semibold text-white mr-5 hover:text-gray-900"
              >
                {t(`nav.auth1`)}
              </button>
              {data && data?.username?.length > 0 ? (
                <button className="font-bold mr-5 text-[17px] border text-white p-3 rounded-md  hover:border-transparent transition duration-200 ease-in-out hover:bg-white hover:text-[#1348F9]">
                  {data?.username}
                </button>
              ) : (
                <button
                  // to={"/"}
                  onClick={() => setIsRegister((prev) => !prev)}
                  className="font-bold mr-5 text-[17px] border text-white p-3 rounded-md  hover:border-transparent transition duration-200 ease-in-out hover:bg-white hover:text-[#1348F9]"
                >
                  {t(`nav.auth2`)}
                </button>
              )}
              <div className="flex">
                {lang?.map((item) => {
                  return (
                    item.selected && (
                      <img
                        onClick={() => setIsHead((prev) => !prev)}
                        src={item?.logo}
                        alt={item?.name}
                        width={29}
                        height={20}
                        className="cursor-pointer mr-3"
                      />
                    )
                  );
                })}
                <img
                  src={"/Vector.svg"}
                  alt="ru"
                  width={15}
                  height={5}
                  className="cursor-pointer"
                />

                {isHead && (
                  <div className="bg-Primary h-[160px] w-[200px] p-2 flex flex-col absolute right-0 z-[999999] top-[133px]">
                    {lang?.map((item) => {
                      return (
                        !item?.selected && (
                          <div
                            onClick={() => {
                              handleLang(item.id);
                              switch (item.name) {
                                case "Russian":
                                  handleChangeLanguage("ru");
                                  break;
                                case "Netherlands":
                                  handleChangeLanguage("gl");
                                  break;
                                case "France":
                                  handleChangeLanguage("fr");
                                  break;
                                case "England":
                                  handleChangeLanguage("en");
                                  break;
                                default:
                                  handleChangeLanguage("ru");
                              }
                            }}
                            className="flex mb-4 mt-2"
                          >
                            <img
                              src={item?.logo}
                              alt="ru"
                              width={29}
                              height={20}
                              className="cursor-pointer mr-3"
                            />
                            <p className="text-white cursor-pointer font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                              {item?.name}
                            </p>
                          </div>
                        )
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isRegister && (
        <Register setIsRegister={setIsRegister} setIsLogin={setIsLogin} />
      )}

      {isLogin && (
        <Login
          setIsLogin={setIsLogin}
          setIsRegister={setIsRegister}
          setIsForgotPassword={setIsForgotPassword}
        />
      )}

      {isForgotPassword && (
        <ForgotPassword
          setIsForgotPassword={setIsForgotPassword}
          setIsLogin={setIsLogin}
        />
      )}

      <div className="h-[80px] lg:hidden">
        <Box sx={{ flexGrow: 1 }}>
          <div
            style={{ position: "fixed", top: 0 }}
            className={`${
              isMenu ? "bg-[#050038]" : "bg-white"
            } w-[100%] shadow-xl py-2 px-3 sticky top-0 z-50`}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={"/"}>
                <div className="w-[38%]">
                  {isMenu ? (
                    <img
                      src={"/logo1.svg"}
                      alt="logo"
                      width={118}
                      height={108}
                      className="object-cover"
                    />
                  ) : (
                    <img
                      src={"/logo7.svg"}
                      alt="logo"
                      width={118}
                      height={108}
                      className="object-cover"
                    />
                  )}
                </div>
              </Link>

              <div>
                {!isMenu && (
                  <button
                    onClick={() => setIsRegister(true)}
                    className="bg-[#1348F9] mr-5 py-2 px-4 rounded-full text-white font-semibold"
                  >
                    {t(`nav.auth2`)}
                  </button>
                )}
                {isMenu ? (
                  <IconButton
                    onClick={handleClick}
                    size="large"
                    edge="start"
                    sx={{ color: "white" }}
                    aria-label="menu"
                  >
                    <ClearIcon fontSize="medium" />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={handleClick}
                    size="large"
                    edge="start"
                    sx={{ color: "black" }}
                    aria-label="menu"
                  >
                    <MenuIcon fontSize="medium" />
                  </IconButton>
                )}
              </div>
            </div>
          </div>
        </Box>
      </div>

      {isMenu && (
        <div className="w-[100%] h-[100vh] fixed flex flex-col justify-start items-start top-[60px] left-0 bg-[#050038] z-50 lg:hidden">
          <div className="w-[100%] mt-8 flex flex-col px-4">
            <div className="h-[2px] w-[100%] bg-heroGreey rounded-lg mb-2 mt-2"></div>
            <div className="flex justify-between ">
              <Link
                to={"/services"}
                className="mr-2 text-[20px] text-white font-semibold"
                onClick={() => setIsMenu(false)}
              >
                {t(`nav.nav1`)}
              </Link>
              <img
                src={"/Vector.svg"}
                className="mr-5"
                alt="vector"
                width={15}
                height={5}
              />
            </div>
            <div className="h-[2px] w-[100%] bg-heroGreey rounded-lg mb-2 mt-2"></div>

            <Link
              onClick={() => setIsMenu(false)}
              to={"/calculator"}
              className="mr-5  text-[20px] text-white  font-semibold"
            >
              {t(`nav.nav2`)}
            </Link>
            <div className="h-[2px] w-[100%] bg-heroGreey rounded-lg mb-2 mt-2"></div>

            <Link
              onClick={() => setIsMenu(false)}
              to={"/reviews"}
              className="mr-5   text-[20px] text-white  font-semibold"
            >
              {t(`nav.nav3`)}
            </Link>
            <div className="h-[2px] w-[100%] bg-heroGreey rounded-lg mb-2 mt-2"></div>

            <Link
              onClick={() => setIsMenu(false)}
              to={"/blog"}
              className="mr-5 font-semibold text-[20px] text-white"
            >
              {t(`nav.nav4`)}
            </Link>
          </div>

          <div className="mt-9 w-[100%] flex justify-center pt-9 flex-col items-center">
            <button
              onClick={() => {
                setIsMenu(false);
                setIsRegister(true);
              }}
              className="w-[200px]"
            >
              <p className="bg-[#1348F9] text-white py-3 px-8 text-center rounded-full font-semibold mb-8  ">
                {t(`nav.auth2`)}
              </p>
            </button>

            <div className="flex">
              <button
                onClick={() => {
                  setIsMenu(false);
                  setIsLogin(true);
                }}
              >
                <p className="text-white text-md font-semibold mr-5">
                  {t(`nav.auth1`)}
                </p>
              </button>
              <p className="text-white text-md font-semibold">
                {t(`footer.btn`)}
              </p>
            </div>

            <div className="mt-8 flex items-center">
              <LanguageIcon
                fontSize="large"
                sx={{ color: "white", marginRight: "20px" }}
              />
              <div className="flex">
                {lang?.map((item) => {
                  return (
                    item.selected && (
                      <img
                        onClick={changeLang}
                        src={item?.logo}
                        alt={item?.name}
                        width={29}
                        height={20}
                        className="cursor-pointer mr-3"
                      />
                    )
                  );
                })}
                <img
                  onClick={changeLang}
                  src={"/Vector.svg"}
                  alt="ru"
                  width={15}
                  height={5}
                  className="cursor-pointer"
                />
              </div>
            </div>
            {/* ([
    { id: 1, name: "Russian", logo: "/ru.svg", selected: true },
    { id: 2, name: "Netherlands", logo: "/gl.svg", selected: false },
    { id: 3, name: "France", logo: "/fr.svg", selected: false },
    { id: 4, name: "England", logo: "/en.svg", selected: false },
  ]); */}
            {isLang && (
              <div className="bg-white h-[145px] w-[250px] rounded-lg ml-5 p-2 mt-6 flex flex-col">
                {lang?.map((item) => {
                  return (
                    !item?.selected && (
                      <div
                        onClick={() => {
                          handleLang(item.id);
                          switch (item.name) {
                            case "Russian":
                              handleChangeLanguage("ru");
                              break;
                            case "Netherlands":
                              handleChangeLanguage("gl");
                              break;
                            case "France":
                              handleChangeLanguage("fr");
                              break;
                            case "England":
                              handleChangeLanguage("en");
                              break;
                            default:
                              handleChangeLanguage("ru");
                          }
                        }}
                        className="flex mb-4 mt-2"
                      >
                        <img
                          src={item?.logo}
                          alt="ru"
                          width={29}
                          height={20}
                          className="cursor-pointer mr-3"
                        />
                        <p className="text-black  font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                          {item?.name}
                        </p>
                      </div>
                    )
                  );
                })}

                {/* <div className="flex mb-4 ">
                  <img
                    src={"/fr.svg"}
                    alt="ru"
                    width={29}
                    height={20}
                    className="cursor-pointer mr-3"
                  />
                  <p className="text-black  font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                    France
                  </p>
                </div>

                <div className="flex mb-4 ">
                  <img
                    src={"/en.svg"}
                    alt="ru"
                    width={29}
                    height={20}
                    className="cursor-pointer mr-3"
                  />
                  <p className="text-black  font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                    England
                  </p>
                </div> */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
