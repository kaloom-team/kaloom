import styles from '../App.module.scss';
import { InfoForm } from './InforForm';
import { ContainerFormLogin } from './ContainerFormLogin';

export function SignInfo(){
    return(
        <main className={styles.main}>
            <div className={styles.contentWelcome}>
                <div className={styles.title}>
                    <h1 className={styles.kaloomTitle}>kaloom</h1>
                </div>
                <InfoForm titleOne="Olá" titleTwo="bem-vindo"/>
                <p className={styles.paragrafo}>
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    ipsum dolor sit amet lorem ipsum dolor sit amet.
                </p>
            </div>
            <ContainerFormLogin />
            
        </main>
    )
}