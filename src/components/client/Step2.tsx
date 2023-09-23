import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
// import {
//   FullscreenControl,
//   GeoObject,
//   GeolocationControl,
//   Map,
//   Polyline,
//   YMaps,
//   ZoomControl,
// } from "react-yandex-maps";
import Loader from "./Loader";
import "./send.css";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
interface Step2Props {
  checked: boolean;
  startCity: string;
  endCity: string;
  sendDate: string;
  getDate: string;
  setChecked: (value: boolean) => void;
  setStartCity: (value: string) => void;
  setEndCity: (value: string) => void;
  setSendDate: (value: string) => void;
  setGetDate: (value: string) => void;
  st: number[];
  st2: number[];
  setSt: (value: number[]) => void;
  setSt2: (value: number[]) => void;
}

const Step2 = ({
  st,
  st2,
  setSt,
  setSt2,
  checked,
  startCity,
  endCity,
  sendDate,
  getDate,
  setChecked,
  setStartCity,
  setEndCity,
  setSendDate,
  setGetDate,
}: Step2Props) => {
  let lot1: number[] = [];
  let lot2: number[] = [];
  const [loader, setLoader] = useState<boolean>(true);

  const [view, setView] = useState(false);

  const handleStartCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCity(e.target.value);
  };
  console.log();
  const handleEndCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndCity(e.target.value);
  };
  const KEY = "96b947a45d33d7dc1c49af3203966408";
  const getData = async (city: string) => {
    try {
      const base = "https://api.openweathermap.org/data/2.5/weather";
      const query = `?q=${city}&units=metric&appid=${KEY}`;
      const req = await fetch(base + query);
      const data = await req.json();
      // console.log(data)
      let a = data.coord.lat;
      let b = data.coord.lon;
      lot1 = [a, b];
      // console.log(typeof lot2)
      setSt(lot1);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData("London");
  }, []);
  console.log({
    checked,
    startCity,
    endCity,
    sendDate,
    getDate,
    setChecked,
    setStartCity,
    setEndCity,
    setSendDate,
    setGetDate,
  });
  const getData2 = async (city: string) => {
    const base = "https://api.openweathermap.org/data/2.5/weather";
    const query = `?q=${city}&units=metric&appid=${KEY}`;
    const req = await fetch(base + query);
    const data = await req.json();
    let a = data?.coord.lat;
    let b = data?.coord.lon;
    lot2 = [a, b];
    setSt2(lot2);
  };

  const getFullData = async (e: any) => {
    e.preventDefault();
    if (startCity.length > 0 && endCity.length > 0) {
      await getData(startCity);
      await getData2(endCity);
      setView(true);
    }
  };

  useEffect(() => {
    setLoader(false);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="sm:mt-12">
      <p className="text-center font-montserrat font-semibold text-[17px] lg:hidden">
        Маршрут и даты
      </p>
      <p className="text-center font-normal text-lightGreey text-[15px] mt-2 sm:text-[20px]">
        Перевозка мебели
      </p>
      <p className="text-center font-montserrat font-semibold text-[17px] mt-2 text-lightGreey mb-4">
        Выберите маршрут
      </p>

      <div className="flex md:flex-row flex-col justify-between">
        <div className="w-[100%] md:w-[35%]">
          <div className="flex flex-col">
            <div className="w-[100%] mb-6 p-6 md:p-12 shadow-lg border rounded-lg flex flex-col justify-center items-center">
              <div className="w-[100%] mb-4">
                <p className="mb-2 font-normal text-[18px] sm:text-[22px] text-lightGreey">
                  от
                </p>
                <div className="relative">
                  <input
                    value={startCity}
                    onChange={handleStartCityChange}
                    placeholder={`Введите адрес доставки`}
                    type="text"
                    className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-12 font-medium"
                  />
                  <div className="w-[17px] h-[22px] absolute top-2 left-4">
                    <img
                      src={"/loc1.svg"}
                      alt="location"
                      width={100}
                      height={100}
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[100%]">
                <p className="mb-2 font-normal text-[18px] sm:text-[22px] text-lightGreey">
                  для
                </p>
                <div className="relative">
                  <input
                    value={endCity}
                    onChange={handleEndCityChange}
                    placeholder={`Введите адрес доставки`}
                    type="text"
                    className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-12 font-medium"
                  />
                  <div className="w-[17px] h-[22px] absolute top-2 left-4">
                    <img
                      src={"/loc2.svg"}
                      alt="location"
                      width={100}
                      height={100}
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </div>
              </div>
              <button
                className="mt-4 bg-Primary text-white py-2 px-8 rounded-lg font-bold"
                onClick={getFullData}
              >
                Qidirish
              </button>
            </div>
            <div className="w-[100%] mb-6 p-6 md:p-12 shadow-lg border rounded-lg flex flex-col justify-center items-center">
              <div className="w-[100%] mb-4">
                <div className="flex items-center ">
                  <p className=" sm:font-normal text-[15px] font-montserrat sm:text-[18px] md:text-[22px] font-semibold text-lightGreey mr-5">
                    Я хочу указать дату
                  </p>
                  <div className="flex items-center">
                    <Switch
                      defaultChecked={checked}
                      onClick={() => setChecked((prev) => !prev)}
                    />
                    <p className="ml-2 sm:ml-8 font-normal font-montserrat text-[15px] sm:text-[20px] text-lightGreey mr-2">
                      {checked ? "Да" : "Нет"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex sm:flex-row flex-col justify-between mt-3 sm:items-center">
                    <p className="text-[15px] sm:text-[18px] font-montserrat font-normal text-lightGreey mb-2 sm:mb-0">
                      ДАТА ПОЛУЧЕНИЯ
                    </p>
                    <div>
                      <input
                        disabled={!checked}
                        value={sendDate}
                        onChange={(e) => setSendDate(e.target.value)}
                        type="date"
                        placeholder="Выберите дату"
                        className="border w-[100%] py-2 rounded-md text-[#667085] font-montserrat text-[14px]  focus:outline-[#1348F9] px-6 sm:px-12 font-medium"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col justify-between mt-3 sm:items-center">
                    <p className="text-[15px] sm:text-[18px]  font-montserrat font-normal text-lightGreey">
                      ДАТА ДОСТАВКИ
                    </p>
                    <div>
                      <input
                        value={getDate}
                        onChange={(e) => setGetDate(e.target.value)}
                        disabled={!checked}
                        type="date"
                        placeholder="Выберите дату"
                        className="border w-[100%] py-2 font-montserrat rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-6 sm:px-12 font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[62%] flex flex-col">
          {view && st && st2 && (
            <MapContainer
              center={[48.5278, 31.5021]}
              zoom={3}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Polyline positions={[st, st2]} color="blue" />
            </MapContainer>
          )}
        </div>
      </div>
      <div className="mt-12 flex w-[100%] justify-center">
        <button className="bg-[#85858538] rounded-lg mr-5">
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

        <button className="bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out  font-semibold text-white text-[15px] sm:text-[18px]  flex items-center justify-around py-2 sm:py-4 px-3 sm:px-8 rounded-lg">
          Перейдите к деталям товара
        </button>
      </div>
    </div>
  );
};

export default Step2;
