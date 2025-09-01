import styles from "../App.module.scss";

interface InfoFormProps {
    titleOne?: string;
    titleTwo?: string;
}

export function InfoForm({ titleOne, titleTwo }: InfoFormProps) {
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