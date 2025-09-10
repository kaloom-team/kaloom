import styles from './LoginInput.module.scss'

interface LoginInputProps{
    type: string;
    placeholder: string;
}

export default function LoginInput({type, placeholder}:LoginInputProps) {
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