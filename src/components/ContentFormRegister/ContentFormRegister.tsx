import { useState } from "react";
import axios from "axios";
import styles from "../ContentFormLogin/ContentFormLogin.module.scss";
import RegisterInput from "../SignInput/SignInput";
import AcademicSelector from "../AcademicSelector/AcademicSelector";
import SignButton from "../SignButton/SignButton";

interface ITipoAluno {
    etec: number;
    fatec: number;
    situacao: number | null;
}

export default function ContentFormRegister() {
    let name_radio_1 = "";

    for (let i = 0; i < 10; i++) {
        name_radio_1 += String.fromCodePoint(
            Math.floor(Math.random() * 26) + 97
        );
    }

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipoAluno, setTipoAluno] = useState<ITipoAluno>({
        etec: 0,
        fatec: 0,
        situacao: null,
    });


    const submit = async (e: React.FormEvent) => {
        try {
            const url: string = "http://localhost:7020/api";

            e.preventDefault();

            const TipoAluno = {
                fatec: tipoAluno.fatec,
                etec: tipoAluno.etec,
                situacaoAcademica: tipoAluno.situacao,
            };

            const tipoAlunoResponse = await axios.post(
                `${url}/TipoAluno`,
                TipoAluno
            );

            const idTipoAluno = tipoAlunoResponse.data.id;
            console.log("TipoAluno cadastrado com Id: ", idTipoAluno);

            const Usuario = {
                email,
                senha,
            };

            const usuarioResponse = await axios.post(
                `${url}/Usuario`,
                Usuario
            );

            const idUsuario = usuarioResponse.data.id;
            console.log("Usuário cadastrado com Id: ", idUsuario);

            const Aluno = {
                nome,
                sobrenome,
                username,
                nomeUsuario: username,
                idUsuario: idUsuario,
                idTipoAluno: idTipoAluno,
            };

            const alunoResponse = await axios.post(
                `${url}/Aluno`,
                Aluno
            );
            console.log("Cadastro realizado com sucesso: ", alunoResponse.data);

            window.location.href = "http://localhost:5173/login";
        } catch (error) {
            console.error("Erro ao cadastrar: ", error);
            window.alert("Erro no cadastro!");
        }
    };

    return (
        <div className={styles.contentLogin}>
            <form className={styles.form} onSubmit={submit}>
                <h3 className={styles.h3}>cadastro</h3>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "2rem",
                    }}
                >
                    <RegisterInput
                        type={"text"}
                        placeholder={"nome"}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <RegisterInput
                        type={"text"}
                        placeholder={"sobrenome"}
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                    />
                </div>
                <RegisterInput
                    type={"text"}
                    placeholder={"@username"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <RegisterInput
                    type={"email"}
                    placeholder={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <RegisterInput
                    type={"password"}
                    placeholder={"senha"}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
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
                            institutionName="Etec"
                            radioName="name_radio_1"
                            onSelectChange={(data) =>
                                setTipoAluno((prev) => ({ ...prev, ...data }))
                            }
                        />
                        <AcademicSelector
                            institutionName="Fatec"
                            radioName="name_radio_2"
                            onSelectChange={(data) =>
                                setTipoAluno((prev) => ({ ...prev, ...data }))
                            }
                        />
                    </div>
                </div>

                <SignButton
                    textButton="Cadastrar"
                    styleButton={styles.signInButton}
                    styleText={styles.textEntrar}
                    type="submit"
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
