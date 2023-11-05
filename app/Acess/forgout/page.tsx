"use client"
import { Button } from "@/app/components/Buttons/Button"
import { Card } from "@/app/components/Cards/Card"
import { FormaRedonda } from "@/app/components/Formas/FormaRedonda"
import { Input } from "@/app/components/Inputs/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"


//validando campos
const forgoutLoginSchema=z.object({
    email:z.string().email('Formato do email inválido'),

     })
 //tipando o objeto de validação
 type forgoutFormData=z.infer<typeof forgoutLoginSchema>
export default function Forgout(){
  //criando constantes de validação

  const [output, SetOutput]=useState('')
  const {register,handleSubmit,formState:{errors}}=useForm<forgoutFormData>({
        resolver:zodResolver(forgoutLoginSchema)})


    function forgoutLogin(data:forgoutFormData ){ 
   
            SetOutput(JSON.stringify(data,null,"Enviado "))
    
        
       }


    return(
        <div className='text-center ite sm:text-left min-[320px]:text-center max-[600px]:bg-sky-300'>     
        <div className='max-w-sm mx-auto m-10'>
           <Card>
            <form onSubmit={handleSubmit(forgoutLogin)} className="space-y-6">
                 <div className="flex just items-center space-x-5">
                    <FormaRedonda>i</FormaRedonda>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">Acesso </h3>
                    
                 </div>
                    <div>  
                        <label  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Seu email</label>
                            
                            <Input.Field 
                            id="email"
                            type='email'
                            placeholder="Digite email"
                            {...register('email')}
                            />
                            {errors.email && <span>{errors.email.message}</span>}

                    </div>
             
                            <div className="flex items-start">
                                <div className="flex items-start">
                                   
                                    </div>
                                    <a href="#" className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Esqueceu a Senha?</a>
                                </div>
                               <Button>{'Enviar'}</Button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Deseja se Cadastrar? <a href="/Acess/account" className="text-blue-700 hover:underline dark:text-blue-500">
                                        account</a>
                        </div>
                </form>
                </Card>
                <pre className=' text-black'>{output}</pre>
             </div>
       
        </div>
    )
}