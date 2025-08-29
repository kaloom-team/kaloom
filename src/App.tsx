import styles from "./App.module.scss";
import { ContainerForm } from "./components/ContainerForm";

import { Welcome } from "./components/Welcome";

export function App() { 
    return (
        <main className={styles.main}>
            <div className={styles.contentWelcome}>
                <div className={styles.title}>
                    <h1 className={styles.kaloomTitle}>kaloom</h1>
                </div>
                <Welcome titleOne="Olá" titleTwo="bem-vindo"/>
                <p className={styles.paragrafo}>
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    ipsum dolor sit amet lorem ipsum dolor sit amet.
                </p>
            </div>
            <ContainerForm />
            
        </main>
    );
}
