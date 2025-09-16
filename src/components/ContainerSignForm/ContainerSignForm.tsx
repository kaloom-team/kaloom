import styles from "./ContainerSignForm.module.scss";
import ContentFormLogin from "../ContentFormLogin/ContentFormLogin";
import ContentFormRegister from "../ContentFormRegister/ContentFormRegister";
import type { TLinkMessage } from "../../utils/LinkMessage";

interface IContainerSignFormProps{
    typeForm: 'login' | 'register';
}

export default function ContainerSignForm({ linkMessage }: TLinkMessage, { typeForm }: IContainerSignFormProps) {
    return (
        <div className={styles.containerLogin}>
            {typeForm == 'login' ? <ContentFormLogin /> : <ContentFormRegister />}
            <hr className={styles.divider} />
            <p className={styles.linkCadastro}>
                {linkMessage.message}
                <a className={styles.linkao} href={linkMessage.link}>
                    {" " + linkMessage.actionMessage}
                </a>
            </p>
        </div>
    );
}