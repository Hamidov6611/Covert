
const Step4 = () => {
  return (
    <div className="sm:mt-12">
      <p className="text-center font-montserrat font-semibold text-[17px] lg:hidden">
        Краткие сведения
      </p>
      <p className="text-center font-normal text-lightGreey text-[15px] mt-2 sm:text-[20px]">
        Перевозка мебели
      </p>
      <p className="text-center font-montserrat font-semibold text-[17px] mt-2 text-lightGreey mb-8">
        Укажите доставку бесплатно и без каких-либо обязательств
      </p>
      <div className="flex justify-center sm:justify-end mb-8">
        <button className="bg-heroPrimary  hover:bg-Primary w-[300px] transition duration-200 ease-in-out font-semibold text-white text-[18px] sm:text-[18px]  flex items-center justify-around py-2 sm:py-4 px-1 sm:px-8 rounded-lg">
          Забронировать сейчас
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="border shadow-xl rounded-xl w-[100%] md:w-[60%] flex flex-col md:flex-row justify-between p-4">
          <div className="w-[100%] md:w-[30%] flex flex-col">
            <p className="font-normal text-[15px] sm:text-[18px] text-lightGreey">
              Маршруты и даты
            </p>
            <div className="flex flex-col mt-4 md:mt-8">
              <div className="flex mb-4 items-center">
                <div className="w-[17px] h-[22px]">
                  <img
                    src={"/loc2.svg"}
                    alt="map"
                    width={100}
                    height={100}
                    className="w-[100%] h-[100%] sm:mb-8"
                  />
                </div>
                <p className="font-semibold text-[#000] ml-4 text-[15px] sm:text-[17px] md:text-[19px]">
                  Брюссель
                </p>
              </div>

              <div className="flex mb-8">
                <div className="w-[17px] h-[22px]">
                  <img
                    src={"/loc1.svg"}
                    alt="map"
                    width={100}
                    height={100}
                    className="w-[100%] h-[100%] mb-2 sm:mb-8"
                  />
                </div>
                <p className="font-semibold text-[#000] ml-4 text-[15px] sm:text-[17px] md:text-[19px]">
                  Лондон
                </p>
              </div>

              <div className="flex items-center mb-4 sm:mb-0">
                <p>Доставка:</p>
                <p className="font-semibold text-[#000] ml-4  mb-4text-[15px] sm:text-[17px] md:text-[19px]">
                  Гибкие даты
                </p>
              </div>

              <div className="flex items-center mb-4 sm:mb-0">
                <p>Доставка:</p>
                <p className="font-semibold text-[#000] ml-4 text-[15px] sm:text-[17px] md:text-[19px]">
                  Гибкие даты
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[68%] flex flex-col">
            <div>
              <div className="flex justify-end items-center mb-4 md:mb-0">
                <svg
                  width={18}
                  height={17}
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.41185 4.40235L2 11.8141V15.52L5.70593 15.52L13.1178 8.10822M9.41185 4.40235L12.0696 1.74464L12.0712 1.74306C12.437 1.37721 12.6203 1.19397 12.8315 1.12533C13.0176 1.06487 13.2181 1.06487 13.4041 1.12533C13.6152 1.19392 13.7983 1.37696 14.1636 1.74228L15.7755 3.35415C16.1424 3.72105 16.3259 3.90458 16.3947 4.11612C16.4551 4.3022 16.4551 4.50263 16.3946 4.68871C16.326 4.9001 16.1427 5.08335 15.7763 5.44973L15.7755 5.45051L13.1178 8.10822M9.41185 4.40235L13.1178 8.10822"
                    stroke="#23A879"
                    strokeWidth="2.014"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="font-normal sm:font-medium text-[14.44px] ml-3 text-[#23A879]">
                  Редактировать
                </p>
              </div>
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
        <div className="border shadow-2xl rounded-xl w-[100%] md:w-[38%] p-2 sm:p-4 mt-8 sm:mt-0">
          <div className="flex justify-between mt-3 sm:mt-6">
            <p className=" sm:font-medium text-[12px] sm:text-[14.44px] ml-3 text-lightGreey">
              ПОДРОБНАЯ ИНФОРМАЦИЯ О ТОВАРЕ
            </p>
            <div className="flex justify-end items-center mb-2 md:mb-0">
              <svg
                width={18}
                height={17}
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.41185 4.40235L2 11.8141V15.52L5.70593 15.52L13.1178 8.10822M9.41185 4.40235L12.0696 1.74464L12.0712 1.74306C12.437 1.37721 12.6203 1.19397 12.8315 1.12533C13.0176 1.06487 13.2181 1.06487 13.4041 1.12533C13.6152 1.19392 13.7983 1.37696 14.1636 1.74228L15.7755 3.35415C16.1424 3.72105 16.3259 3.90458 16.3947 4.11612C16.4551 4.3022 16.4551 4.50263 16.3946 4.68871C16.326 4.9001 16.1427 5.08335 15.7763 5.44973L15.7755 5.45051L13.1178 8.10822M9.41185 4.40235L13.1178 8.10822"
                  stroke="#23A879"
                  strokeWidth="2.014"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-normal hidden sm:flex  sm:font-medium text-[14.44px] ml-3 text-[#23A879]">
                Редактировать
              </p>
            </div>
          </div>
          <div className="p-2">
            <table className="w-[100%] mt-4">
              <thead>
                <th className="text-[#ABAFB6] w-[70%] text-start text-[12px] sm:text-[18px] font-normal">
                  ДxШxВ
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
                    телевизор
                  </p>
                  <p className="font-semibold text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey">
                    12 x 12 x 12 см
                  </p>
                </td>
                <td className="font-semibold text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey">
                  12 кг
                </td>
                <td className="font-semibold text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey">
                  6
                </td>
              </tbody>
            </table>
          </div>

          <div className="flex p-2">
            <p className="mr-5 text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey font-normal">
              Являются ли размеры точными?
            </p>
            <p className="mr-5 text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey font-normal">
              Да
            </p>
          </div>
          <div
            className="my-4 mx-12"
            style={{ border: "1px dashed #2F2E40" }}
          />

          <div className="mt-8 flex">
            <p className="text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey font-normal">
              ОБЩИЙ ВЕС
            </p>
            <p className="text-[12px] font-montserrat ml-5 sm:text-[16px] md:text-[18px] text-lightGreey font-semibold">
              72 кг
            </p>
          </div>

          <div className="mt-4 flex">
            <p className="text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey font-normal">
              Я ПЕРЕЧИСЛЯЮ ДОСТАВКУ КАК
            </p>
            <p className="text-[12px] font-montserrat ml-5 sm:text-[16px] md:text-[18px] text-lightGreey font-semibold">
              Частное лицо
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-8 border shadow-2xl flex flex-col w-[100%] md:w-[60%] rounded-lg p-2 sm:p-4">
        <div className="flex items-center">
          <p className="font-medium mr-5 text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey">
            Категория
          </p>
          <p className="font-medium sm:font-semibold text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey">
            Доставка документов
          </p>
        </div>

        <div className="flex items-center mt-4 sm:mt-8 ">
          <p className="font-medium mr-5 text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey">
            НАЗВАНИЕ ОБЪЯВЛЕНИЯ
          </p>
          <p className="font-medium sm:font-semibold text-[12px] sm:text-[16px] md:text-[18px] text-lightGreey flex items-center">
            Офисные документы x6
            <div className="ml-2">
              {" "}
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.41185 5.32237L2 12.7341V16.44L5.70593 16.44L13.1178 9.02823M9.41185 5.32237L12.0696 2.66465L12.0712 2.66307C12.437 2.29723 12.6203 2.11398 12.8315 2.04534C13.0176 1.98489 13.2181 1.98489 13.4041 2.04534C13.6152 2.11393 13.7983 2.29697 14.1636 2.6623L15.7755 4.27417C16.1424 4.64106 16.3259 4.8246 16.3947 5.03614C16.4551 5.22221 16.4551 5.42265 16.3946 5.60872C16.326 5.82011 16.1427 6.00337 15.7763 6.36974L15.7755 6.37053L13.1178 9.02823M9.41185 5.32237L13.1178 9.02823"
                  stroke="#2F2E40"
                  strokeOpacity="0.8"
                  strokeWidth="2.014"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step4;
