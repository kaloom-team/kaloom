import styles from "./ContentFormRegister.module.scss";
import RegisterInput from "../SignInput/SignInput";
import SignButton from "../SignButton/SignButton";

export default function ContentFormRegister() {
    return (
        <div className={styles.contentLogin}>
            <form action="" className={styles.form}>
                <h3 className={styles.h3}>cadastro</h3>
                <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
                    <RegisterInput type={"text"} placeholder={"nome"} />
                    <RegisterInput type={"text"} placeholder={"sobrenome"} />
                </div>
                <RegisterInput type={"text"} placeholder={"@username"} />
                <RegisterInput type={"email"} placeholder={"email"}/>
                <RegisterInput type={"password"} placeholder={"senha"} />
                <SignButton textButton="Cadastrar" styleButton={styles.signInButton} styleText={styles.textEntrar} />
            </form>
        </div>
    )
}