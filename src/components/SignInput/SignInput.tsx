import styles from "./SignInput.module.scss";
import { useState, Activity } from "react";
import { Eye, EyeOff } from "lucide-react";

interface ISignInputProps {
    type: "text" | "email" | "password" | "date";
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignInput({
    type,
    placeholder,
    value,
    onChange,
}: ISignInputProps) {
    let id = " ";
    let yearNow: number = new Date().getFullYear();
    const [showPassword, setShowPassword] = useState(false);

    for (let i = 0; i < 10; i++) {
        id += String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
    }

    return (
        <div className={styles.InputContainer}>
            <input
                id={id}
                className={styles.input}
                type={type === "password" && showPassword ? "text" : type}
                value={value}
                onChange={onChange}
                name=""
                placeholder=""
                min={type == "date" ? "1950-01-01" : undefined}
                max={type == "date" ? `${yearNow - 14}-01-01` : undefined}
                minLength={type == "text" ? 3 : type == "email" ? 5 : undefined}
                maxLength={
                    type == "text" ? 15 : type == "email" ? 254 : undefined
                }
            />
            <Activity mode={type == "password" ? "visible" : "hidden"}>
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1rem",
                        color: "#666",
                    }}
                    aria-label={
                        showPassword ? "Ocultar senha" : "Mostrar senha"
                    }
                >
                    {showPassword ? (
                        <EyeOff size={20} color="gray" />
                    ) : (
                        <Eye size={20} color="gray" />
                    )}
                </button>
            </Activity>
            <label htmlFor={id} className={styles.label}>
                {placeholder}
            </label>
            <p className={styles.p}>
                Campo de{" "}
                {placeholder == "@username" ? "nome de usuário" : placeholder}{" "}
                inválido. Por favor,
                {type == "email"
                    ? " use o formato correto"
                    : type == "date"
                    ? " coloque uma data válida"
                    : " preencha o campo corretamente"}
                {type == "email" ? " (usuario@dominio.com)" : ""}.
            </p>
        </div>
    );
}
