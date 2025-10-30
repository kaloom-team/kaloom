import { useState } from "react";
import axios from "axios";
import styles from "../ContentFormLogin/ContentFormLogin.module.scss";
import RegisterInput from "../SignInput/SignInput";
import AcademicSelector from "../AcademicSelector/AcademicSelector";
import SignButton from "../SignButton/SignButton";
import Swal from "sweetalert2";

interface ITipoAluno {
    etec: boolean;
    fatec: boolean;
    statusEtec: 1 | 2;
    statusFatec: 1 | 2;
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
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipoAluno, setTipoAluno] = useState<ITipoAluno>({
        etec: false,
        fatec: false,
        statusEtec: 1,
        statusFatec: 1
    });


    const submit = async (e: React.FormEvent) => {
        try {
            const url: string = "https://localhost:7020/api";

            e.preventDefault();

            const TipoAluno = {
                fatec: tipoAluno.fatec,
                etec: tipoAluno.etec,
                statusEtec: tipoAluno.statusEtec,
                statusFatec: tipoAluno.statusFatec,
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
                nomeUsuario: username,
                dataNascimento,
                idUsuario,
                idTipoAluno,
            };

            const alunoResponse = await axios.post(
                `${url}/Aluno`,
                Aluno
            );
            console.log("Cadastro realizado com sucesso: ", alunoResponse.data);

            await Swal.fire({
                title: "Cadastrado com sucesso!",
                text: "Você será redirecionado para a tela de login.",
                icon: "success",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff",
                backdrop: `
                    rgba(91, 11, 143, 0.7)
                    url("/nyan-cat.gif")
                    left top
                    no-repeat
                `,
            });

            window.location.href = "http://localhost:5173/login";
        } catch (error) {
            console.error("Erro ao cadastrar: ", error);
            
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Erro ao realizar o cadastro :(",
                footer: '<a href="#">Por que estou tendo esse problema?</a>',
            });
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
                <div className="flex gap-[2rem] w-[100%]">
                    <RegisterInput
                        type={"text"}
                        placeholder={"@username"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <RegisterInput
                        type={"date"}
                        placeholder={"nascimento"}
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                    />
                </div>
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
