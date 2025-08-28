import styles from "../App.module.scss";

export function Welcome() {
    return (
        <h2 className={styles.subtitle}>
            Olá
            <strong>
                <span>,</span> <br />
                bem-vindo<span>!</span>
            </strong>
        </h2>
    )
}