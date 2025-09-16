import styles from './SignInput.module.scss'

interface ISignInputProps{
    type: string;
    placeholder: string;
}

export default function SignInput({type, placeholder}: ISignInputProps) {
    return (
        <div className={styles.InputContainer}>
            <input
                className={styles.input}
                type={type}
                name=""
                id=""
            />
            <label className={styles.label}>{placeholder}</label>
        </div>
    )
}