import styles from "../ContentFormLogin/ContentFormLogin.module.scss";
import RegisterInput from "../SignInput/SignInput";
import AcademicSelector from "../AcademicSelector/AcademicSelector";
import SignButton from "../SignButton/SignButton";

export default function ContentFormRegister() {
    let name_radio_1 = "";

    for(let i = 0; i<10; i++){
        name_radio_1 += String.fromCodePoint(Math.floor(Math.random()*26)+97)
    }
    
    return (
        <div className={styles.contentLogin}>
            <form className={styles.form}>
                <h3 className={styles.h3}>cadastro</h3>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "2rem",
                    }}
                >
                    <RegisterInput type={"text"} placeholder={"nome"} />
                    <RegisterInput type={"text"} placeholder={"sobrenome"} />
                </div>
                <RegisterInput type={"text"} placeholder={"@username"} />
                <RegisterInput type={"email"} placeholder={"email"} />
                <RegisterInput type={"password"} placeholder={"senha"} />
                <div className="flex flex-col gap-[10px]">
                    <p
                        style={{
                            fontFamily: "Sen",
                            opacity: "50%",
                            color: "white",
                        }}
                    >
                        Selecione qual instituição estuda/estudou
                    </p>

                    <div className="flex flex-col gap-[0.1875rem]">
                        <AcademicSelector
                            institution="Etec"
                            name="name_radio_1"
                        />
                        <AcademicSelector
                            institution="Fatec"
                            name="name_radio_2"
                        />
                    </div>
                </div>

                <SignButton
                    textButton="Cadastrar"
                    styleButton={styles.signInButton}
                    styleText={styles.textEntrar}
                />
            </form>
        </div>
    );
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