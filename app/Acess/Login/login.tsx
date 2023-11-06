import { loginUser } from "@/app/api/loginUser";
import { Button } from "@/app/components/Buttons/Button";
import { Card } from "@/app/components/Cards/Card";

import { Input } from "@/app/components/Inputs/Input";
import {InputCheckbox} from "@/app/components/Inputs/InputCheckbox";
import { FormaRedonda } from "@/app/components/Shapes/FormaRedonda";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { boolean, z } from "zod";

//validando campos
const LoginSchema=z.object({
   email:z.string().email('Formato do email inválido'),
   password:z.string().min(6,'Senha precisa de no minímo 6 caracteres')
    })
//tipando o objeto de validação
type LoginFormData=z.infer<typeof LoginSchema>
    
    
export function Login(){
    //criando constantes de validação
    const signUpForm = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
      })
    
      const {
        handleSubmit,
        formState: { errors },
        reset,
        register,
      } = signUpForm

    const [output, SetOutput]=useState('')
//criando função para receber os dados

 async function acessLogin(data:LoginFormData )
 { 
   
    debugger;
    try {

           console.log(data)
            await loginUser({
            
                email:data.email,
                password:data.password,  
                              
            })
            console.log(data)
            //window.history.go(-2);
            reset()
            SetOutput(JSON.stringify("Logado com sucesso!!!",null,2))
        
    } catch (error) {}    
 }
    return(
         
    <div className='text-center ite sm:text-left min-[320px]:text-center max-[600px]:bg-sky-300'>     
        <div className='max-w-sm mx-auto m-10'>
           <Card>
            <form onSubmit={handleSubmit(acessLogin)} className="space-y-6">
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
                            <div className="flex items-start">
                                <div className="flex items-start">
                                   
                                    </div>
                                    <a href="/Acess/forgout" className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Esqueceu a Senha?</a>
                                </div>
                               <Button>{'Acessar'}</Button>
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