import EditServiseTabs from "./EditService";

interface addService {
    setEdit: (value: boolean) => void;
    id: number
}

export default function AdminEditServiceModal({ setEdit }: addService) {
  return (
    <div
      className="w-[100%] fixed h-[100vh] top-0 left-0 flex justify-center items-center bg-modalBg cursor-pointer"
      onClick={() => setEdit(false)}
    >
      <div className="bg-white z-30 h-[65vh] w-[50%] p-8 rounded-lg border shadow-xl cursor-auto"
      onClick={(e) => e.stopPropagation()}
      >
        <EditServiseTabs setOpen={setEdit}/>
      </div>
    </div>
  );
}
