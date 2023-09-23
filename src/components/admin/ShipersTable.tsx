import { useEffect, useState } from "react";
import "./admin.css";
import { Pagination } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../service/auth";
import Loader from "../client/Loader";
import AdminDelShipModal from "./a/deleteShipers";
import { useNavigate } from "react-router-dom";

export interface shipType {
  address: string;
  context: string;
  date: string;
  email: string;
  full_name: string;
  id: number;
  id_city: {
    id: number;
    id_country: number;
    name: string;
  };
  id_country: {
    id: number;
    name: string;
  };
  id_group: {
    id: number;
    name: string;
  };
  phone: string;
  pochta_index: number;
  uidd: string;
}

const ShipersTable = () => {
  const [data, setData] = useState<shipType[]>([]);
  const [remove, setRemove] = useState(false);
  const [removeId, setRemoveId] = useState(Number);
  const [pageSize, setPageSize] = useState(Number);
  const [pageId, setPageId] = useState(1);
  const [loader, setLoader] = useState<boolean>(true);

  const navigate = useNavigate()

  const getData = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/c_dashboard/employe_list_views/`
    );
    console.log(data);
    setData(data?.data?.results);
    setPageSize(data?.data?.count);
    setLoader(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <div className="w-[100%] inline-block rounded-lg border">
          <table className="w-[100%] overflow-x-auto table">
            <thead className="w-full">
              <tr className="w-full">
                <th className="text-center w-[15%] text-[19px] text-lightGreey font-semibold">
                  Идентификатор <br />
                  клиента
                </th>
                <th className="w-[10%] text-center text-lightGreey font-semibold">
                  Имя
                </th>
                <th className="w-[15%] text-[19px] text-lightGreey font-semibold text-center">
                  Город
                </th>
                <th className="text-center w-[10%] text-lightGreey font-semibold">
                  Почтовый <br />
                  индекс
                </th>
                <th className="w-[15%] text-[19px] text-lightGreey font-semibold text-center">
                  Страна
                </th>
                <th className="text-center w-[10%] text-lightGreey font-semibold">
                  Телефон
                </th>
                <th className="text-center w-[10%] text-lightGreey font-semibold">
                  Примечания
                </th>
                <th className="w-[5%] text-center"></th>
              </tr>
            </thead>

            {remove && (
              <AdminDelShipModal
                setRemove={setRemove}
                id={removeId}
                getData={getData}
              />
            )}

            {loader ? (
              <div className="w-[85%] absolute flex justify-center">
                <Loader />
              </div>
            ) : (
              <tbody>
                {data?.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center text-lg font-medium text-lightGreey">
                      {item?.uidd}
                    </td>
                    <td className="text-center text-lg font-medium text-lightGreey">
                      {item?.full_name}
                    </td>
                    <td className="text-center text-lg font-medium text-lightGreey">
                      {item?.address}
                    </td>
                    <td className="text-center text-lg font-medium text-lightGreey">
                      {item?.pochta_index}
                    </td>
                    <td className="text-center text-lg font-medium text-lightGreey">
                      {item?.id_country.name}
                    </td>
                    <td className="text-center text-lg font-medium text-lightGreey">
                      {item?.phone}
                    </td>
                    <td className="text-center text-lg font-medium text-lightGreey">
                      <p className="line-clamp-3">{item?.context}</p>
                    </td>
                    <td className="text-center align-middle">
                      <div className="flex justify-center items-center">
                        <div className="mr-3" onClick={() => navigate(`/editshippers/${item?.id}`)}>
                          <img
                            src={"/edit.svg"}
                            width={20}
                            height={20}
                            alt={"edit"}
                          />
                        </div>
                        <div className="cursor-pointer" onClick={() => {
                          setRemoveId(item?.id)
                          setRemove(true)
                        }}>
                          <img
                            src={"/delete.svg"}
                            width={20}
                            height={20}
                            alt={"edit"}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
        <div className="mt-8 mb-32 flex justify-end">
          <Pagination
            count={
              pageSize % 10 !== 0
                ? Math.floor(pageSize / 10) + 1
                : Math.floor(pageSize / 10)
            }
            onChange={(e, value: number) => setPageId(value)}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ShipersTable;
