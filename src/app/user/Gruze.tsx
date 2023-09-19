import UserLayout from "../../components/layouts/UserLayout";

const Gruze = () => {
  return (
    <UserLayout>
      <div className="ml-[3%] min-h-[60vh] mt-6">
        <div className="flex items-center gap-x-8 mb-2">
          <img src="/leftish.svg" alt="leftish" />
          <p className="font-medium md:font-semibold text-lightGreey text-[20px] md:text-[24px] lg:text-[28px]">
            Офисные документы
          </p>
        </div>
        <p className="w-[100%] md:w-[90%] mx-auto font-medium md:font-semibold text-[12px] md:text-[18px] text-lightGreey">
          Доставка документов{" "}
          <span className="font-normal md:font-semibold text-[#ABAFB6] text-[12px] md:text-[18px] ml-1 md:ml-4">
            Дата заказа доставки: 31 июля 2023 года, 20:42
          </span>
        </p>

        <div className="flex md:flex-row flex-col bg-white w-[90%] justify-between p-4 md:p-6 mt-6 shadow-xl border rounded-md mb-12">
          <div className="w-full md:w-[50%]">
            <p className="font-medium md:font-semibold text-lightGreey text-[16px]  mb-3 md:text-[20px] lg:text-[24px]">
              Офисные документы
            </p>
            <p className="font-medium md:font-semibold text-[15px] md:text-[18px] text-lightGreey">
              Доставка документов{" "}
              <span className="font-normal md:font-semibold text-[#ABAFB6] text-[14px] md:text-[18px] ml-4">
                Дата заказа доставки: 31 июля 2023 года, 20:42
              </span>
            </p>
            <p className="my-4 text-[14px] md:text-[20px] font-semibold text-lightGreey">
              выполненно 5 дней назад{" "}
              <span className="text-[14px] md:text-[18px] text-[#ABAFB6] ml-3">
                (чт, 31 июля 2023, 20:42)
              </span>
            </p>
            <p className="font-normal text-[14px] md:text-[19px] text-[#2F2E40CC] mb-3">
              Маршруты и даты
            </p>

            <div className="flex flex-col gap-y-4">
              <div className="flex justify-between">
                <img src="/loc2.svg" alt="Location 1" />
                <p className="font-medium md:font-semibold text-[#000]  text-[13px] md:text-[14px] lg:text-[16px]">
                  Гибкие даты
                </p>
              </div>

              <div className="flex justify-between">
                <img src="/loc1.svg" alt="Location 1" />
                <p className="font-medium md:font-semibold text-[#000]  text-[13px] md:text-[14px] lg:text-[16px]">
                  Гибкие даты
                </p>
              </div>

              <div className="flex justify-between bg-[#F6F6F6] p-3">
                <p className="font-medium md:font-semibold text-[#000]  text-[14px] md:text-[16px] lg:text-[18px]">
                  Расстояние:
                </p>
                <p className="font-medium md:font-semibold text-[#000]  text-[14px] md:text-[16px] lg:text-[18px]">
                  367 км
                </p>
              </div>
            </div>

            <div className=" w-full">
              <div className="p-2">
                <table className="w-[100%] mt-4">
                  <thead>
                    <th className="text-[#ABAFB6] w-[70%] text-start text-[12px] sm:text-[18px] font-normal">
                      Длинна x Ширина x Высота
                    </th>
                    <th className="text-[#ABAFB6] w-[15%] text-start text-[12px] sm:text-[18px] font-normal">
                      Вес
                    </th>
                    <th className="text-[#ABAFB6] w-[15%] text-start text-[12px] sm:text-[18px] font-normal">
                      Шт
                    </th>
                  </thead>
                  <tbody>
                    <td>
                      <p className="font-semibold text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey">
                        Офисные документы
                      </p>
                      <p className="font-semibold text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey">
                        21 x 30
                      </p>
                    </td>
                    <td className="font-semibold text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey">
                      2,5 кг
                    </td>
                    <td className="font-semibold text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey">
                      15
                    </td>
                  </tbody>
                </table>
              </div>

              <div className="flex p-2">
                <p className="mr-5 text-[12px] sm:text-[16px] md:text-[18px] text-[#000]  font-normal">
                  Являются ли размеры точными?
                </p>
                <p className="mr-5 text-[12px] sm:text-[16px] md:text-[18px] text-[#000]  font-normal">
                  Да
                </p>
              </div>

              <div className="mt-8 flex bg-[#F6F6F6] justify-between p-3">
                <p className="mr-5 text-[12px] sm:text-[16px] md:text-[18px] text-[#000]  font-normal md:font-medium">
                  ОБЩИЙ ВЕС
                </p>
                <p className="mr-5 text-[12px] sm:text-[16px] md:text-[18px] text-[#000]  font-normal md:font-medium">
                  72 кг
                </p>
              </div>
              <p className="mt-4 mr-5 text-[12px] sm:text-[16px] md:text-[18px] text-[#000] font-normal md:font-medium">
                Клиент:
              </p>
              <p>Частное лицо</p>
            </div>
          </div>
          <div className="w-full mt-6 md:mt-0 md:w-[50%]">
            <div className="w-[90%] mx-auto">
            <img
              src={"/map.svg"}
              alt="map"
              width={100}
              height={100}
              className="w-[100%] h-[100%] sm:mb-8"
            />
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Gruze;
