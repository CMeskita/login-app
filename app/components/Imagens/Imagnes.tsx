import Image from 'next/image'



interface IImagensProps{
    src:string
    width:number
    height:number
    alt:string
  
  
  }
  
  export default function Imagens(props:IImagensProps) {
    return (
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
      />
      
    )
  }