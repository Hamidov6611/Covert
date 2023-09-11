import { FC } from "react";
import { useTranslation } from "react-i18next";

interface propsForgotPassword {
  setIsLogin: (value: boolean) => void;
  setIsForgotPassword: (value: boolean) => void;
}

const ForgotPassword: FC<propsForgotPassword> = ({ setIsLogin, setIsForgotPassword }) => {
  const [t] = useTranslation("global");
  const handleClick = () => {
    setIsLogin(true);
    setIsForgotPassword(false)
  };
  return (
    <div
      onClick={() => setIsForgotPassword(false)}
      className="fixed top-0 left-0 flex justify-center items-center bg-modalBg z-[999] w-[100%] h-[100%]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] sm:w-[70%] lg:w-[36%] overflow-y-auto min-h-[34vh] bg-white flex flex-col p-3 sm:p-6 rounded-lg"
      >
        <div className="flex w-[100%] justify-end">
          <div
            onClick={() => setIsForgotPassword(false)}
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
        <div className="my-2 sm:my-4 flex items-center">
          <p className="font-semibold text-[16px] sm:text-[24px] md:text-[26px] lg:text-[30px] text-lightGreey font-montserrat">
          {t(`password.title`)}
          </p>
        
        </div>
        <div className="mb-2 mt-2 sm:mt-3 sm:mb-3 flex flex-col">
          <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px]  font-montserrat">
          {t(`password.ui1`)}
          </p>
          <input
            type="text"
            className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
            placeholder={t(`password.pl1`)}
          />
        </div>

       

       

        <div className="w-[100%] flex justify-center mt-4">
          <button
            type="submit"
            className="md:mt-4 bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out text-white font-semibold text-[17px] sm:text-[18px] py-1 md:py-3 px-8 md:px-24 rounded-md"
          >
            {t(`password.btn`)}
          </button>
        </div>

        <button 
        onClick={handleClick}
        className="mt-4 text-[#23A879] text-[14px] font-montserrat">{t(`password.btn2`)}</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
