import '@radix-ui/themes/styles.css';
import { ReactNode } from 'react';


interface IDefaultLayoutProps {
    children: ReactNode | ReactNode[]
  }
export default function DefaultLayout({children}:IDefaultLayoutProps) {
    return(
        <div className='mx-auto m-10'>
            {children}
        </div>
    )
}
interface IDefaultLayoutLoginProps {
    children: ReactNode | ReactNode[]
  }
  export  function DefaultLayoutLogin({children}:IDefaultLayoutLoginProps) {
    return(
        <div className='max-w-sm mx-auto m-10'>
            {children}
        </div>
    )
}


