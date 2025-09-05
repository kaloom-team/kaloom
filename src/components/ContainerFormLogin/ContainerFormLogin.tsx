import styles from "./ContainerFormLogin.module.scss";
import ContentFormLogin from "../ContentFormLogin/ContentFormLogin";

export default function ContainerFormLogin() {
    return (
        <div className={styles.containerLogin}>
            <ContentFormLogin />
            <hr className={styles.divider} />
            <p className={styles.linkCadastro}>
                Não tem uma conta?
                <a className={styles.linkao} href="#"> Cadastre-se</a>
            </p>
        </div>
    )
}