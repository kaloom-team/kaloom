import styles from "../App.module.scss";
import { LoginInput } from "./LoginInput";

export function ContentFormLogin() {
    return (
        <div className={styles.contentLogin}>
            <form action="" className={styles.form}>
                <h3 className={styles.h3}>login</h3>
                <LoginInput type={"email"} placeholder={"email"}/>
                <LoginInput type={"password"} placeholder={"senha"}/>
                <a className={styles.forgot} href="#">
                    Esqueci minha senha.
                </a>
            </form>
        </div>
    )
}