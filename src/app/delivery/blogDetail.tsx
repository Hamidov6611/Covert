import RootLayout from "../../components/layouts/RootLayout";

const BlogDetail = () => {
  return (
    <RootLayout title="Подробности блога">
      <div className=" w-[96%] sm:w-[90%] mx-auto pb-8">
        <div className="relative w-[100%] h-[200px] sm:h-[658px] my-2 sm:my-6 ">
          <img
            src={"/Blog2.svg"}
            alt={"blog1"}
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>
        <p className="w-[100%] md:w-[70%] font-semibold md:font-bold text-[16px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[55px] text-[#2F2E40]">
          Пять способов снизить транспортные расходы
        </p>
        <p className="font-medium text-[15px] sm:text-[19px] md:text-[23px] text-lightGreey">
          Грузоперевозки - важнейший аспект многих предприятий; фактически,
          стоимость транспортировки может сильно сказаться на прибыльности
          компании. К счастью, существует множество стратегий, которые могут
          помочь снизить транспортные расходы, тем самым повысив прибыльность и
          конкурентоспособность компании. В этой статье мы рассмотрим пять
          способов снижения транспортных расходов.
        </p>
      </div>
      <div className=" w-[96%] sm:w-[90%] mx-auto pb-8">
        <div className="relative w-[100%] h-[200px] sm:h-[779px] my-2 sm:my-6 ">
          <img
            src={"/track1.svg"}
            alt={"blog1"}
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>
        <p className="w-[100%] md:w-[70%] font-semibold md:font-bold text-[16px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[55px] text-[#2F2E40]">
          Внедрение передовых технологий
        </p>
        <p className="font-medium text-[15px] sm:text-[19px] md:text-[23px] text-lightGreey">
          Внедрение передовых технологий также может помочь снизить транспортные
          расходы. Установка устройств GPS, например, может помочь перевозчикам
          контролировать транспортные средства и выявлять недостатки. Кроме
          того, перевозчики могут использовать передовые коммуникационные
          технологии для улучшения коммуникации между водителями и
          логистическими операторами, тем самым повышая эффективность
          транспортных операций. СUK2EU эта технология используется в полной
          мере, а с UK2EU у вас есть возможность в полной мере воспользоваться
          преимуществами обмена перевозками. Необходим для поиска грузов и
          партнеров и заключения сделок менее чем за минуту прямо со своего
          телефона.
        </p>
      </div>
    </RootLayout>
  );
};

export default BlogDetail;
