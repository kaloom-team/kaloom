import styles from "./ContentFormLogin.module.scss";
import LoginInput from "../SignInput/SignInput";
import SignButton from "../SignButton/SignButton";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useGoogleLogin } from "@react-oauth/google";

export default function ContentFormLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const port = "7020";
    const url = `https://localhost:${port}/api/Usuario`;

    const googleLogin = useGoogleLogin({
        flow: "auth-code",
        redirect_uri: "http://localhost:5173",
        onSuccess: async (response) => {
            await Swal.fire({
                title: "Verificando...",
                icon: "info",
                didOpen: async () => {
                    Swal.showLoading();
                    setTimeout(async () => {
                        try {
                            const res = await axios.post(`${url}/LoginGoogle`, {
                                Code: response.code,
                            });
        
                            console.log("Login Google OK:", res.data);

                            await Swal.fire({
                                title: "Login realizado com sucesso!",
                                html: "Você será redirecionado para a Home.",
                                icon: "success",
                                timer: 3000,
                                timerProgressBar: true,
                                showConfirmButton: false,
                            });

                            window.location.assign("http://localhost:5173/");
                        } catch (err) {
                            console.error(err);
                            Swal.fire("Erro", "Falha ao autenticar com Google", "error");
                        }


                    }, 2000)
                }
            });
        },
        onError: () => {
            Swal.fire("Erro", "Falha ao tentar login com Google", "error");
        },
    });


    const loginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const userLogin = {
            email,
            senha,
        };

        function errorAlert(html: string) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                html: html,
                footer: '<a href="#">Por que estou tendo esse problema?</a>',
            });
        }

        await Swal.fire({
            title: "Verificando...",
            icon: "info",
            // timer: 2000,
            didOpen: async () => {
                Swal.showLoading();
                setTimeout(async () => {
                    try {
                        const response = await axios.post(`${url}/Login`, userLogin);
                        console.log("Login realizado com sucesso: ", response.data);
                        window.location.assign("http://localhost:5173/")
                    } catch (err: any) {
                        console.error(err);
                        if (email == "" || senha == "") { 
                            await errorAlert(
                                "Erro ao realizar o login :( <br /> Preencha os campos vazios."
                            );
                        } else if (err.response?.status == 401) {
                            await errorAlert(
                                `Erro ao realizar o login :( <br /> ${err.response?.data?.errors[0]}`
                            );
                        } else {
                            await errorAlert(
                                "Erro ao realizar o login :( <br /> Tente novamente mais tarde." + err.response?.message
                            );
                        }
                    }
                }, 2000)
            },
        });
    };

    return (
        <div className={styles.contentLogin}>
            <form action="" className={styles.form} onSubmit={loginSubmit}>
                <h3 className={styles.h3}>login</h3>
                <LoginInput
                    type={"email"}
                    placeholder={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <LoginInput
                    type={"password"}
                    placeholder={"senha"}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <SignButton
                    textButton="Entrar"
                    type="submit"
                    styleButton={styles.signInButton}
                    styleText={styles.textEntrar}
                />
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <hr className={styles.dividerAuth} />
                    <div style={{ marginLeft: 13, marginRight: 13 }}>
                        <p
                            style={{
                                fontFamily: "Sen",
                                fontSize: 20,
                                color: "white",
                            }}
                        >
                            ou entrar com
                        </p>
                    </div>
                    <hr className={styles.dividerAuth} />
                </div>
                <div className="flex flex-row gap-[2rem]">
                    <SignButton
                        img="/google-auth.svg"
                        textButton="Google"
                        styleButton={styles.authButton}
                        styleText={styles.textRede}
                        onClick={() => googleLogin()}
                    />
                    <SignButton
                        img="/github-auth.svg"
                        textButton="GitHub"
                        styleButton={styles.authButton}
                        styleText={styles.textRede}
                    />
                </div>
                <a className={styles.forgot} href="#">
                    Esqueci minha senha.
                </a>
            </form>
        </div>
    );
}
