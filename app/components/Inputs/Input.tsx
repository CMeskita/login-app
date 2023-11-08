import { InputHTMLAttributes, forwardRef } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLDivElement>{
    type:string 
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(

    function Input({type,...props}:InputFieldProps,ref){
        //const size='md'
        return(
            <input className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"'
            type={type}
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
export enum InputType {
    button = "button",
    checkbox = "checkbox",
    color = "color",
    date = "date",
    datetimelocal = "datetime-local",
    email = "email",
    file = "file",
    hidden = "hidden",
    image = "image",
    month = "month",
    number = "number",
    password = "password",
    radio = "radio",
    range = "range",
   reset = "reset",
    search = "search",
    submit = "submit",
    tel = "tel",
    text = "text",
    time = "time",
    url = "url",
    week = "week"}