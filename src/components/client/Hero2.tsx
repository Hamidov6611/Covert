import { useTranslation } from "react-i18next";

const Hero2 = () => {
  const [t] = useTranslation("global");
  return (
    <div className="flex lg:flex-row flex-col w-[100%] mx-auto">
      <div className="w-[95%] lg:w-[45%] pl-4 sm:pl-0 sm:px-0 sm:ml-[5%] mt-[3%] z-40">
        <p className="hidden md:flex font-semibold md:font-bold text-[18px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[55px] text-[#2F2E40]">
          {t(`hero2.title`)}
        </p>
        <p className="flex md:hidden text-center font-semibold md:font-bold text-[18px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[65px] text-[#2F2E40]">
        {t(`hero2.title`)}
        </p>
        <p className="font-normal text-[18px] md:text-[21px] text-lightGreey">
        {t(`hero2.title2`)}
        </p>
        <p className="mt-4 md:mt-8 font-normal text-[18px] md:text-[21px] text-lightGreey">
        {t(`hero2.title3`)}
        </p>
        <div className="w-[95%] mx-auto flex flex-col mt-4">
              <div className="w-[100%] md:w-[80%] flex flex-col lg:pt-12">
              <button className="bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out  md:w-[100%]  text-white flex items-center py-2 justify-around sm:py-4 px-1 sm:px-4 rounded-lg">
                  <p className="flex font-montserrat text-[18px] sm:text-[17px] md:text-[20px]">
                    <p>{t(`hero1.btn.left`)}</p>
                   <p className="hidden md:flex ml-3">{t(`hero1.btn.right`)}</p>
                  </p>
                  <div className="w-[30px] h-[30px] md:w-[38.89px] md:h-[38.89px] ">
                    <img
                      className="sm:ml-3 ml-1"
                      src={"/calc.svg"}
                      alt="calc"
                      height={100}
                      width={100}
                    />
                  </div>
                </button>
              </div>
            </div>
      </div>
      <div className="w-[100%] lg:w-[55%]  lg:flex justify-end relative z-20">
        <div className="z-20 sticky ">
          <img
            src={"/hero2.svg"}
            alt={"hero"}
            width={700}
            height={718}
            className="z-20"
          />
        </div>

        <div className="absolute right-0 bottom-0  w-[320px] lg:w-[850px] z-10">
          <img
            src={"/fullRight.svg"}
            width={850}
            alt={"check"}
            height={718}
            className="z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
