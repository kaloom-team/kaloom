import { Button } from '../ui/button';
import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <div className='flex items-baseline gap-[2.188rem]'>
            <li className='flex items-baseline gap-[2.188rem]'>
                <a href="#" className={styles.SelectedMenuLink}>Home</a>
                <a href="#" className={styles.MenuLink}>Suporte</a>
                <a href="#" className={styles.MenuLink}>Contato</a>
            </li>

            <div id='buttons' className='flex gap-[0.625rem]'>
                <li className='flex gap-[0.925rem]'>
                    <a href='/Login'>
                        <Button variant="outline" className='rounded-[3.125rem] w-[4.688rem] h-[2.435rem] bg-[#6C27B3] text-white border-none cursor-pointer font-bold'>Login</Button> 
                    </a>
                    
                    <a href='/Register'>
                        <Button variant="outline" className='rounded-[3.125rem] w-[6.125rem] h-[2.435rem] bg-[#6C27B3] text-white border-none cursor-pointer font-bold'>Cadastro</Button>
                    </a>
                </li>
            </div>
        </div>
    )
}