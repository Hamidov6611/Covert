import DehazeIcon from '@mui/icons-material/Dehaze';
import { IconButton } from '@mui/material';

const AdminHeader = () => {
 
  return (
    <div className='h-[100px] bg-Primary flex flex-row items-center z-40'>
      <div className='w-[100%] flex flex-row justify-between'>
        <div className='ml-8'>
          <IconButton>
            <DehazeIcon sx={{color:"white"}} fontSize='medium' />
          </IconButton>
        </div>
        <div className='flex items-center mr-8'>
          <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
            <p className='text-Primary font-semibold text-[18px]'>A</p>
          </div>
          <div className='flex ml-6'>
            <p className='font-bold text-lg text-white mr-4 font-montserrat'>Админ</p>
            <img src="./Vector.svg" alt="vector" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader