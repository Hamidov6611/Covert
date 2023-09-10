import { BASE_URL } from "../../service/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { cardProps } from "../../interface";
import Loader from "./Loader";

interface Step1Props {
  setID: (value: string) => void;
}

const Step1 = ({ setID }: Step1Props) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState<boolean>(true);
  const getCardData = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/a_api/admin_panel/service_get_post_views/`
      );
      setData(data?.data?.results);
      setLoader(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCardData();
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="sm:mt-12">
      <p className="text-center font-montserrat font-semibold text-[17px] lg:hidden text-lightGreey">
        Категория товара
      </p>
      <p className="text-center font-normal text-lightGreey text-[15px] mt-2 sm:text-[20px]">
        Перевозка мебели
      </p>
      <p className="text-center font-montserrat font-semibold text-[17px] mt-2 text-lightGreey mb-6 md:mb-12">
        Выберите категорию, чтобы получать лучшие транспортные предложения и
        экономить до 60%!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 ">
        {data?.map((item: cardProps, index) => (
          <div
            onClick={() => setID(String(item?.id))}
            key={index}
            className="focus:border-Primary hover:border-Primary cursor-pointer hover:placeholder:border-2 border h-[220px] sm:h-[320px] rounded-lg shadow-xl flex justify-center items-center"
          >
            <div className="flex flex-col  justify-center items-center">
              <img src={"/cal1.svg"} width={100} height={100} alt={"cal1"} />
              <p className="mt-3 text-center font-medium text-[20px] sm:text-[25px] text-lightGreey">
                {item?.translations?.ru?.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-end text-white ">
        <button className="py-2 px-6 text-[18px] font-montserrat bg-Primary rounded-md mt-8 md:mt-0">
          Следующий
        </button>
      </div>
    </div>
  );
};

export default Step1;
