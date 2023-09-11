import RatesTable from "../../components/admin/RatesTable";
import AdminLayout from "../../components/layouts/AdminLayout";

const Rates = () => {
  return (
    <AdminLayout>
      <div className="p-6 mb-20">
        <p className="text-[18px] sm:text-[20px] md:text-[32px] lg:text-[45px] text-lightGreey font-semibold">
          Тарифы на перевозку грузов
        </p>
        <div className="my-8">
          <RatesTable />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Rates;
