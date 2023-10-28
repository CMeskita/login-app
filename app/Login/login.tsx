import { Button } from "@/app/components/Buttons/Button";
import { Card } from "@/app/components/Cards/Card";
import { FormaRedonda } from "@/app/components/Formas/FormaRedonda";
import { Input } from "@/app/components/Inputs/Input";
import {InputCheckbox} from "@/app/components/Inputs/InputCheckbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

//validando campos
const createLoginSchema=z.object({
   email:z.string().email('Formato do email inválido'),
   password:z.string().min(6,'Senha precisa de no minímo 6 caracteres')
    })
//tipando o objeto de validação
type createLoginFormData=z.infer<typeof createLoginSchema>
    
    
export function Login(){
    //criando constantes de validação

    const [output, SetOutput]=useState('')
    const {register,handleSubmit,formState:{errors}}=useForm<createLoginFormData>({
          resolver:zodResolver(createLoginSchema)})
//criando função para receber os dados
          function acessLogin(data:createLoginFormData ){ 
            if(data.password=='123456' && data.email=='danielle.cmesquita@gmail.com')
            {
            SetOutput(JSON.stringify(data,null, 2))

            }else{
                SetOutput(JSON.stringify(data,null,"Error"))
            }
            
           }

    return(
         
    <body className=''>     
        <div className='max-w-sm mx-auto m-10'>
           <Card>
            <form onSubmit={handleSubmit(acessLogin)} className="space-y-6">
                 <div className="flex items-center space-x-5">
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
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <InputCheckbox />
                                    </div>
                                        <div className="text-sm ml-3">
                                            <label  className="font-medium text-gray-900 dark:text-gray-300">Lembre me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Esqueceu a Senha?</a>
                                </div>
                               <Button>{'Acessar'}</Button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Deseja se Cadastrar? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                                        account</a>
                                </div>
                </form>
                </Card>
                <pre className=' text-black'>{output}</pre>
             </div>
       
        </body>
      
        )   
}