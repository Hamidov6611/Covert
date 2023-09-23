import EditServiseTabs from "./EditService";

interface editService {
    setEdit: (value: boolean) => void;
    id: number,
    getData: () => void
}

export default function AdminEditServiceModal({ setEdit, id, getData }: editService) {
  return (
    <div
      className="w-[100%] fixed h-[100vh] top-0 left-0 flex justify-center items-center bg-modalBg cursor-pointer"
      onClick={() => setEdit(false)}
    >
      <div className="bg-white z-30 h-[65vh] overflow-y-auto w-[50%] p-8 rounded-lg border shadow-xl cursor-auto"
      onClick={(e) => e.stopPropagation()}
      >
        <EditServiseTabs setOpen={setEdit} id={id} getData1={getData}/>
      </div>
    </div>
  );
}
