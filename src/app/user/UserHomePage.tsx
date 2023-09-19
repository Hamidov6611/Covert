import { useState } from "react";
import UserLayout from "../../components/layouts/UserLayout";
import { Link } from "react-router-dom";
import './user.css'

interface StatusType {
  status1: boolean,
  status2: boolean,
  status3: boolean
}

const UserHomePage = () => {
  const [useBtn, setuseBtn] = useState({ btn1: true, btn2: false });
  const [status, setStatus] = useState(false)
  const [statusGroup, setStatusGroup] = useState<StatusType>({status1: false, status2: false, status3: false})

  const clickHandler = (position: string) => {
    if (position === "left") {
      setuseBtn({ ...useBtn, btn1: true, btn2: false });
    } else {
      setuseBtn({ ...useBtn, btn2: true, btn1: false });
    }
  };

  const statusGroupHandler = (position: 'top' | 'middle' | 'bottom') => {
    switch(position) {
      case 'top':
        setStatusGroup({...statusGroup, status1: !statusGroup.status1})
        break;
      case 'middle':
        setStatusGroup({...statusGroup, status2: !statusGroup.status2})
        break;
      case 'bottom':
        setStatusGroup({...statusGroup, status3: !statusGroup.status3})
        break;
    }
  } 

  const clearStatusGroup = () => setStatusGroup({...statusGroup, status1: false, status2: false, status3: false})

  const statusHandler = () => setStatus(prev => !prev)
  return (
    <UserLayout>
      <div className="ml-[3%] min-h-[60vh] mt-6">
        <p className="font-medium md:font-semibold text-[20px] sm:text-[24px] md:text-[32px] lg:text-[45px] text-lightGreey py-[20px] ">
          Отправления
        </p>
        <div className="flex gap-x-4 mt-8">
          <button
            onClick={() => clickHandler("left")}
            className={`${
              useBtn.btn1
                ? "border-Primary border-2"
                : "border-[#ABAFB6] border-2"
            } font-normal px-8 text-[17px] md:text-[21px] text-lightGreey  p-3 rounded-md `}
          >
            Отправления
          </button>

          <button
            onClick={() => clickHandler("right")}
            className={`${
              useBtn.btn2
                ? "border-Primary border-2"
                : "border-[#ABAFB6] border-2"
            } font-normal px-8 text-[17px] md:text-[21px] text-lightGreey  p-3 rounded-md `}
          >
            История
          </button>
        </div>

        {useBtn.btn1 && (
          <>
            <div className="mt-12 flex gap-x-8 slide-down">
              <img src="/diapazon.svg" alt="" />

              <p className="text-[17px] md:text-[21px] text-lightGreey font-medium">
                Диапозон дат
              </p>
            </div>

            <div className="mt-12 bg-white shadow-2xl rounded-md md:w-[622px] flex flex-col items-center justify-center py-3">
              <p className="mb-2 text-[20px] md:text-[24px] lg:text-[30px] text-lightGreey font-semibold">
                Винтажная мебель
              </p>
              <p className="mb-2 text-[12px] md:text-[14px] lg:text-[16px] text-lightGreey font-normal">
                5 часов назад
              </p>
              <p className="mb-2 text-[14px] md:text-[18px] lg:text-[20px] text-lightGreey font-semibold">
                В процессе
              </p>
              <p className="mb-2 text-[15px] md:text-[19px] lg:text-[21px] text-lightGreey font-semibold">
                Подробности о грузе
              </p>
            </div>

            <div className="my-12 inline-flex py-2 px-6 rounded-lg gap-x-4 border-2 border-Primary ">
              <img src="/add.svg" alt="plus" />
              <p className="text-[15px] md:text-[19px] text-Primary">
                Создать новый запрос
              </p>
            </div>
          </>
        )}

        {useBtn.btn2 && (
          <div className="relative">
            <div className="mt-12 flex gap-x-8 slide-down">
              <img src="/diapazon.svg" alt="" />

              <p className="text-[17px] md:text-[21px] text-lightGreey font-medium">
                Диапозон дат
              </p>

              <button onClick={statusHandler} className="text-[17px] md:text-[21px] text-lightGreey font-medium">
                Статус
              </button>
            </div>

            {
              status && (
                <div className="bg-white slide-down slideUp absolute left-[30%] p-3 rounded-md shadow-xl border top-[-150px]">
              <div onClick={statusHandler} className="flex w-full justify-end cursor-pointer">
                <img src="/clear.svg" alt="" />
              </div>
              <p className="text-lightGreey text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-medium md:font-semibold">Статус</p>

              <div className="flex gap-x-4 items-center mb-4">
                <input 
                checked={statusGroup.status1}
                onClick={() => statusGroupHandler('top')}
                type="checkbox" className="border-lightGreey font-medium text-[14px] md:text-[17px]" />
                <p>Выполненый заказ</p>
              </div>

              <div className="flex gap-x-4 items-center mb-4">
                <input 
                checked={statusGroup.status2}
                onClick={() => statusGroupHandler('middle')}
                type="checkbox" className="border-lightGreey font-medium text-[14px] md:text-[17px]" />
                <p>Отозвано</p>
              </div>

              <div className="flex gap-x-4 items-center mb-4">
                <input 
                checked={statusGroup.status3}
                onClick={() => statusGroupHandler('bottom')}
                type="checkbox" className="border-lightGreey font-medium text-[14px] md:text-[17px]" />
                <p>Срок действия истек</p>
              </div>

              <div className="flex gap-x-4 items-center">
                <p onClick={clearStatusGroup} className="text-[16px] cursor-pointer md:text-[19px] text-lightGreey font-medium md:font-semibold">Очистить</p>
                <button className="text-[16px] font-medium bg-Primary py-2 px-6 text-white rounded-lg">
                  Показать
                </button>
              </div>
            </div>
              )
            }

           

            <div className="mt-12 bg-white shadow-2xl rounded-md md:w-[622px] flex flex-col items-center justify-center py-3">
              <p className="mb-2 text-[20px] md:text-[24px] lg:text-[30px] text-lightGreey font-semibold">
                Офисные бумаги
              </p>
              <p className="mb-2 text-[12px] md:text-[14px] lg:text-[16px] text-lightGreey font-normal">
                5 дней назад
              </p>
              <p className="mb-2 text-[14px] md:text-[18px] lg:text-[20px] text-green-500 font-semibold">
                Выполнено
              </p>
              <div className="flex items-center gap-x-3">
                <p className="mb-2 text-[15px] md:text-[19px] lg:text-[21px] text-lightGreey font-semibold">
                  Подробности о грузе
                </p>
                <Link to={'/user-about'} className="text-[16px] font-medium bg-Primary py-2 px-6 text-white rounded-lg">
                  Показать
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </UserLayout>
  );
};

export default UserHomePage;
