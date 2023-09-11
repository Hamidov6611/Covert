import { Link } from "react-router-dom";
import RootLayout from "../../components/layouts/RootLayout";
import { useTranslation } from "react-i18next";

const Page = () => {
  const [t] = useTranslation("global");
  return (
    <RootLayout title="Услуги">
      <div className="pb-[100px] sm:pb-[300px]">
        <div className="w-[100%] sm:w-[100%] mx-auto relative">
          <div className="absolute top-0 left-0 h-[100px] w-[30px] sm:w-[50px] md:w-[70px] lg:w-[100px]">
            <img
              src={"/botleft.svg"}
              width={100}
              height={100}
              alt={"minLeft"}
            />
          </div>
          <p className="font-semibold text-lightGreey text-[22px] sm:text-[28px] md:text-[35px] lg:text-[65px] text-center pt-6 sm:pt-16">
            {t(`services.title`)}
          </p>

          <div className="md:w-[90%] w-[100%] mx-auto mt-12 sm:mt-24 px-4 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
              <div className="relative card1">
                <div className="relative">
                  <img
                    src={"/card2.svg"}
                    className="w-[100%] h-[100%]"
                    width={100}
                    height={100}
                    alt="card"
                  />
                  <p className="mt-2 font-semibold text-[18px] sm:text-[22px] text-lightGreey">
                  {t(`services.card1`)}
                  </p>
                </div>
                <div className="card1Content">
                  <button className="bg-[#1348F9] rounded-lg py-2 px-6 text-white">
                  {t(`services.hover1`)}
                  </button>
                  <p className="text-[16px] text-white">{t(`services.hover2`)}</p>
                </div>
              </div>
              <div className="relative card2">
                <div className="relative">
                  <img
                    src={"/card2.svg"}
                    className="w-[100%] h-[100%]"
                    width={100}
                    height={100}
                    alt="card"
                  />
                  <p className="mt-2 font-semibold text-[18px] sm:text-[22px] text-lightGreey">
                  {t(`services.card2`)}
                  </p>
                </div>
                <div></div>
              </div>
              <div className="relative card3">
                <div className="relative">
                  <img
                    src={"/card3.svg"}
                    className="w-[100%] h-[100%]"
                    width={100}
                    height={100}
                    alt="card"
                  />
                  <p className="mt-2 font-semibold text-[18px] sm:text-[22px] text-lightGreey">
                  {t(`services.card3`)}
                  </p>
                </div>
                <div></div>
              </div>
              <div className="relative card1">
                <div className="relative">
                  <img
                    src={"/card3.svg"}
                    className="w-[100%] h-[100%]"
                    width={100}
                    height={100}
                    alt="card"
                  />
                  <p className="mt-2 font-semibold text-[18px] sm:text-[22px] text-lightGreey">
                  {t(`services.card1`)}
                  </p>
                </div>
                <div className="card1Content">
                  <button className="bg-[#1348F9] rounded-lg py-2 px-6 text-white">
                  {t(`services.hover1`)}
                  </button>
                  <p className="text-[16px] text-white">{t(`services.hover2`)}</p>
                </div>
              </div>
              <div className="relative card1">
                <div className="relative">
                  <img
                    src={"/card2.svg"}
                    className="w-[100%] h-[100%]"
                    width={100}
                    height={100}
                    alt="card"
                  />
                  <p className="mt-2 font-semibold text-[18px] sm:text-[22px] text-lightGreey">
                  {t(`services.card1`)}
                  </p>
                </div>
                <div className="card1Content">
                  <button className="bg-[#1348F9] rounded-lg py-2 px-6 text-white">
                  {t(`services.hover1`)}
                  </button>
                  <p className="text-[16px] text-white">{t(`services.hover2`)}</p>
                </div>
              </div>
            </div>

            <p className="font-semibold text-lightGreey text-[22px] sm:text-[28px] md:text-[35px] lg:text-[65px] pt-16">
            {t(`services.blog.title`)}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-x-8 gap-y-8">
              <div className="h-[480px] relative border rounded-[24px] shadow-xl">
                <div className="relative h-[46%]">
                  <img
                    src={"/blog1.svg"}
                    alt="blog1"
                    className="rounded-t-[24px]"
                  />
                </div>
                <div className="h-[54%] flex flex-col p-4">
                  <p className="text-[17px] text-lightGreey font-normal font-montserrat">
                    03.07.2023
                  </p>
                  <p className="mt-4 font-semibold text-[18.27px] text-lightGreey">
                    {t(`services.blog.card1.title`)}
                  </p>
                  <p className="text-[15.99px] text-lightGreey font-light mt-2 line-clamp-2">
                    {t(`services.blog.card1.text`)}
                  </p>
                  <div className="absolute bottom-6 right-6">
                    <Link to={"/"}>
                      <p className="text-[#1348F9] text-[17px] font-semibold">
                       {t(`services.blog.card1.btn`)}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="h-[480px] relative border rounded-[24px] shadow-xl">
                <div className="relative h-[46%] w-[100%]">
                  <img
                    src={"/blog2.svg"}
                    alt="blog1"
                    className="rounded-t-[24px]"
                  />
                </div>
                <div className="h-[54%] flex flex-col p-4">
                  <p className="text-[17px] text-lightGreey font-normal font-montserrat">
                    03.07.2023
                  </p>
                  <p className="mt-4 font-semibold text-[18.27px] text-lightGreey">
                    {t(`services.blog.card1.title`)}
                  </p>
                  <p className="text-[15.99px] text-lightGreey font-light mt-2 line-clamp-2">
                    {t(`services.blog.card1.text`)}
                  </p>
                  <div className="absolute bottom-6 right-6">
                    <Link to={"/"}>
                      <p className="text-[#1348F9] text-[17px] font-semibold">
                       {t(`services.blog.card1.btn`)}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="h-[480px] relative border rounded-[24px] shadow-xl">
                <div className="relative h-[46%] w-[100%]">
                  <img
                    src={"/blog3.svg"}
                    alt="blog1"
                    className="rounded-t-[24px]"
                  />
                </div>
                <div className="h-[54%] flex flex-col p-4">
                  <p className="text-[17px] text-lightGreey font-normal font-montserrat">
                    03.07.2023
                  </p>
                  <p className="mt-4 font-semibold text-[18.27px] text-lightGreey">
                    {t(`services.blog.card1.title`)}
                  </p>
                  <p className="text-[15.99px] text-lightGreey font-light mt-2 line-clamp-2">
                    {t(`services.blog.card1.text`)}
                  </p>
                  <div className="absolute bottom-6 right-6">
                    <Link to={"/"}>
                      <p className="text-[#1348F9] text-[17px] font-semibold">
                       {t(`services.blog.card1.btn`)}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="h-[480px] relative border rounded-[24px] shadow-xl">
                <div className="relative h-[46%] w-[100%]">
                  <img
                    src={"/blog4.svg"}
                    alt="blog1"
                    className="rounded-t-[24px]"
                  />
                </div>
                <div className="h-[54%] flex flex-col p-4">
                  <p className="text-[17px] text-lightGreey font-normal font-montserrat">
                    03.07.2023
                  </p>
                  <p className="mt-4 font-semibold text-[18.27px] text-lightGreey">
                    {t(`services.blog.card1.title`)}
                  </p>
                  <p className="text-[15.99px] text-lightGreey font-light mt-2 line-clamp-2">
                    {t(`services.blog.card1.text`)}
                  </p>
                  <div className="absolute bottom-6 right-6">
                    <Link to={"/"}>
                      <p className="text-[#1348F9] text-[17px] font-semibold">
                       {t(`services.blog.card1.btn`)}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Page;
