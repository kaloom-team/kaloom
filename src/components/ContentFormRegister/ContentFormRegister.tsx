import styles from "../ContentFormLogin/ContentFormLogin.module.scss";
import stylesB from "./ContentFormRegister.module.scss";
import RegisterInput from "../SignInput/SignInput";
import SignButton from "../SignButton/SignButton";

export default function ContentFormRegister() {
    return (
        <div className={styles.contentLogin}>
            <form className={styles.form}>
                <h3 className={styles.h3}>cadastro</h3>
                <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
                    <RegisterInput type={"text"} placeholder={"nome"} />
                    <RegisterInput type={"text"} placeholder={"sobrenome"} />
                </div>
                <RegisterInput type={"text"} placeholder={"@username"} />
                <RegisterInput type={"email"} placeholder={"email"} />
                <RegisterInput type={"password"} placeholder={"senha"} />

                <p style={{alignSelf: "flex-start", fontFamily:"Sen", opacity:"50%", color:"white"}}>Selecione qual instituição estuda/estudou</p>
                <div style={{display: "flex", gap: 10, alignSelf: "flex-start" }}>
                    <SignButton textButton="Etec" styleButton={stylesB.signInButton} styleText={stylesB.textEntrar} typeBtn="checkbox" />
                    <SignButton textButton="Fatec" styleButton={stylesB.signInButton} styleText={stylesB.textEntrar} typeBtn="checkbox" />
                </div>
                <SignButton textButton="Cadastrar" styleButton={styles.signInButton} styleText={styles.textEntrar} typeBtn="button" />
            </form>
        </div>
    )
}