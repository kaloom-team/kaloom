import { Button } from '../ui/button';
import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <nav className="flex items-baseline gap-[6.875rem]">
            <ul className="flex items-baseline gap-[2.188rem]">
                <li>
                    <a href="#" className={styles.SelectedMenuLink}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.MenuLink}>
                        Quem Somos
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.MenuLink}>
                        Suporte
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.MenuLink}>
                        Contato
                    </a>
                </li>
            </ul>

            <div id="buttons" className="flex gap-[0.625rem]">
                <a href="/login">
                    <Button
                        variant="outline"
                        className="rounded-[3.125rem] w-[4.688rem] h-[2.435rem] bg-[#6C27B3] text-white border-none cursor-pointer font-bold"
                    >
                        Login
                    </Button>
                </a>

                <a href="/register">
                    <Button
                        variant="outline"
                        className="rounded-[3.125rem] w-[6.125rem] h-[2.435rem] bg-[#6C27B3] text-white border-none cursor-pointer font-bold"
                    >
                        Cadastro
                    </Button>
                </a>
            </div>
        </nav>
    );
}