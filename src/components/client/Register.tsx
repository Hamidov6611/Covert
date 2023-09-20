import axios from "axios"
import Cookies from 'js-cookie';
import { Checkbox } from "@mui/material";
import React, { FC, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/userContext";
import { BASE_URL } from "../../service/auth";

interface propsRegister {
  setIsRegister: (value: boolean) => void;
  setIsLogin: (value: boolean) => void;
}

const Register: FC<propsRegister> = ({ setIsRegister, setIsLogin }) => {
  const [checkedproccess, setCheckedProccess] = useState<boolean>(false);
  const [checkedproccess2, setCheckedProccess2] = useState<boolean>(false);
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [count, setCount] = useState<number>(0)
  const [t] = useTranslation("global");
  const handleOnchange1 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const handleOnchange2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleClick = () => {
    setIsRegister(false);
    setIsLogin(true);
  };

  const { setUser, setIsUser } = useContext(UserContext)

  

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
    console.log(data)
    let user ={
      username: data?.username,
      id: data?.id,
      groups: data?.groups
    }
    
    localStorage.setItem('user', JSON.stringify(user));
    setUser({
      username: data?.username,
      id: data?.id,
      groups: data?.groups
    })
  };


  useEffect(() => {
    getData()
    count + 1;
  }, [])

  
  const postData = async (e: any) => {
    e.preventDefault()
    setCount(prev => prev + 1)
    let postData = {username, password}
    const {data} = await axios.post(`http://45.12.72.210:8000/a_api/admin_panel/user_register_views/`, postData)
    Cookies.set("token", JSON.stringify(data?.msg?.accsess))
    Cookies.set("user", JSON.stringify(postData))
    setIsRegister(false)
    setIsUser(true)
    await getData()
  }

 
 

  return (
    <div
      onClick={() => setIsRegister(false)}
      className="fixed top-0 left-0 flex justify-center items-center bg-modalBg z-[999] w-[100%] h-[100%]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] sm:w-[70%] lg:w-[36%] overflow-y-auto min-h-[70vh] bg-white flex flex-col p-3 sm:p-6 rounded-lg"
      >
        <form onSubmit={postData}>
        <div className="flex w-[100%] justify-end">
          <div
            onClick={() => setIsRegister(false)}
            className="w-[12px] h-[12px] sm:w-[18.84px] sm:h-[18.84px] cursor-pointer"
          >
            <img
              src={"/clear.svg"}
              alt="clear"
              width={100}
              height={100}
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
        <div className="my-2 sm:my-4">
          <p className="font-semibold text-[15px] sm:text-[24px] md:text-[26px] lg:text-[30px] text-lightGreey font-montserrat">
            {t(`registration.title`)}
          </p>
        </div>
        <div className="mb-2 mt-2 sm:mt-3 sm:mb-3 flex flex-col">
          <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px]  font-montserrat">
          {t(`registration.ui1`)}
          </p>
          <input
            value={username}
            onChange={handleOnchange1}
            type="text"
            className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
            placeholder={t(`registration.pl1`)}
          />
        </div>

        <div className="mb-2 mt-2 sm:mt-3 sm:mb-3 flex flex-col">
          <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px]  font-montserrat">
          {t(`registration.ui2`)}
          </p>
          <input
            value={password}
            onChange={handleOnchange2}
            type="password"
            className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
            placeholder={t(`registration.pl2`)}
          />
        </div>

        <div className="flex w-[100%] mt-2 sm:mt-6 items-start">
          <div className="w-[10%]">
            <Checkbox
              checked={checkedproccess}
              onClick={() => setCheckedProccess((prev) => !prev)}
            />
          </div>
          <div className="w-[100%] sm:w-[66%]">
            <p className="ml-3 sm:ml-0 font-medium text-lightGreey text-[12px] sm:text-[17px]  font-montserrat">
            {t(`registration.ask1`)}
            </p>
          </div>
        </div>

        <div className="flex w-[100%] mt-2 sm:mt-6 items-start">
          <div className="w-[10%]">
            <Checkbox
              checked={checkedproccess2}
              onClick={() => setCheckedProccess2((prev) => !prev)}
            />
          </div>
          <div className="w-[100%] sm:w-[66%]">
            <p className="ml-3 sm:ml-0 font-medium text-lightGreey text-[12px] sm:text-[17px] font-montserrat">
            {t(`registration.ask2`)}
            </p>
          </div>
        </div>

        <p className="mt-6 font-medium text-lightGreey text-[12px] sm:text-[17px] font-montserrat">
        {t(`registration.text`)}
        </p>

        <div className="flex mt-2 sm:mt-4">
          <p className="font-montserrat text-[14px] text-lightGreey mr-5">
          {t(`registration.ask3`)}
          </p>
          <button
          type="button"
            onClick={handleClick}
            className=" font-montserrat text-[14px] text-blue-700"
          >
            {t(`registration.res`)}
          </button>
        </div>

        <div className="w-[100%] flex justify-center mt-4">
          <button
            type="submit"
            className="md:mt-4 bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out text-white font-semibold text-[17px] sm:text-[18px] py-1 md:py-3 px-8 md:px-24 rounded-md"
          >
            {t(`registration.btn`)}
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
