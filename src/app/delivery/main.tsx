import { useTranslation } from "react-i18next";
import {
  Ask,
  Comments,
  About,
  Hero,
  Hero2,
  Onas,
  Send,
  Sponsr,
} from "../../components/client";
import RootLayout from "../../components/layouts/RootLayout";

const HomePage = () => {
  const [t] = useTranslation("global");
  return (
    <RootLayout>
      <div className="w-[100%]">
        <Hero />
        <div className="w-[100%] relative mt-24">
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

          <div className="w-[100%] flex justify-center pt-[20px] lg:pt-[80px]">
            <p className="font-bold lg:text-[55px] md:text-[40px] sm:text-[32px] text-[20px] text-lightGreey">
              {t(`section1.title`)}
            </p>
          </div>

          <About />

          <Sponsr />
          <div className="absolute bottom-0 z-10 right-0 h-[70px] w-[30px] sm:w-[50px] md:w-[70px] lg:w-[80px]">
            <img
              src={"/minRight.svg"}
              width={100}
              height={100}
              alt={"minLeft"}
            />
          </div>

          <Onas />
        </div>

        <Send />
        <div className="relative mb-8 md:mb-24">
          <div className="absolute bottom-0 left-0 h-[100px] w-[30px] sm:w-[50px] md:w-[70px] lg:w-[100px]">
            <img src={"/minLeft.svg"} width={70} height={70} alt={"minLeft"} />
          </div>
        </div>

        <Hero2 />

        <Ask />
        <div className="relative mb-8 md:mb-24">
          <div className="absolute bottom-0 left-0 h-[100px] w-[30px] sm:w-[50px] md:w-[70px] lg:w-[100px]">
            <img src={"/minLeft.svg"} width={70} height={70} alt={"minLeft"} />
          </div>
        </div>

        <Comments />
      </div>
    </RootLayout>
  );
};

export default HomePage;
