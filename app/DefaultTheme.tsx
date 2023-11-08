import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes'
import { ReactNode } from 'react';


interface IDefaultLayoutProps {
    children: ReactNode | ReactNode[]
  }
export default function DefaultLayout({children}:IDefaultLayoutProps) {
    return(
        <Theme
        accentColor="mint"
        grayColor="gray"
        panelBackground="solid"
        scaling="100%"
        radius="full">
            
        </Theme>
    )
}