import { useTranslation } from "react-i18next";

const Sponsr = () => {
  const [t] = useTranslation("global");
  return (
    <div className="bg-[#1348F9] lg:h-[465px] md:flex flex-col items-center justify-center hidden">
      <p className="text-white font-medium text-[20px] sm:text-[24px] md:text-[28px] lg:text-[35px] ">
        {t(`section2.title`)}
      </p>
      <div className="flex justify-center items-center gap-x-8 mt-8">
        <div className="w-[167px] h-[71px] ">
          <img
            src={"/sponsr1.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[281px] h-[84px] ">
          <img
            src={"/sponsr2.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[330px] h-[84px] ">
          <img
            src={"/sponsr3.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-8 mt-8">
        <div className="w-[266px] h-[52px] ">
          <img
            src={"/sponsr4.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[229px] h-[68px] ">
          <img
            src={"/sponsr5.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[193px] h-[120px] ">
          <img
            src={"/sponsr6.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[120px] h-[114px] ">
          <img
            src={"/sponsr7.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[120px] h-[114px] ">
          <img
            src={"/sponsr8.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsr;
