import { Stepper } from "../../components/client"
import RootLayout from "../../components/layouts/RootLayout"

const Calculator = () => {
  return (
   <RootLayout title="Калькулятор">
     <div>
        <div className={`w-[90%] mx-auto py-9`}>
          <Stepper />
        </div>
    </div>
   </RootLayout>
  )
}

export default Calculator