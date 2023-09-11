
import axios from "axios"
import Cookies from 'js-cookie';
import { Checkbox } from "@mui/material";
import React, { FC, useState } from "react";

interface propsRegister {
  setIsRegister: (value: boolean) => void;
  setIsLogin: (value: boolean) => void;
}

const Register: FC<propsRegister> = ({ setIsRegister, setIsLogin }) => {
  const [checkedproccess, setCheckedProccess] = useState<boolean>(false);
  const [checkedproccess2, setCheckedProccess2] = useState<boolean>(false);
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const handleOnchange1 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const handleOnchange2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleClick = () => {
    setIsRegister(false);
    setIsLogin(true);
  };


  const postData = async (e: any) => {
    e.preventDefault()
    let postData = {username, password}
    const {data} = await axios.post(`http://45.12.72.210:8000/a_api/admin_panel/user_register_views/`, postData)
    Cookies.set("token", JSON.stringify(data?.msg?.accsess))
    Cookies.set("user", JSON.stringify(postData))
    setIsRegister(false)
  }




  return (
    <div
      onClick={() => setIsRegister(false)}
      className="fixed top-0 left-0 flex justify-center items-center bg-modalBg z-[999] w-[100%] h-[100%]"
    >
      <div
      
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] sm:w-[70%] lg:w-[36%] overflow-y-auto min-h-[77vh] bg-white flex flex-col p-3 sm:p-6 rounded-lg"
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
            Зарегистрируйтесь в качестве клиента
          </p>
        </div>
        <div className="mb-2 mt-2 sm:mt-3 sm:mb-3 flex flex-col">
          <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px]  font-montserrat">
          Логин
          </p>
          <input
            value={username}
            onChange={handleOnchange1}
            type="text"
            className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
            placeholder="Введите логин"
          />
        </div>

        <div className="mb-2 mt-2 sm:mt-3 sm:mb-3 flex flex-col">
          <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px]  font-montserrat">
          Пароль
          </p>
          <input
            value={password}
            onChange={handleOnchange2}
            type="password"
            className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
            placeholder="Введите свой пароль"
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
              Я принимаю положения Условий предоставления услуг для
              пользователей
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
              Я согласен получать электронные письма о предложении UK2EU{" "}
            </p>
          </div>
        </div>

        <p className="mt-6 font-medium text-lightGreey text-[12px] sm:text-[17px] font-montserrat">
          UK2EU обрабатывает данные для выполнения контракта, юридических
          обязанностей и содержания согласий. У вас есть право получать доступ,
          исправлять, стирать, ограничивать обработку, переносимость данных,
          отзывать согласие и возражать. Политика конфиденциальности
        </p>

        <div className="flex mt-2 sm:mt-4">
          <p className="font-montserrat text-[14px] text-lightGreey mr-5">
            У тебя есть аккаунт?
          </p>
          <button
          type="button"
            onClick={handleClick}
            className=" font-montserrat text-[14px] text-blue-700"
          >
            Вход
          </button>
        </div>

        <div className="w-[100%] flex justify-center mt-4">
          <button
            type="submit"
            className="md:mt-4 bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out text-white font-semibold text-[17px] sm:text-[18px] py-1 md:py-3 px-8 md:px-24 rounded-md"
          >
            Регистрация
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Register;