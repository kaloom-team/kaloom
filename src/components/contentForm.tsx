import styles from "../App.module.scss";

export function ContentForm() {
    return (
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
    )
}