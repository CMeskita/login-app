import { Card } from "@/app/components/Cards/Card";
import { Input ,InputType} from "@/app/components/Inputs/Input";
import { FormaRedonda } from "@/app/components/Shapes/FormaRedonda";

export default function Products(){
    return(
        
  
    <div className='text-center ite sm:text-left min-[320px]:text-center max-[600px]:bg-sky-300'>
        <div className='max-w-sm mx-auto m-10'>
        <Card>
        <FormaRedonda>i</FormaRedonda>

        <Input.Field type={InputType.text}
        id=""
        placeholder="Aqui tem!!!" />
        </Card>
        </div>
        </div>
     
  )
}