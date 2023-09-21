import { Pagination } from "@mui/material";
import AdminLayout from "../../components/layouts/AdminLayout";
import "./table.css";
import { useState } from "react";
import AdminAddServiceModal from "../../components/admin/blog/AddServiceModal";
import AdminDelServiceModal from "../../components/admin/blog/DeleteServiceModel";
import AdminEditServiceModal from "../../components/admin/blog/EditServiceModal";
const AddBlog = () => {
  const [open, setOpen] = useState(false);
  const [remove, setRemove] = useState(false)
  const [removeId, setRemoveId] = useState(Number)

  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(Number)

  const handleRemove = (id: number) => {
    setRemove(true)
    setRemoveId(id)
  }

  const handleEdit = (id: number) => {
    setEdit(true)
    setEditId(id)
  }
  return (
    <AdminLayout>
      <div className="p-4 min-h-[60vh]">
        <div className="flex items-center mb-6 justify-between">
          <p className="text-[18px] mr-6 sm:text-[20px] md:text-[32px] flex items-center lg:text-[45px] text-lightGreey font-semibold">
          AddBlog
          </p>

          <div className="cursor-pointer mr-[2%]" onClick={() => setOpen((prev: boolean) => !prev)}>
            <img src="/plus2.svg" alt=""  />
          </div>
        </div>


        {open && (
          <AdminAddServiceModal setOpen={setOpen} />
        )}

        {remove && (
          <AdminDelServiceModal setRemove={setRemove} id={removeId} />
        )}

        {edit && (
          <AdminEditServiceModal setEdit={setEdit} id={editId} />
        )}


        <div>
          <div className="w-[100%] inline-block rounded-lg border shadow-2xl">
            <table className="w-[100%] overflow-x-auto">
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
              <tbody>
                <tr>
                  <td className="text-center text-lg font-medium text-lightGreey">
                    5001
                  </td>
                  <td className="text-center text-lg font-medium text-lightGreey">
                    Алекс
                  </td>
                  <td className="text-center text-lg font-medium text-lightGreey">
                    Брюссель
                  </td>
                  <td className="text-center text-lg font-medium text-lightGreey">
                    4321
                  </td>
                  <td className="text-center text-lg font-medium text-lightGreey">
                    Великобритания
                  </td>
                  <td className="text-center text-lg font-medium text-lightGreey">
                    892984989
                  </td>
                  <td className="text-center text-lg font-medium text-lightGreey">
                    Текст
                  </td>
                  <td className="text-center align-middle">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 cursor-pointer" onClick={() => handleEdit(1)}>
                        <img
                          src={"/edit.svg"}
                          width={20}
                          height={20}
                          alt={"edit"}
                        />
                      </div>
                      <div className="cursor-pointer" onClick={() => handleRemove(1)}>

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
          <div className="mt-8 mb-32 flex justify-end">
            <Pagination count={10} variant="outlined" shape="rounded" />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddBlog;
