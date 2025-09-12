import styles from "./ContainerSignForm.module.scss";
import ContentFormLogin from "../ContentFormLogin/ContentFormLogin";
import type { TLinkMessage } from "../../utils/LinkMessage";

export default function ContainerSignForm({ linkMessage }: TLinkMessage) {
    return (
        <div className={styles.containerLogin}>
            <ContentFormLogin />
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