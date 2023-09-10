import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <div className="w-[90%] mx-auto grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-3 xl:gap-x-8 mt-[100px]">
        <div className="bg-#FBFBFB border p-5 rounded-2xl">
            <div className="relative w-[83px] h-[74px]">
              <img src={'/1.svg'} alt={"1"} className="w-[100%] h-[100%]" width={100} height={100} />
            </div>
          <p className="text-[#2F2E40] font-semibold text-[20px] md:text-[25px] line-clamp-1 mt-3 ">
            {t(`section1.card.card1.title`)}
          </p>
          <p className="font-normal line-clamp-5 text-[18px] lg:text-[21px] text-[#2F2E40]">
          {t(`section1.card.card1.text`)}
          </p>
        </div>
        <div className="bg-#FBFBFB border p-5 rounded-2xl">
        <div className="relative w-[83px] h-[74px]">
              <img src={'/2.svg'} alt={"2"} className="w-[100%] h-[100%]" width={100} height={100} />
            </div>
          <p className="text-[#2F2E40] font-semibold text-[20px] md:text-[25px] line-clamp-1 mt-3 ">
          {t(`section1.card.card2.title`)}
          </p>
          <p className="font-normal line-clamp-5 text-[18px] lg:text-[21px] text-[#2F2E40]">
          {t(`section1.card.card2.text`)}
          </p>
        </div>
        <div className="bg-#FBFBFB border p-5 rounded-2xl">
        <div className="relative w-[83px] h-[74px]">
              <img src={'/3.svg'} alt={"3"} className="w-[100%] h-[100%]" width={100} height={100} />
            </div>
          <p className="text-[#2F2E40] font-semibold text-[20px] md:text-[25px] line-clamp-1 mt-3 ">
          {t(`section1.card.card3.title`)}
          </p>
          <p className="font-normal line-clamp-5 text-[18px] lg:text-[21px] text-[#2F2E40]">
          {t(`section1.card.card2.text`)}
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex md:flex-row flex-col gap-y-12 mt-12 justify-between mb-20">
        <div className="bg-#FBFBFB border p-5 rounded-2xl w-[100%] md:w-[40%]">
        <div className="relative w-[83px] h-[74px]">
              <img src={'/4.svg'} alt={"4"} className="w-[100%] h-[100%]" width={100} height={100} />
            </div>
          <p className="text-[#2F2E40] font-semibold text-[20px] md:text-[25px] line-clamp-1 mt-3 ">
          {t(`section1.card.card4.title`)}
          </p>
          <p className="font-normal line-clamp-5 text-[18px] lg:text-[21px] text-[#2F2E40]">
          {t(`section1.card.card4.text`)}
          </p>
        </div>
        <div className="bg-#FBFBFB border p-5 rounded-2xl  w-[100%] md:w-[58%]">
          <p className="font-normal text-[18px] lg:text-[19px] text-[#2F2E40] leading-[31.5px]">
          {t(`section1.card.card5.text`)}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
