import type { CSSProperties } from 'react';
import styles from './SignInput.module.scss'

interface ISignInputProps{
    type: string;
    placeholder: string;
    inputStyle?: CSSProperties;
}

export default function SignInput({type, placeholder, inputStyle}: ISignInputProps) {
    return (
        <div className={styles.InputContainer}>
            <input
                className={styles.input}
                type={type}
                style={inputStyle}
                name=""
                id=""
            />
            <label className={styles.label}>{placeholder}</label>
        </div>
    )
}