import styles from './SignInfo.module.scss';
import InfoForm from '../InfoForm/InfoForm';
import ContainerSignForm from '../ContainerSignForm/ContainerSignForm';
import type { TLinkMessage } from '../../utils/LinkMessage';
import type { CSSProperties } from 'react';

interface IInfo {
    info: string;
    title1: string;
    title2: string;
    styleDirection?: CSSProperties;
    linkMessageInfo: TLinkMessage;
};

type TInfos = {
    infos: IInfo;
};

export default function SignInfo({ infos }: TInfos) {
    const { info, title1, title2, styleDirection, linkMessageInfo } = infos;

    return (
        <main className={styles.main} style={styleDirection}>
            <div className={styles.contentWelcome}>
                <div className={styles.title}>
                    <h1 className={styles.kaloomTitle}>kaloom</h1>
                </div>
                <InfoForm titleOne={title1} titleTwo={title2} />
                <p className={styles.paragrafo}>{info}</p>
            </div>
            <ContainerSignForm linkMessage={linkMessageInfo.linkMessage} typeForm={"login"} />
        </main>
    );
}