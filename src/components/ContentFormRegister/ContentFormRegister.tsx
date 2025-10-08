import styles from "../ContentFormLogin/ContentFormLogin.module.scss";
import stylesB from "./ContentFormRegister.module.scss";
import RegisterInput from "../SignInput/SignInput";
import SignButton from "../SignButton/SignButton";
import RadioButton from "../RadioButton/RadioButton";

export default function ContentFormRegister() {
     let name_radio_1 = "";
     for(let i = 0; i<10; i++){
         name_radio_1 += String.fromCodePoint(Math.floor(Math.random()*26)+97)
     }
    return (
        <div className={styles.contentLogin}>
            <form className={styles.form}>
                <h3 className={styles.h3}>cadastro</h3>
                <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
                    <RegisterInput type={"text"} placeholder={"nome"} />
                    <RegisterInput type={"text"} placeholder={"sobrenome"} />
                </div>
                <RegisterInput type={"text"} placeholder={"@username"} />
                <RegisterInput type={"text"} placeholder={"email"} />
                <RegisterInput type={"password"} placeholder={"senha"} />

                <p style={{alignSelf: "flex-start", fontFamily:"Sen", opacity:"50%", color:"white"}}>Selecione qual instituição estuda/estudou</p>
                <div style={{display: "flex", flexDirection: "row",gap: 10, alignSelf: "flex-start"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "1.25rem"}}>
                        <SignButton textButton="Etec" styleButton={stylesB.signInButton} styleText={stylesB.textEntrar} typeBtn="checkbox" />
                        <SignButton textButton="Fatec" styleButton={stylesB.signInButton} styleText={stylesB.textEntrar} typeBtn="checkbox" />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: 10}}>
                        <RadioButton title="Cursando" name={name_radio_1}/>
                        <RadioButton title="Formado(a)" name={name_radio_1}/>
                    </div>
                </div>
                <SignButton textButton="Cadastrar" styleButton={styles.signInButton} styleText={styles.textEntrar} typeBtn="button" />
            </form>
        </div>
    )
}
/**
 * element.style {
    appearance: none;
    /* border: 2px solid white; * /
    outline: 2px solid white;
    outline-offset: 2px;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 999rem;
    margin: 0 0.5rem;
    align-self: center;
}
 */