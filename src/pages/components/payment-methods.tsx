import { CircleDollarSign, CreditCard, QrCode } from 'lucide-react'

interface PaymentMethodProps {
  methodSelected: number
  onSelect: (method: number) => void
}

export function PaymentMethods({
  methodSelected = 1,
  onSelect,
}: PaymentMethodProps) {
  const paymentMethods = [
    {
      id: 1,
      name: 'Cartão de crédito',
      icon: <CreditCard className="size-4 text-white" fill="black" />,
    },
    {
      id: 2,
      name: 'Boleto',
      icon: <CircleDollarSign className="size-4 text-white" fill="black" />,
    },
    { id: 3, name: 'Pix', icon: <QrCode className="size-4" /> },
  ]

  return (
    <div className="flex gap-1.5 justify-between bg-gray-100 rounded-sm py-1">
      {paymentMethods.map(methods => (
        <button
          key={String(methods.id)}
          type="button"
          onClick={() => onSelect(methods.id)}
          className={`flex flex-1 items-center gap-1 px-3 py-1 cursor-pointer rounded-sm duration-200 ${methodSelected === methods.id ? 'bg-white' : 'bg-transparent'}`}
        >
          {methods.icon}
          <span className="font-medium text-xs">{methods.name}</span>
        </button>
      ))}
    </div>
  )
}
