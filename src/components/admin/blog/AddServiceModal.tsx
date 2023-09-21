import AddServiseTabs from "./AddTabs";

interface addService {
  setOpen: (value: boolean) => void;
}

export default function AdminAddServiceModal({ setOpen }: addService) {
  return (
    <div
      className="w-[100%] fixed h-[100vh] top-0 left-0 flex justify-center items-center bg-modalBg cursor-pointer"
      onClick={() => setOpen(false)}
    >
      <div className="bg-white z-30 h-[65vh] w-[50%] p-8 rounded-lg border shadow-xl cursor-auto"
      onClick={(e) => e.stopPropagation()}
      >
        <AddServiseTabs setOpen={setOpen}/>
      </div>
    </div>
  );
}
