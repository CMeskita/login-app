"use client"
import { Login } from "@/app/Login/login";
import { Button } from "@/app/components/Buttons/Button";
import { Card } from "@/app/components/Cards/Card";
import { FormaRedonda } from "@/app/components/Formas/FormaRedonda";
import { Input } from "@/app/components/Inputs/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createUser } from '@/app/api/createUser'

//validando campos
const accountLoginSchema=z.object({
    email:z.string().email('Formato do email inválido'),
    password:z.string().min(6,'Senha precisa de no minímo 6 caracteres'),
    confirm:z.string()
     })
 //tipando o objeto de validação
 type accountFormData=z.infer<typeof accountLoginSchema>

export default function Account(){

    const [output, SetOutput]=useState('')
    const {register,handleSubmit,formState:{errors}}=useForm<accountFormData>({
          resolver:zodResolver(accountLoginSchema)})

async function accountLogin(data:accountFormData )
    { 
  
       
        try {

            if(data.password == data.confirm)
            {
                await createUser({
                    email:data.email,
                    password:data.password,
                 
                })
                console.log(data)
                window.history.go(-2);
               
            }else{
                SetOutput(JSON.stringify("Senhas Não conferem",null,2))
            }
        } catch (error) {
            
            
        }
        
       }


    return(

        <div className='text-center ite sm:text-left min-[320px]:text-center max-[600px]:bg-sky-300'>     
        <div className='max-w-sm mx-auto m-10'>
           <Card>
            <form onSubmit={handleSubmit(accountLogin)} className="space-y-6">
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
                    <div>
                        <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Sua Senha</label>                            
                            <Input.Field 
                        id='password'
                        type='password'
                        placeholder="**********"
                        {...register('password')}
                        />
                         {errors.password && <span>{errors.password.message}</span>}

                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Confimrar Senha</label>                            
                            <Input.Field 
                        id='confirm'
                        type='password'
                        placeholder="Confirme"
                        {...register('confirm')}
                        />
                         {errors.confirm && <span>{errors.confirm.message}</span>}

                    </div>
                            <div className="flex items-start">
                             
                               <Button>{'Acessar'}</Button>
                
                             </div>
                </form>
                </Card>
                <pre className=' text-black'>{output}</pre>
             </div>
       
        </div>
    )
}