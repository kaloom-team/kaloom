import styles from './SignInfo.module.scss';
import InfoForm from '../InfoForm/InfoForm';
import ContainerSignForm from '../ContainerSignForm/ContainerSignForm';
import type { ILinkMessage } from '../ContainerSignForm/ContainerSignForm';
import type { CSSProperties } from 'react';

interface IInfo {
    info: string;
    title1: string;
    title2: string;
    styleDirection?: CSSProperties;
    linkMessage: ILinkMessage;
};

type TInfos = {
    infos: IInfo;
};

export default function SignInfo({ infos }: TInfos) {
    const { info, title1, title2, styleDirection, linkMessage } = infos;

    return (
        <main className={styles.main} style={styleDirection}>
            <div className={styles.contentWelcome}>
                <div className={styles.title}>
                    <h1 className={styles.kaloomTitle}>kaloom</h1>
                </div>
                <InfoForm titleOne={title1} titleTwo={title2} />
                <p className={styles.paragrafo}>{info}</p>
            </div>
            <ContainerSignForm linkMessage={linkMessage}  />
        </main>
    );
}