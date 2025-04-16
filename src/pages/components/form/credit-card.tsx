import { Lock } from 'lucide-react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const schema = z.object({
  cardNumber: z
    .string({
      required_error: 'Número do cartão é obrigatório',
    })
    .min(1, 'Número do cartão é obrigatório'),
  cardName: z
    .string({
      required_error: 'Nome no cartão é obrigatório',
    })
    .min(1, 'Nome no cartão é obrigatório'),
  cardExpirationDate: z
    .string({
      required_error: 'Data de validade é obrigatória',
    })
    .min(1, 'Data de validade é obrigatória'),
  cardSecurityCode: z
    .string({
      required_error: 'Código de segurança é obrigatório',
    })
    .min(1, 'Código de segurança é obrigatório'),
  installments: z.string({
    required_error: 'Por favor selecione o número de parcelas',
  }),
})

type FormData = z.infer<typeof schema>

export function CreditCard() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: FormData) {
    toast.success('Pagamento realizado com sucesso')
  }
  return (
    <form className="space-y-4 w-[500px]" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label="Número do Cartão"
          placeholder="0000 0000 0000 0000"
          {...register('cardNumber')}
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500 mt-1">
            {errors.cardNumber.message}
          </p>
        )}
      </div>

      <div>
        <Input
          label="Nome no Cartão"
          placeholder="Nome como está no cartão"
          {...register('cardName')}
        />
        {errors.cardName && (
          <p className="text-xs text-red-500 mt-1">{errors.cardName.message}</p>
        )}
      </div>

      <div className="flex gap-3.5">
        <div className="w-full">
          <Input
            label="Validade"
            placeholder="MM/AA"
            {...register('cardExpirationDate')}
          />
          {errors.cardExpirationDate && (
            <p className="text-xs text-red-500 mt-1">
              {errors.cardExpirationDate.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <Input
            label="CVV"
            placeholder="123"
            {...register('cardSecurityCode')}
          />
          {errors.cardSecurityCode && (
            <p className="text-xs text-red-500 mt-1">
              {errors.cardSecurityCode.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="installments"
          className={
            'block text-xs font-medium leading-6 text-foreground dark:text-muted-foreground'
          }
        >
          Parcelas
        </label>
        <Controller
          name="installments"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-full" id="installments">
                <SelectValue placeholder="Parcelas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 x de R$299,90 (sem juros)</SelectItem>
                <SelectItem value="2">2 x de R$299,90 (sem juros)</SelectItem>
                <SelectItem value="3">3 x de R$299,90 (sem juros)</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.installments && (
          <p className="text-xs text-red-500 mt-1">
            {errors.installments.message}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Salvar cartão para compras futuras
        </label>
      </div>

      <div className="flex justify-center items-center text-xs text-gray-400">
        <Lock className="size-3" />
        <span>Seus dados estão protegidos com criptografia SSL</span>
      </div>

      <Button className="w-full" type="submit">
        Finalizar pagamento (R$299,90)
      </Button>
    </form>
  )
}
