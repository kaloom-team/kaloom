import styles from "../App.module.scss";
import { ContentForm } from "./ContentForm";
export function ContainerForm() {
    return (
        <div className={styles.containerLogin}>
            <ContentForm />
            <hr className={styles.divider} />
            <p className={styles.linkCadastro}>
                Não tem uma conta?
                <b>
                    <a href="#"> Cadastre-se</a>
                </b>
            </p>
        </div>
    )
}