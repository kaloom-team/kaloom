import styles from "./ContainerSignForm.module.scss";
import ContentFormLogin from "../ContentFormLogin/ContentFormLogin";

interface ILinkMessage {
    message: string;
    actionMessage: string;
    link?: string;
}

export default function ContainerSignForm({ message, actionMessage, link }: ILinkMessage) {
    return (
        <div className={styles.containerLogin}>
            <ContentFormLogin />
            <hr className={styles.divider} />
            <p className={styles.linkCadastro}>
                {message}
                <a className={styles.linkao} href={link}>
                    {" " + actionMessage}
                </a>
            </p>
        </div>
    );
}