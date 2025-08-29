import styles from "../App.module.scss";

interface WelcomeProps {
    titleOne?: string;
    titleTwo?: string;
}

export function Welcome({ titleOne, titleTwo }: WelcomeProps) {
    return (
        <h2 className={styles.subtitle}>
            {titleOne}
            <strong>
                <span>,</span> <br />
                {titleTwo}<span>!</span>
            </strong>
        </h2>
    )
}