import { ShoppingBag } from 'lucide-react'

export function OrderSummary() {
  const paymentMethods = ['Visa', 'Mastercard', 'Elo', 'Boleto', 'Pix']
  return (
    <div className="w-[271px] space-y-3">
      <div>
        <h1 className="font-bold text-base">Resumo do Pedido</h1>
        <p className="text-gray-500 text-xs">Detalhes da sua compra</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex justify-center items-center bg-gray-100 px-6 py-3">
          <ShoppingBag className="text-gray-500" />
        </div>
        <div className="w-[64px]">
          <p className="font-semibold text-base">Produto Premium</p>
          <p className="font-medium text-[10px] text-gray-400">Quantidade: 1</p>
        </div>
        <p className="font-semibold text-base">R$279,90</p>
      </div>

      <div className="w-full h-px bg-gray-200" />

      <div className="space-y-2.5">
        <div className="flex justify-between">
          <span className="font-medium text-xs text-gray-400">Subtotal</span>
          <span className="font-medium text-xs text-black">R$279,90</span>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-xs text-gray-400">Frete</p>
          <p className="font-medium text-xs text-black">R$9,90</p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-xs text-gray-400">Desconto</p>
          <p className="font-medium text-xs text-green-700">R$9,90</p>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200" />

      <div className="flex justify-between">
        <p className="font-semibold text-base text-black">Total</p>
        <p className="font-semibold text-base text-black">R$279,90</p>
      </div>
      <div className="space-y-1.5">
        <p className="font-medium text-[10px] text-gray-400">
          * Frete calculado para CEP: 01000-000
        </p>
        <p className="font-medium text-[10px] text-gray-400">
          * Entrega estimada: 3-5 dias úteis
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="font-semibold text-black text-sm">
          Métodos de pagamento aceitos:
        </h2>
        <div className="flex gap-2.5">
          {paymentMethods.map((methods, index) => (
            <div
              key={String(index)}
              className="bg-gray-100 p-1.5 font-medium text-xs rounded-xs"
            >
              {methods}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
