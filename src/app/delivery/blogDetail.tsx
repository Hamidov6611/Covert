import { useTranslation } from "react-i18next";
import RootLayout from "../../components/layouts/RootLayout";
import axios from "axios";
import { BASE_URL } from "../../service/auth";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { serviceType } from "../dashboard/AddBlog";

const BlogDetail = () => {
  const [t, i18n] = useTranslation("global");
  const { id } = useParams();
  const [data, setData] = useState<serviceType>()
  console.log(id);
  const getDetailData = async () => {
    try {
      const {data} = await axios.get(
        `${BASE_URL}/b_api/sayts/blog_deteile_views/${id}/`
      );
      console.log(data[0]);
      setData(data[0])
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetailData();
  }, []);


  function renderElement(option: string, item: serviceType) {
    switch (option) {
      case 'ru':
        return <div>{item?.translations?.ru?.title}</div>;
      case 'gl':
        return <div>{item?.translations?.nl?.title}</div>;
      case 'en':
        return <div>{item?.translations?.en?.title}</div>;
        case 'fr':
        return <div>{item?.translations?.fi?.title}</div>;
      default:
        return <div>Option not recognized</div>;
    }
  }
  console.log(data)

  function renderElement2(option: string, item: serviceType) {
    switch (option) {
      case 'ru':
        return <div>{item?.translations?.ru?.content}</div>;
      case 'gl':
        return <div>{item?.translations?.nl?.content}</div>;
      case 'en':
        return <div>{item?.translations?.en?.content}</div>;
        case 'fr':
        return <div>{item?.translations?.fi?.content}</div>;
      default:
        return <div>Option not recognized</div>;
    }
  }
  return (
    <RootLayout title="Подробности блога">
      <div className=" w-[96%] sm:w-[90%] mx-auto pb-8">
        <div className="relative w-[100%] h-[200px] sm:h-[658px] my-2 sm:my-6 ">
          <img
            src={`${data?.img}`}
            alt={"blog1"}
            className="w-full h-full rounded-3xl"
            width={100}
            height={100}
          />
        </div>
        <p className="w-[100%] md:w-[70%] font-semibold md:font-bold text-[16px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[48px] text-[#2F2E40]">
          {/* {t(`detail.title`)} */}
          {renderElement(i18n?.translator?.language, data)}
        </p>
        <p className="font-medium text-[15px] sm:text-[19px] md:text-[23px] text-lightGreey">
          {/* {t(`detail.text`)} */}
          {renderElement2(i18n?.translator?.language, data)}
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
