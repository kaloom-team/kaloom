import styles from "./ContainerSignForm.module.scss";
import ContentFormLogin from "../ContentFormLogin/ContentFormLogin";
import ContentFormRegister from "../ContentFormRegister/ContentFormRegister";
import type { TLinkMessage } from "../../utils/LinkMessage";

interface IContainerSignFormProps{
    typeForm: 'login' | 'register';
}

type TProps = {
    linkMessage: TLinkMessage;
    typeForm: IContainerSignFormProps;
}

export default function ContainerSignForm({linkMessage, typeForm}: TProps) {
    return ( 
        <div className={styles.containerLogin}>
            {typeForm.typeForm == 'login' ? <ContentFormLogin /> : <ContentFormRegister />}
            <hr className={styles.divider} />
            <p className={styles.linkCadastro}>
                {linkMessage.linkMessage.message}
                <a className={styles.linkao} href={linkMessage.linkMessage.link}>
                    {" " + linkMessage.linkMessage.actionMessage}
                </a>
            </p>
        </div>
    );
}