import { Link } from "react-router-dom";
import UserLayout from "../../components/layouts/UserLayout";

const Profile = () => {
  return (
    <UserLayout title="User | Profile">
      <div className="ml-[3%] min-h-[60vh] mt-6">
        <div className="bg-white shadow-xl border mb-12 rounded-md w-[95%] md:w-[89%] p-8">
          <Link
            to={"/"}
            className="my-2 text-[17px] md:text-[21px] transform text-[#2F2E40CC] hover:text-[#1348F9] dark:hover:text-blue-400 md:mx-4 md:my-0 text-lg font-normal border p-3 rounded-md border-[#1348F9] transition-all duration-50  "
          >
            Данные учетной записи
          </Link>

          <p className="mt-8 text-[20px] md:text-[28px] lg:text-[40px] lg:font-semibold text-[#2F2E40CC]">
            Заполните свой профиль сейчас
          </p>
          <p className="mt-1 text-[15px] font-normal sm:font-medium md:font-semibold text-[#2F2E40CC]">
            Здесь вы можете проверить и исправить свои личные данные.
            Пожалуйста, обратите внимание, что предоставление актуальной
            информации является обязательным для использования UK2EU.
          </p>

          <p className="font-normal md:mt-6 tetx-[18px] md:text-[23px] mt-3 text-[#2F2E40CC] ">
            Ваши данные
          </p>

          <div className="flex w-full items-center border-b border-b-[#2F2E40CC]">
            <p className="font-normal w-[50%] tetx-[16px] md:text-[19px] mt-3 text-[#2F2E40CC] ">
              Имя и фамилия
            </p>
            <p className="font-normal w-[50%] tetx-[16px] md:text-[19px] mt-3 text-[#2F2E40CC] ">
              Александр Алавдий
            </p>
          </div>

          <div className="flex w-full mt-4 items-center border-b border-b-[#2F2E40CC]">
            <p className="font-normal w-[50%] tetx-[16px] md:text-[19px] mt-3 text-[#2F2E40CC] ">
              Электронная почта
            </p>
            <p className="font-normal w-[50%] tetx-[16px] md:text-[19px] mt-3 text-[#2F2E40CC] ">
              alexander111@gmail.com
            </p>
          </div>

          <div className="flex w-full mt-4 items-center">
            <p className="font-normal w-[50%] tetx-[16px] md:text-[19px] mt-3 text-[#2F2E40CC] ">
              Валюта
            </p>
            <p className="font-normal w-[50%] tetx-[16px] md:text-[19px] mt-3 text-[#2F2E40CC] ">
              Евро
            </p>
          </div>

          <div className="w-[100%] mt-8 mb-4 sm:mb-0 flex flex-col">
            <p className="mb-2 text-[#344054] font-medium">Имя и фамилия </p>
            <input
              type="text"
              className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
              placeholder={"Александр Алавдий"}
            />
          </div>

          <div className="w-[100%] mt-4 mb-4 sm:mb-0 flex flex-col">
            <p className="mb-2 text-[#344054] font-medium">Электронная почта</p>
            <input
              type="text"
              className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
              placeholder={"alexander111@gmail.com"}
            />
          </div>

          <div className="w-[100%] mt-4 mb-4 sm:mb-0 flex flex-col">
            <p className="mb-2 text-[#344054] font-medium">Телефон</p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-6">
              <select
                name=""
                id=""
                className="border w-[100%] py-2 rounded-md text-[#667085] bg-white text-[14px] px-3 focus:outline-[#1348F9] font-medium"
              >
                <option value="Великобритания">Великобритания</option>
              </select>
              <input
                type="text"
                className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
                placeholder={"alexander111@gmail.com"}
              />
            </div>
          </div>

          <div className="w-[100%] mt-4 mb-4 sm:mb-0 flex flex-col">
            <p className="mb-2 text-[#344054] font-medium">Язык</p>
            <select
              name=""
              id=""
              className="border w-[100%] py-2 rounded-md text-[#667085] bg-white text-[14px] px-3 focus:outline-[#1348F9] font-medium"
            >
              <option value="Великобритания">Великобритания</option>
            </select>
          </div>

          <div className="flex w-full justify-between">
            <div className="w-[100%] md:w-[68%] mt-4 mb-4 sm:mb-0 flex flex-col">
              <p className="mb-2 text-[#344054] font-medium">Улица</p>
              <input
                type="text"
                className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
                placeholder={"Улица"}
              />
            </div>

            <div className="w-[100%] md:w-[30%] mt-4 mb-4 sm:mb-0 flex flex-col">
              <p className="mb-2 text-[#344054] font-medium">Номер</p>
              <input
                type="text"
                className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
                placeholder={"Номер"}
              />
            </div>
          </div>

          <div className="flex w-full justify-between">
            <div className="w-[100%] md:w-[30%] mt-4 mb-4 sm:mb-0 flex flex-col">
              <p className="mb-2 text-[#344054] font-medium">Почтовый индекс</p>
              <input
                type="text"
                className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
                placeholder={"Почтовый индекс"}
              />
            </div>

            <div className="w-[100%] md:w-[68%] mt-4 mb-4 sm:mb-0 flex flex-col">
              <p className="mb-2 text-[#344054] font-medium">Город</p>
              <input
                type="text"
                className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
                placeholder={"Город"}
              />
            </div>
          </div>

          <div className="w-full inline-flex justify-center mt-8">
          <button className="bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out  text-white flex items-center py-2 justify-around sm:py-4 px-1 sm:px-4 rounded-lg">
                <p className="flex font-montserrat text-[18px] sm:text-[17px] md:text-[20px]">
                  <p>Сохранить изменения</p>
                </p>
              </button>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;
