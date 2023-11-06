
interface IFormaRedondaProps{
    children:any
}
export function FormaRedonda({children}:IFormaRedondaProps){
    return(
        <div 
        className="h-10 w-10 bg-blue-200 rounded-full flex flex-shrink-0 justify-center items-center text-blue-500 text-2xl font-mono">{children}</div>
    )
 
}