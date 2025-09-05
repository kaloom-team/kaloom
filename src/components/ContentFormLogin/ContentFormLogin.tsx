import styles from "./ContentFormLogin.module.scss";
import LoginInput from "../LoginInput/LoginInput";
import SignButton from "../SignButton/SignButton";

export default function ContentFormLogin() {
    return (
        <div className={styles.contentLogin}>
            <form action="" className={styles.form}>
                <h3 className={styles.h3}>login</h3>
                <LoginInput type={"email"} placeholder={"email"}/>
                <LoginInput type={"password"} placeholder={"senha"} />
                <SignButton textButton="Entrar" styleButton={styles.signInButton} styleText={styles.textEntrar} />
                <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <hr className={styles.dividerAuth} />
                    <div style={{marginLeft: 13, marginRight: 13 }}>
                        <p style={{fontFamily: "Sen", fontSize: 20, color: "white"}}>ou entrar com</p>
                    </div>
                    <hr className={styles.dividerAuth} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: 32 }}>
                    <SignButton img="/google-auth.svg" textButton="Google" styleButton={styles.authButton} styleText={styles.textRede} />
                    <SignButton img="/github-auth.svg" textButton="GitHub" styleButton={styles.authButton} styleText={styles.textRede} />
                </div>
                <a className={styles.forgot} href="#">
                    Esqueci minha senha.
                </a>
            </form>
        </div>
    )
}