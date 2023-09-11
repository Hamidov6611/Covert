import { Pagination } from "@mui/material";
import "./admin.css";

const WayTable = () => {
  return (
    <div>
      <div>
        <div className="w-[100%] inline-block rounded-lg border shadow-2xl">
          <table className="w-[100%] overflow-x-auto">
            <thead className="w-full">
              <tr className="w-full">
                <th className="text-center w-[15%] text-[19px] text-lightGreey font-semibold">
                  Идентификатор <br />
                  загрузки
                </th>
                <th className="w-[10%] text-center text-lightGreey font-semibold">
                  Имя клиента
                </th>
                <th className="w-[15%] text-[19px] text-lightGreey font-semibold text-center">
                  Клиентская <br />
                  нагрузка
                </th>
                <th className="text-center w-[10%] text-lightGreey font-semibold">
                  Тип нагрузки
                </th>
                <th className="w-[15%] text-[19px] text-lightGreey font-semibold text-center">
                  Дата получения
                </th>
                <th className="text-center w-[10%] text-lightGreey font-semibold">
                  Дата поставки
                </th>
                <th className="text-center w-[10%] text-lightGreey font-semibold">
                  Скорость <br />
                  перемещения <br />
                  линии
                </th>
                <th className="w-[5%] text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center text-lg font-medium text-lightGreey">
                  5001
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  Алекс
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1110
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  TL
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  23.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  27.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1000
                </td>
                <td className="text-center align-middle">
                  <div className="flex justify-center items-center">
                    <div className="mr-3">
                      <img
                        src={"/edit.svg"}
                        width={20}
                        height={20}
                        alt={"edit"}
                      />
                    </div>
                    <div>
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
              <tr>
                <td className="text-center text-lg font-medium text-lightGreey">
                  5001
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  Алекс
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1110
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  TL
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  23.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  27.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1000
                </td>
                <td className="text-center align-middle">
                  <div className="flex justify-center items-center">
                    <div className="mr-3">
                      <img
                        src={"/edit.svg"}
                        width={20}
                        height={20}
                        alt={"edit"}
                      />
                    </div>
                    <div>
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
              <tr>
                <td className="text-center text-lg font-medium text-lightGreey">
                  5001
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  Алекс
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1110
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  TL
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  23.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  27.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1000
                </td>
                <td className="text-center align-middle">
                  <div className="flex justify-center items-center">
                    <div className="mr-3">
                      <img
                        src={"/edit.svg"}
                        width={20}
                        height={20}
                        alt={"edit"}
                      />
                    </div>
                    <div>
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
              <tr>
                <td className="text-center text-lg font-medium text-lightGreey">
                  5001
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  Алекс
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1110
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  TL
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  23.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  27.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1000
                </td>
                <td className="text-center align-middle">
                  <div className="flex justify-center items-center">
                    <div className="mr-3">
                      <img
                        src={"/edit.svg"}
                        width={20}
                        height={20}
                        alt={"edit"}
                      />
                    </div>
                    <div>
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
              <tr>
                <td className="text-center text-lg font-medium text-lightGreey">
                  5001
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  Алекс
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1110
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  TL
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  23.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  27.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1000
                </td>
                <td className="text-center align-middle">
                  <div className="flex justify-center items-center">
                    <div className="mr-3">
                      <img
                        src={"/edit.svg"}
                        width={20}
                        height={20}
                        alt={"edit"}
                      />
                    </div>
                    <div>
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
              <tr>
                <td className="text-center text-lg font-medium text-lightGreey">
                  5001
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  Алекс
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1110
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  TL
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  23.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  27.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1000
                </td>
                <td className="text-center align-middle">
                  <div className="flex justify-center items-center">
                    <div className="mr-3">
                      <img
                        src={"/edit.svg"}
                        width={20}
                        height={20}
                        alt={"edit"}
                      />
                    </div>
                    <div>
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
              <tr>
                <td className="text-center text-lg font-medium text-lightGreey">
                  5001
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  Алекс
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1110
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  TL
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  23.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  27.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1000
                </td>
                <td className="text-center align-middle">
                  <div className="flex justify-center items-center">
                    <div className="mr-3">
                      <img
                        src={"/edit.svg"}
                        width={20}
                        height={20}
                        alt={"edit"}
                      />
                    </div>
                    <div>
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
              <tr>
                <td className="text-center text-lg font-medium text-lightGreey">
                  5001
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  Алекс
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1110
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  TL
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  23.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  27.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1000
                </td>
                <td className="text-center align-middle">
                  <div className="flex justify-center items-center">
                    <div className="mr-3">
                      <img
                        src={"/edit.svg"}
                        width={20}
                        height={20}
                        alt={"edit"}
                      />
                    </div>
                    <div>
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
              <tr>
                <td className="text-center text-lg font-medium text-lightGreey">
                  5001
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  Алекс
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1110
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  TL
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  23.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  27.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1000
                </td>
                <td className="text-center align-middle">
                  <div className="flex justify-center items-center">
                    <div className="mr-3">
                      <img
                        src={"/edit.svg"}
                        width={20}
                        height={20}
                        alt={"edit"}
                      />
                    </div>
                    <div>
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
              <tr>
                <td className="text-center text-lg font-medium text-lightGreey">
                  5001
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  Алекс
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1110
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  TL
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  23.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  27.09.2023
                </td>
                <td className="text-center text-lg font-medium text-lightGreey">
                  1000
                </td>
                <td className="text-center align-middle">
                  <div className="flex justify-center items-center">
                    <div className="mr-3">
                      <img
                        src={"/edit.svg"}
                        width={20}
                        height={20}
                        alt={"edit"}
                      />
                    </div>
                    <div>
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
            </tbody>
          </table>

        </div>
          <div className="mt-8 flex justify-end">
            <Pagination count={10} variant="outlined" shape="rounded" />
          </div>
      </div>
    </div>
  );
};

export default WayTable;
