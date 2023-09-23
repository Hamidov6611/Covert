// import axios from "axios";
import EditServiseTabs from "./EditService";
// import { BASE_URL } from "../../../service/auth";
// import { useEffect } from "react";

interface editService {
    setEdit: (value: boolean) => void;
    id: Number | undefined,
    getData: () => void
}

export default function AdminEditServiceModal({ setEdit, id, getData }: editService) {

  // const getData = async () => {
  //   const {data} = await axios.get(`${BASE_URL}/a_api/admin_panel/service_deteiles_admin_views/${id}/`)
  //   console.log(data)
  // }

  // useEffect(() => {
  //   getData()
  // }, [id])
  
  return (
    <div
      className="w-[100%] fixed h-[100vh] top-0 left-0 flex justify-center items-center bg-modalBg cursor-pointer"
      onClick={() => setEdit(false)}
    >
      <div className="bg-white z-30 h-[65vh] overscroll-y-auto w-[50%] p-8 rounded-lg border shadow-xl cursor-auto"
      onClick={(e) => e.stopPropagation()}
      >
        <EditServiseTabs setOpen={setEdit} id={id} getData1={getData}/>
      </div>
    </div>
  );
}
