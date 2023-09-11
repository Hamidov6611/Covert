import { useTranslation } from "react-i18next";
import RootLayout from "../../components/layouts/RootLayout";

const BlogDetail = () => {
  const [t] = useTranslation("global");
  return (
    <RootLayout title="Подробности блога">
      <div className=" w-[96%] sm:w-[90%] mx-auto pb-8">
        <div className="relative w-[100%] h-[200px] sm:h-[658px] my-2 sm:my-6 ">
          <img
            src={"/Blog2.svg"}
            alt={"blog1"}
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>
        <p className="w-[100%] md:w-[70%] font-semibold md:font-bold text-[16px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[48px] text-[#2F2E40]">
          {t(`detail.title`)}
        </p>
        <p className="font-medium text-[15px] sm:text-[19px] md:text-[23px] text-lightGreey">
          {t(`detail.text`)}
        </p>
      </div>
      <div className=" w-[96%] sm:w-[90%] mx-auto pb-8">
        <div className="relative w-[100%] h-[200px] sm:h-[779px] my-2 sm:my-6 ">
          <img
            src={"/track1.svg"}
            alt={"blog1"}
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>
        <p className="w-[100%] md:w-[70%] font-semibold md:font-bold text-[16px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[48px] text-[#2F2E40]">
        {t(`detail.title2`)}
        </p>
        <p className="font-medium text-[15px] sm:text-[19px] md:text-[23px] text-lightGreey">
        {t(`detail.text2`)} 
        </p>
      </div>
    </RootLayout>
  );
};

export default BlogDetail;
