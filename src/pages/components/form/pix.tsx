import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { QrCode, RefreshCcw, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function Pix() {
  const [copied, setCopied] = useState(false)
  const pixCode =
    '00020126580014BR.GOV.BCB.PIX0136a629532e-7693-4846-b028-f142082d7b0752040000530398654041.005802BR5925CODANTE PAGAMENTOS LTDA6008SAO PAULO62070503***6304E2CA'

  const handleCopy = () => {
    navigator.clipboard.writeText(pixCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-5 w-[500px]">
      <div className="flex items-center gap-3 text-green-700 border border-green-700 p-2">
        <QrCode className="size-4" />
        <span className="font-medium text-xs">
          Pagamento instantâneo! Após o pagamento via PIX, a confirmação é
          imediata.
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="border flex justify-center items-center">
          <div className="w-40 h-36 bg-gray-100 flex justify-center items-center m-3">
            <QrCode className="size-24" />
          </div>
        </div>
        <Button variant="outline" type="button">
          <RefreshCcw />
          <span className="font-semibold text-xs">Atualizar QR code</span>
        </Button>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="pixCode"
          className="text-xs font-medium leading-6 text-foreground dark:text-muted-foreground"
        >
          Ou copie e cole o código PIX:
        </label>
        <div className="flex gap-2">
          <Input
            id="pixCode"
            value={pixCode}
            readOnly
            className="font-mono text-xs"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleCopy}
            className="shrink-0"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-gray-400 text-center font-medium text-xs">
          Abra o aplicativo do seu banco, escolha a opção PIX e escaneie o QR
          code ou cole o código acima para realizar o pagamento.
        </p>
      </div>
      <Button
        className="w-full"
        type="button"
        onClick={() => toast.success('Pagamento realizado com sucesso')}
      >
        Finalizar pagamento (R$299,90)
      </Button>
    </div>
  )
}
