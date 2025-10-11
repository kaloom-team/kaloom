import styles from "./CheckButton.module.sass";

interface SignButtonProps {
    textButton: string;
    styleButton: string;
    styleText: string;
    checked: boolean; // estado do pai
    setChecked: (val: boolean) => void; // função para alterar
}

export default function CheckButton({
    textButton,
    styleButton,
    styleText,
    checked,
    setChecked
}: SignButtonProps) {
    let id = " ";

    for (let i = 0; i < 50; i++) {
        id += String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
    }

    return (
        <label
            htmlFor={id}
            className={`${styleButton} outline-none overflow-hidden focus:ring-1 focus:ring-white-300 focus:ring-opacity-50`}
        >
            <input
                className={styles.visuallyHidden}
                type="checkbox"
                id={id}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
            <p className={styleText}>{textButton}</p>
        </label>
    );
}