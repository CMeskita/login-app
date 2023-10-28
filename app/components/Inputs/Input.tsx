import { InputHTMLAttributes, forwardRef } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLDivElement>{

}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(

    function Input({...props}:InputFieldProps,ref){
        //const size='md'
        return(
            <input className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com'
            ref={ref}
            {...props}

            />
        )

    }
)
InputField.displayName = 'Input.Field'
export const Input = {
	Field: InputField,

}
