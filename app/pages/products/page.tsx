import DefaultLayout from "@/app/DefaultTheme";
import { Card } from "@/app/components/Cards/Card";
import { Input ,InputType} from "@/app/components/Inputs/Input";
import { FormaRedonda } from "@/app/components/Shapes/FormaRedonda";

export default function Products(){
    return(
        
      <DefaultLayout>
        <div className="grid grid-cols-4 gap-4">
          <div>
        <Card>
        <FormaRedonda>i</FormaRedonda>

        <Input.Field type={InputType.text}
        id=""
        placeholder="Aqui tem!!!" />
        <p>kaldshdlkfjklasjdflkajlkdfjlakjsdf
          skdfjskldfldfklgjsdf
          kjklsjdflksdlkfg
          kskdflsldkfgjskldfgskldfg
          ksfdgsdflkgjsdlkfg
        </p>
        </Card>
        </div>
        <div>
        <Card>
        <FormaRedonda>i</FormaRedonda>

        <Input.Field type={InputType.text}
        id=""
        placeholder="Aqui tem!!!" />
        </Card>
        </div>
        <div>
        <Card>
        <FormaRedonda>i</FormaRedonda>

        <Input.Field type={InputType.text}
        id=""
        placeholder="Aqui tem!!!" />
        </Card>
        </div>
        <div>
        <Card>
        <FormaRedonda>i</FormaRedonda>

        <Input.Field type={InputType.text}
        id=""
        placeholder="Aqui tem!!!" />
        </Card>
        </div>
        <div>
        <Card>
        <FormaRedonda>i</FormaRedonda>

        <Input.Field type={InputType.text}
        id=""
        placeholder="Aqui tem!!!" />
        </Card>
        </div>
        </div>
       </DefaultLayout>
     
  )
}