import { BASE_URL } from "../../service/auth";
import { ProductType } from "../../interface";
import { FormControl, InputLabel, MenuItem, Select, Switch } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

interface Step3Props {
  setIdCargo: (value: string) => void;
  product: ProductType;
  setProduct: (value: ProductType) => void;
  postData: any;
}

const Step3 = ({ setIdCargo, product, setProduct, postData }: Step3Props) => {
  const [checked2, setChecked2] = useState(false);
  const [count, setCount] = useState(product.count);
  const [data, setData] = useState([]);
  const getCardData = async () => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + JSON.parse(Cookies.get("token")) || "",
        },
      };
      const { data } = await axios.get(
        `${BASE_URL}/b_api/sayts/cargo_quality_views/`, config
      );
      setData(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCardData();
  }, []);

  const SubmitHandler = async (e: any) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: "Bearer " + JSON.parse(Cookies.get("token")) || "",
      },
    };
    const res = await axios.post(
      `${BASE_URL}/b_api/sayts/delivery_list_views/`,
      postData,
      config
    );
    console.log(res);
  };
  return (
    <div className="sm:mt-12">
      <form>
        <p className="text-center font-montserrat font-semibold text-[17px] lg:hidden">
          Подробная информация о товара
        </p>
        <p className="text-center font-normal text-lightGreey text-[15px] mt-2 sm:text-[20px]">
          Перевозка мебели
        </p>
        <p className="text-center font-montserrat font-semibold text-[17px] mt-2 text-lightGreey mb-12">
          Опишите ваши товары, чтобы получить соответствующие расценки
        </p>

        <div className="w-[100%] shadow-xl border p-3 rounded-md flex flex-col">
          <div className="flex flex-col mb-3 ">
            <p className="font-medium  mb-3 text-[18px] sm:text-[20px] text-lightGreey">
              Что вы хотите отправить?
            </p>
            <div className="flex sm:flex-row flex-col gap-y-4 justify-between items-center">
              <div className="sm:w-[80%] w-[100%]">
                <input
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  placeholder={`например, трактор JCB`}
                  type="text"
                  className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-4 font-medium"
                  required
                />
              </div>
              <div className="sm:w-[18%] border py-2 rounded-lg px-4 w-[100%]">
                <div className="flex justify-between">
                  <div
                    className="w-[22px] h-[22px] cursor-pointer"
                    onClick={() => {
                      count > 1 && setCount((prev) => prev - 1);
                      setProduct({ ...product, count });
                    }}
                  >
                    <img
                      src={"/minus1.svg"}
                      alt="map"
                      width={100}
                      height={100}
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <p>{count}</p>
                  <div
                    className="w-[22px] h-[22px] cursor-pointer"
                    onClick={() => {
                      setCount((prev) => prev + 1);
                      setProduct({ ...product, count });
                    }}
                  >
                    <img
                      src={"/plus1.svg"}
                      alt="map"
                      width={100}
                      height={100}
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
            <div className="flex flex-col">
              <p className="font-normal sm:font-medium  text-[16px] text-lightGreey">
                Длинна
              </p>
              <input
                value={product.length}
                onChange={(e) =>
                  setProduct({ ...product, length: e.target.value })
                }
                placeholder={`СМ`}
                type="text"
                className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-4 font-medium"
                required
              />
            </div>
            <div className="flex flex-col">
              <p className="font-normal sm:font-medium  text-[16px] text-lightGreey">
                Ширина
              </p>
              <input
                value={product.width}
                onChange={(e) =>
                  setProduct({ ...product, width: e.target.value })
                }
                placeholder={`СМ`}
                type="text"
                className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-4 font-medium"
                required
              />
            </div>
            <div className="flex flex-col">
              <p className="font-normal sm:font-medium  text-[16px] text-lightGreey">
                Высота
              </p>
              <input
                value={product.height}
                onChange={(e) =>
                  setProduct({ ...product, height: e.target.value })
                }
                placeholder={`СМ`}
                type="text"
                className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-4 font-medium"
                required
              />
            </div>
            <div className="flex flex-col">
              <p className="font-normal sm:font-medium  text-[16px] text-lightGreey">
                Вес
              </p>
              <input
                value={product.weight}
                onChange={(e) =>
                  setProduct({ ...product, weight: e.target.value })
                }
                placeholder={`СМ`}
                type="text"
                className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-4 font-medium"
                required
              />
            </div>
          </div>
          <div className="mt-8 flex flex-row ">
            <p className="to-lightGreey text-[16px] sm:text-[20px]  mr-3 sm:mr-7 font-medium">
              Являются ли размеры точными?
            </p>
            <div className="flex items-center ">
              <Switch
                defaultChecked={checked2}
                onClick={() => setChecked2((prev) => !prev)}
              />
              <p className="ml-2 sm:ml-8 font-normal font-montserrat text-[15px] sm:text-[20px] text-lightGreey mr-2">
                {checked2 ? "Да" : "Нет"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-[100%] mt-8 justify-end flex-col relative mb-24">
          <button
            type="button"
            className="mb-3 flex items-center absolute right-0 top-3"
          >
            <p className="font-semibold mr-3 text-red-800 text-[20px]">
              <svg
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.18088 3.15723L11.3381 11.3377M11.3381 11.3377L19.4954 19.5181M11.3381 11.3377L3.15767 19.4949M11.3381 11.3377L19.5186 3.18045"
                  stroke="#C61521"
                  strokeWidth={5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <p className="font-semibold mr-3 text-red-800 text-[20px]">
              Удалить
            </p>
          </button>
          <button
            type="button"
            className="flex absolute right-0 top-12 items-center"
          >
            <p className="font-semibold mr-3 text-blue-800 text-[20px]">
              <svg
                width={29}
                height={29}
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 14.3377L14.5525 14.3377M14.5525 14.3377H26.105M14.5525 14.3377V25.8901M14.5525 14.3377L14.5525 2.78516"
                  stroke="url(#paint0_linear_98_242)"
                  strokeWidth={5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_98_242"
                    x1="-14.82"
                    y1="-0.71949"
                    x2="31.6183"
                    y2="-0.519443"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.174199" stopColor="#1348F9" />
                    <stop offset="0.774517" stopColor="#1E86FA" />
                  </linearGradient>
                </defs>
              </svg>
            </p>
            <p className="font-semibold mr-3 text-blue-800 text-[20px]">
              Добавить еще один
            </p>
          </button>
        </div>

        <div className="shadow-xl border p-3 rounded-lg">
          <div className="flex flex-col">
            <p className="mb-3 font-normal text-[20px] lg:text-[22px] font-montserrat text-lightGreey">
              {" "}
              Я перечисляю доставку как
            </p>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label"></InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                // MenuProps={MenuProps}
                defaultValue={"Выберите"}
                onChange={(e) => setIdCargo(e.target.value)}
              >
                <MenuItem value={"Выберите"} disabled>
                  Выберите
                </MenuItem>
                {data?.map((item, index) => (
                  <MenuItem value={item?.id} key={item?.id}>
                    {item?.translations?.ru?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="mt-12 flex w-[100%] justify-center">
          <button type="button" className="bg-[#85858538] rounded-lg mr-5">
            <div className="flex flex-col w-[100%] py-1 px-4 sm:py-3 sm:px-8">
              <img
                src={"/leftleft.svg"}
                alt="map"
                width={100}
                height={100}
                className="w-[100%] h-[100%]"
              />
            </div>
          </button>

          <div className="flex items-center w-full justify-between">
            <button
              type="button"
              className="bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out  font-semibold text-white text-[15px] sm:text-[18px]  flex items-center justify-around py-2 sm:py-4 px-3 sm:px-8 rounded-lg"
            >
              Перейдите к деталям товара
            </button>

            <button
              onClick={SubmitHandler}
              className="bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out  font-semibold text-white text-[15px] sm:text-[18px]  flex items-center justify-around py-2 sm:py-4 px-3 sm:px-8 rounded-lg"
            >
              Следующий
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step3;
