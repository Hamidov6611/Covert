import { Link, useLocation } from "react-router-dom";
import { ReactNode, useState } from "react";

const Footer = ():ReactNode => {
  const [isLang, setIsLang] = useState(false)
  const changeLang = () => setIsLang(prev => !prev)
  const {pathname} = useLocation()


  return (
 <div>
     <div className={`flex relative ${pathname !== '/calculator' && 'mt-[330px]'}`}>
     { pathname !== '/calculator' &&  ( <div className="w-[90%] md:w-[60%] mx-auto border h-[413px] bg-white ml-[5%] md:ml-[20%] absolute top-[-330px] rounded-lg shadow-2xl">
        <p className="text-center text-[#1348F9] text-[20px] sm:text-[24px] md:text-[32px] lg-text-[40px] mt-6 font-semibold">
          Связаться с нами!
        </p>
        <form className="mt-1 flex flex-col p-3 sm:p-6 relative">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="w-[100%] sm:w-[38%] mb-4 sm:mb-0 flex flex-col">
              <p className="mb-2 text-[#344054] font-medium">Ваше имя</p>
              <input
                type="text"
                className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
                placeholder="Введите Имя"
              />
            </div>
            <div className="w-[100%] sm:w-[58%]">
              <p className="mb-2 text-[#344054] font-medium">Номер телефона</p>
              <input
                type="text"
                className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          <div className="w-[100%] mt-3">
            <p className="mb-2 text-[#344054] font-medium">Сообщение</p>
            <textarea className="resize-none border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium" />
          </div>

          <div className="w-[100%] flex justify-center">
            <button
              type="submit"
              className="mt-3 md:mt-10 bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out text-white font-semibold text-[18px] py-1 md:py-3 px-8 md:px-24 rounded-md"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>)}

      <div className="w-[100%] min-h-[527px] bg-[#0F172A]">
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 pt-36">
          <div className={`flex flex-col justify-center ${isLang && 'mt-[-107px]'}`}>
            <div className="w-[144px] [h-124px]">
              <img
                src={"/logo1.svg"}
                alt="logo"
                width={100}
                height={100}
                className="object-cover w-[100%] h-[100%]"
              />
            </div>
            <div className="flex flow-row mt-8">
              <div className="w-[40px] [h-14px] mr-3">
                <img
                  src={"/mail.svg"}
                  alt="logo"
                  width={100}
                  height={100}
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>
              <p className="text-white text-[15px] md:text-[18px] font-medium">
                ssuport@uk2eu.com
              </p>
            </div>
            <div className="flex flow-row mt-6 items-center">
              <div className="w-[40px] [h-14px] mr-3">
                <img
                  src={"/phone.svg"}
                  alt="logo"
                  width={100}
                  height={100}
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>
              <p className="text-white tetx-[15px] md:text-[18px] font-medium">
                894-912-98-49
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <Link to={"/"}>
              <p className="text-[#fff] font-bold text-[18px] sm:text-[20px] md:text-[23px]">
                Компания
              </p>
            </Link>
            <div className="mt-8 gap-y-4">
              <Link to={"/"}>
                <p className="text-white mb-4 font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                  О нас
                </p>
              </Link>
              <Link to={"/"}>
                <p className="text-white mb-4 font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                  Услуги
                </p>
              </Link>
              <Link to={"/"}>
                <p className="text-white mb-4 font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                  Цены
                </p>
              </Link>
              <Link to={"/"}>
                <p className="text-white  font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                  Отзывы
                </p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <Link to={"/"}>
              <p className="text-[#fff] font-bold text-[18px] sm:text-[20px] md:text-[23px]">
                Помощь
              </p>
            </Link>
            <div className="mt-8 gap-y-4">
              <Link to={"/"}>
                <p className="text-white mb-4 font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                  Политика и конфиденциальность
                </p>
              </Link>
              <Link to={"/"}>
                <p className="text-white mb-4 font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                  Справка
                </p>
              </Link>
              <Link to={"/"}>
                <p className="text-white mb-4 font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                  Блог
                </p>
              </Link>
              <Link to={"/"}>
                <p className="text-white  font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                  Партнеры
                </p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col mt-[-23px]">
            <Link to={"/"}>
              <p className="text-[#fff] font-bold text-[18px] sm:text-[20px] md:text-[23px]">
                Следите за обновлениями в области логистики
              </p>
            </Link>
            <div className="mt-8 gap-y-4">
              <div className="mb-4">
                <div className="flex">
                  <div className="h-[40px] w-[40px] mb-4 mr-2 sm:mr-4 bg-[#1E293B] hover:bg-[#1348F9] flex items-center justify-center rounded-full">
                    <div className="w-[20px] h-[20px]">
                      <img
                        src={"/twitter.svg"}
                        className="w-[100%] h-[100%]"
                        alt="twitter"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="h-[40px] w-[40px] mb-4 mr-2 sm:mr-4 bg-[#1348F9] hover:bg-[#1E293B] flex items-center justify-center rounded-full">
                    <div className="w-[20px] h-[20px]">
                      <img
                        src={"/facebook.svg"}
                        className="w-[100%] h-[100%]"
                        alt="facebook"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="h-[40px] w-[40px] mb-4 mr-2 sm:mr-4 bg-[#1E293B] hover:bg-[#1348F9] flex items-center justify-center rounded-full">
                    <div className="w-[20px] h-[20px]">
                      <img
                        src={"/instagram.svg"}
                        className="w-[100%] h-[100%]"
                        alt="instagram"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="h-[40px] w-[40px] mb-4 mr-2 sm:mr-4 bg-[#1E293B] hover:bg-[#1348F9] flex items-center justify-center rounded-full">
                    <div className="w-[20px] h-[20px]">
                      <img
                        src={"/github.svg"}
                        className="w-[100%] h-[100%]"
                        alt="github"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Link to={"/"}>
                <button className="border border-[#1348F9] text-[#1348F9] px-10 py-3 rounded-md mb-4 transition duration-300 ease-in-out hover:bg-[#1348F9] hover:text-white">
                  Связаться с нами
                </button>
              </Link>
              <div className="flex mb-4 justify-start items-start">
                <div className="flex mt-2">
                  <img
                  onClick={changeLang}
                    src={"/ru.svg"}
                    alt="ru"
                    width={29}
                    height={20}
                    className="cursor-pointer mr-3"
                  />
                  <img
                  onClick={changeLang}
                    src={"/Vector.svg"}
                    alt="ru"
                    width={15}
                    height={5}
                    className="cursor-pointer"
                  />
                </div>
                 {isLang && (
                  <div className="bg-white h-[135px] w-[250px] rounded-lg ml-5 p-2">
                  <div className="flex mb-4 mt-2 sm:mt-0 ">
                    <img
                      src={"/gl.svg"}
                      alt="ru"
                      width={29}
                      height={20}
                      className="cursor-pointer mr-3"
                    />
                    <p className="text-black  font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                    Netherlands
                    </p>
                  </div>
 
                  <div className="flex mb-4 ">
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
                  </div>
                </div>
                 )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default Footer;
