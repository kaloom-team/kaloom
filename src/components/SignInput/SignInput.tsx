import styles from './SignInput.module.scss'

interface ISignInputProps {
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignInput({ type, placeholder, value, onChange }: ISignInputProps) {
    let id = " ";

    for (let i = 0; i < 10; i++) {
        id += String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
    }

    return (
        <div className={styles.InputContainer}>
            <input
                id={id}
                className={styles.input}
                type={type}
                value={value}
                onChange={onChange}
                name=""
                placeholder=""
            />
            <label htmlFor={id} className={styles.label}>
                {placeholder}
            </label>
            <p className={styles.p}>
                Campo de {type} inválido. Por favor, use o formato correto
                (usuario@dominio.com).
            </p>
        </div>
    );
}