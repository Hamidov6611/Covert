import { useTranslation } from "react-i18next";

const Hero = () => {
  const [t] = useTranslation("global");
  return (
    <div className="flex lg:flex-row flex-col w-[100%] mx-auto">
      <div className="w-[95%] mx-auto lg:w-[45%] px-2 sm:px-0 sm:ml-[5%] mt-[3%] z-40">
        <p className="hidden md:flex font-semibold md:font-bold text-[18px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[65px] text-[#2F2E40]">
          {t(`hero1.title`)}
        </p>
        <p className="flex md:hidden text-center font-bold text-[18px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[65px] text-[#2F2E40]">
          {t(`hero1.title`)}
        </p>
        <div className="flex flex-col gap-y-4 md:gap-y-6 md:mt-8">
          <div className="w-[100%] md:w-[80%] flex items-center">
            <div className="pl-1 md:w-[10%] ">
              <div className="relative md:w-[37.51px] w-[24px] mr-2">
                <img
                  src={"/check.svg"}
                  width={37.51}
                  alt={"check"}
                  height={25.62}
                />
              </div>
            </div>
            <div className="w-[90%]">
              <p className="font-montserrat font-semibold sm:font-bold text-[16px] sm:text-[19.21px] text-darkBlack">
                {t(`hero1.ul.li.title`)}
              </p>
              <p className="line-clamp-2 font-montserrat font-semibold text-[14px] sm:text-[18px] text-lightGreey">
                {t(`hero1.ul.li.text`)}
              </p>
            </div>
          </div>

          <div className="w-[100%] md:w-[80%] flex items-center">
            <div className="pl-1 md:w-[10%]">
              <div className="relative md:w-[37.51px] w-[24px] mr-2">
                <img
                  src={"/check.svg"}
                  width={37.51}
                  alt={"check"}
                  height={25.62}
                />
              </div>{" "}
            </div>
            <div className="w-[90%]">
              <p className="font-montserrat font-semibold sm:font-bold text-[16px] sm:text-[19.21px] text-darkBlack">
                {t(`hero1.ul.li2.title`)}
              </p>
              <p className="line-clamp-2 font-montserrat font-semibold text-[14px] sm:text-[18px] text-lightGreey">
                {t(`hero1.ul.li2.text`)}
              </p>
            </div>
          </div>

          <div className="w-[100%] md:w-[80%] flex items-center">
            <div className="pl-1 md:w-[10%]">
              <div className="relative md:w-[37.51px] w-[24px] mr-2">
                <img
                  src={"/check.svg"}
                  width={37.51}
                  alt={"check"}
                  height={25.62}
                />
              </div>{" "}
            </div>
            <div className="w-[90%]">
              <p className="font-montserrat font-semibold sm:font-bold text-[16px] sm:text-[19.21px] text-darkBlack">
                {t(`hero1.ul.li3.title`)}
              </p>
              <p className="line-clamp-2 font-montserrat font-semibold text-[14px] sm:text-[18px] text-lightGreey">
                {t(`hero1.ul.li3.text`)}
              </p>
            </div>
          </div>

          <div className="w-[95%] mx-auto flex flex-col">
            <div className="w-[100%] md:w-[90%] flex flex-col lg:pt-12">
              <button className="bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out  md:w-[100%]  text-white flex items-center py-2 justify-around sm:py-4 px-1 sm:px-4 rounded-lg">
                <p className="flex font-montserrat text-[18px] sm:text-[17px] md:text-[20px]">
                  <p>{t(`hero1.btn.left`)}</p>{t(`hero1.btn.right`)}
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
            <p className="mt-2 lg:mt-3 lg:text-[20px] font-medium text-lightGreey font-montserrat">
              {t(`hero1.btn.text`)}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[55%]  lg:flex justify-end relative">
        <div className="z-20 sticky ">
          <img
            src={"/hero.svg"}
            alt={"hero"}
            width={1000}
            height={718}
            style={{ zIndex: 2 }}
          />
        </div>
        <div className="absolute right-0 bottom-0 md:bottom-[42px] w-[320px] lg:w-[850px] z-10">
          <img
            src={"/fullRight.svg"}
            width={850}
            alt={"check"}
            height={718}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
