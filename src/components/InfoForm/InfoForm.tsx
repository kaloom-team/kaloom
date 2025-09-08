import styles from "./InfoForm.module.scss";

interface IInfoForm {
    titleOne: string;
    titleTwo: string;
}

export default function InfoForm({ titleOne, titleTwo }: IInfoForm) {
    return (
        <h2 className={styles.subtitle}>
            {titleOne}
            <strong>
                <br />
                {titleTwo}
                <span>!</span>
            </strong>
        </h2>
    );
}