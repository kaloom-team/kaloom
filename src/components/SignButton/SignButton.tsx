import styles from "./SignButton.module.sass";

interface SignButtonProps {
    img?: string;
    textButton: string;
    styleButton: string;
    styleText: string;
    typeBtn: string;
}

export default function SignButton({ img, textButton, styleButton, styleText, typeBtn }: SignButtonProps) {
    let id = " ";

    for (let i = 0; i < 50; i++) {
        id += String.fromCodePoint(Math.floor(Math.random() * 26) + 97)
    }

    return (
        <label htmlFor={id} className={`${styleButton} outline-none overflow-hidden focus:ring-1 focus:ring-white-300 focus:ring-opacity-50`}>
            <input className={styles.visuallyHidden} type={typeBtn} id={id} />
            {img && <img src={img} alt="Ícone" />}
            <p className={styleText}>{textButton}</p>
        </label>
    )
}