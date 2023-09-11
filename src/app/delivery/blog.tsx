import { Link } from "react-router-dom";
import RootLayout from "../../components/layouts/RootLayout";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const [t] = useTranslation("global");
  return (
    <RootLayout title="БЛОГ">
      <div className="py-4 md:py-16 md:w-[90%] w-[96%] mx-auto ">
        <p className="font-semibold text-lightGreey text-center text-[22px] sm:text-[28px] md:text-[35px] lg:text-[65px] ">
          {t(`blog.title`)}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 pt-8">
          <div className="min-h-[540px] sm:min-h-[590px] relative border rounded-md shadow-xl">
            <div className="relative">
              <img
                src={"/Blog1.svg"}
                alt="blog1"
                width={100}
                height={100}
                className="w-[100%] h-[100%] rounded-t-md p-0 m-0"
              />
            </div>
            <div className="h-[54%] flex flex-col p-4">
              <p className="text-[19px] text-lightGreey font-medium font-montserrat">
                22.06.2023
              </p>
              <p className="mt-4 font-semibold text-[25px] text-lightGreey">
                {t(`blog.card.title`)}
              </p>
              <p className="text-[15.99px] text-lightGreey font-light mt-2 line-clamp-3">
                {t(`blog.card.text`)}
              </p>
              <div className="absolute bottom-6 left-6">
                <Link to={"/blog/1"}>
                  <p className="text-[#1348F9] text-[17px] font-semibold border-2 p-2 rounded-md hover:bg-[#1348F9] hover:text-[#fff] hover:border-transparent transition duration-500 ease-in-out border-[#1348F9]">
                    {t(`blog.card.btn`)}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="min-h-[540px] sm:min-h-[590px] relative border rounded-md shadow-xl">
            <div className="relative">
              <img
                src={"/Blog1.svg"}
                alt="blog1"
                width={100}
                height={100}
                className="w-[100%] h-[100%] rounded-t-md p-0 m-0"
              />
            </div>
            <div className="h-[54%] flex flex-col p-4">
              <p className="text-[19px] text-lightGreey font-medium font-montserrat">
                22.06.2023
              </p>
              <p className="mt-4 font-semibold text-[25px] text-lightGreey">
                {t(`blog.card.title`)}
              </p>
              <p className="text-[15.99px] text-lightGreey font-light mt-2 line-clamp-3">
                {t(`blog.card.text`)}
              </p>
              <div className="absolute bottom-6 left-6">
                <Link to={"/blog/1"}>
                  <p className="text-[#1348F9] text-[17px] font-semibold border-2 p-2 rounded-md hover:bg-[#1348F9] hover:text-[#fff] hover:border-transparent transition duration-500 ease-in-out border-[#1348F9]">
                    {t(`blog.card.btn`)}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="min-h-[540px] sm:min-h-[590px] relative border rounded-md shadow-xl">
            <div className="relative">
              <img
                src={"/Blog1.svg"}
                alt="blog1"
                width={100}
                height={100}
                className="w-[100%] h-[100%] rounded-t-md p-0 m-0"
              />
            </div>
            <div className="h-[54%] flex flex-col p-4">
              <p className="text-[19px] text-lightGreey font-medium font-montserrat">
                22.06.2023
              </p>
              <p className="mt-4 font-semibold text-[25px] text-lightGreey">
                {t(`blog.card.title`)}
              </p>
              <p className="text-[15.99px] text-lightGreey font-light mt-2 line-clamp-3">
                {t(`blog.card.text`)}
              </p>
              <div className="absolute bottom-6 left-6">
                <Link to={"/blog/1"}>
                  <p className="text-[#1348F9] text-[17px] font-semibold border-2 p-2 rounded-md hover:bg-[#1348F9] hover:text-[#fff] hover:border-transparent transition duration-500 ease-in-out border-[#1348F9]">
                    {t(`blog.card.btn`)}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="min-h-[540px] sm:min-h-[590px] relative border rounded-md shadow-xl">
            <div className="relative">
              <img
                src={"/Blog1.svg"}
                alt="blog1"
                width={100}
                height={100}
                className="w-[100%] h-[100%] rounded-t-md p-0 m-0"
              />
            </div>
            <div className="h-[54%] flex flex-col p-4">
              <p className="text-[19px] text-lightGreey font-medium font-montserrat">
                22.06.2023
              </p>
              <p className="mt-4 font-semibold text-[25px] text-lightGreey">
                {t(`blog.card.title`)}
              </p>
              <p className="text-[15.99px] text-lightGreey font-light mt-2 line-clamp-3">
                {t(`blog.card.text`)}
              </p>
              <div className="absolute bottom-6 left-6">
                <Link to={"/blog/1"}>
                  <p className="text-[#1348F9] text-[17px] font-semibold border-2 p-2 rounded-md hover:bg-[#1348F9] hover:text-[#fff] hover:border-transparent transition duration-500 ease-in-out border-[#1348F9]">
                    {t(`blog.card.btn`)}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="min-h-[540px] sm:min-h-[590px] relative border rounded-md shadow-xl">
            <div className="relative">
              <img
                src={"/Blog1.svg"}
                alt="blog1"
                width={100}
                height={100}
                className="w-[100%] h-[100%] rounded-t-md p-0 m-0"
              />
            </div>
            <div className="h-[54%] flex flex-col p-4">
              <p className="text-[19px] text-lightGreey font-medium font-montserrat">
                22.06.2023
              </p>
              <p className="mt-4 font-semibold text-[25px] text-lightGreey">
                {t(`blog.card.title`)}
              </p>
              <p className="text-[15.99px] text-lightGreey font-light mt-2 line-clamp-3">
                {t(`blog.card.text`)}
              </p>
              <div className="absolute bottom-6 left-6">
                <Link to={"/blog/1"}>
                  <p className="text-[#1348F9] text-[17px] font-semibold border-2 p-2 rounded-md hover:bg-[#1348F9] hover:text-[#fff] hover:border-transparent transition duration-500 ease-in-out border-[#1348F9]">
                    {t(`blog.card.btn`)}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="min-h-[540px] sm:min-h-[590px] relative border rounded-md shadow-xl">
            <div className="relative">
              <img
                src={"/Blog1.svg"}
                alt="blog1"
                width={100}
                height={100}
                className="w-[100%] h-[100%] rounded-t-md p-0 m-0"
              />
            </div>
            <div className="h-[54%] flex flex-col p-4">
              <p className="text-[19px] text-lightGreey font-medium font-montserrat">
                22.06.2023
              </p>
              <p className="mt-4 font-semibold text-[25px] text-lightGreey">
                {t(`blog.card.title`)}
              </p>
              <p className="text-[15.99px] text-lightGreey font-light mt-2 line-clamp-3">
                {t(`blog.card.text`)}
              </p>
              <div className="absolute bottom-6 left-6">
                <Link to={"/blog/1"}>
                  <p className="text-[#1348F9] text-[17px] font-semibold border-2 p-2 rounded-md hover:bg-[#1348F9] hover:text-[#fff] hover:border-transparent transition duration-500 ease-in-out border-[#1348F9]">
                    {t(`blog.card.btn`)}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] relative">
        <div className="absolute top-0 left-0 h-[100px] w-[30px] sm:w-[50px] md:w-[70px] lg:w-[100px]">
          <img
            src={"/minLeft.svg"}
            width={100}
            height={100}
            alt={"minLeft"}
          />
        </div>
        <div className="absolute top-0 right-0 h-[100px] w-[30px] sm:w-[50px] md:w-[70px] lg:w-[100px]">
          <img
            src={"/minRight.svg"}
            width={100}
            height={100}
            alt={"minLeft"}
          />
        </div>
      </div>
    </RootLayout>
  );
};

export default Blog;
