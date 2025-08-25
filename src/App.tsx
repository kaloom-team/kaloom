import styles from "./App.module.scss";

export function App() {
    return (
        <main className={styles.main}>
            <div className={styles.contentWelcome}>
                <div className={styles.title}>
                    <h1 className={styles.kaloomTitle}>kaloom</h1>
                </div>
                <h2 className={styles.subtitle}>
                    Olá
                    <strong>
                        <span>,</span> <br />
                        bem-vindo<span>!</span>
                    </strong>
                </h2>
                <p className={styles.paragrafo}>
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    ipsum dolor sit amet lorem ipsum dolor sit amet.
                </p>
            </div>

            <div className={styles.containerLogin}>
                <div className={styles.contentLogin}>
                    <form action="" className={styles.form}>
                        <h3 className={styles.h3}>login</h3>
                        <input
                            className={styles.input}
                            type="email"
                            name=""
                            id=""
                            placeholder="email"
                        />
                        <input
                            className={styles.input}
                            type="password"
                            name=""
                            id=""
                            placeholder="senha"
                        />
                        <a className={styles.a} href="#">
                            Esqueci minha senha.
                        </a>
                    </form>
                </div>
                <hr className={styles.divider} />
                <p className={styles.linkCadastro}>
                    Não tem uma conta?
                    <b>
                        <a href="#"> Cadastre-se</a>
                    </b>
                </p>
            </div>
        </main>
    );
}
