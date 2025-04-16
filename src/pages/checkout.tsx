import { HeaderCheckout } from './components/header-checkout'
import { CreditCard } from './components/form/credit-card'
import { PaymentMethods } from './components/payment-methods'
import { BankSlip } from './components/form/bank-slip'
import { Pix } from './components/form/pix'
import { OrderSummary } from './components/order-summary'
import { useState } from 'react'

export function Checkout() {
  const [methodSelected, setMethodSelected] = useState(1)
  const paymentComponents = {
    1: <CreditCard />,
    2: <BankSlip />,
    3: <Pix />,
  }

  function handleMethodSelected(methodId: number) {
    setMethodSelected(methodId)
  }
  return (
    <main className="flex gap-5 h-min">
      <section className="bg-white py-7 px-6 rounded-sm space-y-6">
        <HeaderCheckout />
        <PaymentMethods
          methodSelected={methodSelected}
          onSelect={handleMethodSelected}
        />
        {paymentComponents[methodSelected as keyof typeof paymentComponents]}
      </section>
      <section className="bg-white p-6 rounded-sm h-min">
        <OrderSummary />
      </section>
    </main>
  )
}
