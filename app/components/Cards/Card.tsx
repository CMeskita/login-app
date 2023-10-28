

interface ICardProps{
    children:any
   
}
export function Card({children}:ICardProps){
    return(
        <div className=" bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
{children}
</div>
    )
}