import styles from './SignInput.module.scss'

interface ISignInputProps{
    type: string;
    placeholder: string;
}

export default function SignInput({type, placeholder}: ISignInputProps) {
    let id = " ";

    for(let i = 0; i<50; i++){
        id += String.fromCodePoint(Math.floor(Math.random()*26)+97)
    }

    return (
        <div className={styles.InputContainer}>
            <input
                id={id}
                className={styles.input}
                type={type}
                name=""
            />
            <label htmlFor={id} className={styles.label}>{placeholder}</label>
        </div>
    )
}