import { Button } from "@mui/material";

interface addService {
  setRemove: (value: boolean) => void;
  id: number
}

export default function AdminDelServiceModal({ setRemove }: addService) {
  return (
    <div
      className="w-[100%] fixed h-[100vh] top-0 left-0 flex justify-center items-center bg-modalBg cursor-pointer"
      onClick={() => setRemove(false)}
    >
      <div className="bg-white z-30 h-[15vh] w-[50%] p-8 rounded-lg border shadow-xl cursor-auto"
      onClick={(e) => e.stopPropagation()}
      >
        <p className="text-lightGreey flex w-[100%] justify-center mb-4 md:font-semibold md:text-[28px]">
          Добавить Услуги
        </p>
        <div className="flex justify-between w-full">
            <Button sx={{background:"red", color:"white"}} variant="contained" onClick={() => setRemove(false)}>Clear</Button>
            <Button sx={{background:"green", color:"white"}} variant="contained">Remove</Button>
        </div>
      </div>
    </div>
  );
}
