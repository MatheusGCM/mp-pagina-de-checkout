import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Info } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const schema = z.object({
  cpf: z
    .string({
      required_error: 'CPF é obrigatório',
    })
    .min(1, 'CPF é obrigatório'),
  fullname: z
    .string({
      required_error: 'Nome completo é obrigatório',
    })
    .min(1, 'Nome completo é obrigatório'),
})

type FormData = z.infer<typeof schema>
export function BankSlip() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: FormData) {
    toast.success('Boleto gerado com sucesso')
  }
  return (
    <form className="space-y-4 w-[500px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center gap-3 text-red-300 border border-red-300 p-2 rounded-xs">
        <Info className="size-4 text-white" fill="#FCA5A5" />
        <span className="w-[455px] text-red-400 font-medium text-xs">
          O boleto bancário vence em 3 dias úteis. Após o pagamento, a
          compensação pode levar até 3 dias úteis.
        </span>
      </div>

      <div>
        <Input label="CPF" placeholder="000.000.000-00" {...register('cpf')} />
        {errors.cpf && (
          <p className="text-xs text-red-500 mt-1">{errors.cpf.message}</p>
        )}
      </div>

      <div>
        <Input
          label="Nome Completo"
          placeholder="Nome Completo do pagador"
          {...register('fullname')}
        />
        {errors.fullname && (
          <p className="text-xs text-red-500 mt-1">{errors.fullname.message}</p>
        )}
      </div>

      <Button className="w-full" type="submit">
        Gerar Boleto (R$299,90)
      </Button>
    </form>
  )
}
