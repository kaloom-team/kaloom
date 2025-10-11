import RadioButton from "../RadioButton/RadioButton";
import stylesB from "../ContentFormRegister/ContentFormRegister.module.scss";
import CheckButton from "../CheckButton/CheckButton";
import { useRef, useEffect, useState } from "react";

interface AcademicSelector{
    institution: string;
    name: string;
}

export default function AcademicSelector({ institution, name }: AcademicSelector) {
    const [checked, setChecked] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState("");
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        if (!checked) {
            setSelectedRadio("");
        }

        if (!checked && selectRef.current) {
            selectRef.current.value = "";
        }
    }, [checked]);

    return (
        <div className="flex flex-row justify-center items-center gap-3">
            <CheckButton
                textButton={institution}
                styleButton={stylesB.signInButton}
                styleText={stylesB.textEntrar}
                checked={checked}
                setChecked={setChecked}
            />
            <div
                style={{
                    padding: "0.375rem 0.3125rem",
                }}
                className="flex flex-col"
            >
                <RadioButton
                    title="Cursando"
                    name={name}
                    state={!checked}
                    checked={selectedRadio === "Cursando"}
                    onChange={() => setSelectedRadio("Cursando")}
                />
                <RadioButton
                    title="Formado(a)"
                    name={name}
                    state={!checked}
                    checked={selectedRadio === "Formado(a)"}
                    onChange={() => setSelectedRadio("Formado(a)")}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    padding: "6px 0 6px 8px",
                }}
            >
                <select
                    ref={selectRef}
                    id="select-unit"
                    name=""
                    className="w-[9.8rem] h-[2.25rem] text-[0.8rem] bg-transparent text-white border-2 border-white font-bold text-left outline-none focus:ring-1 focus:ring-white-300 focus:ring-opacity-50"
                    disabled={!checked}
                >
                    <option
                        value=""
                        disabled
                        selected
                        style={{ color: "white" }}
                    >
                        Selecione a unidade
                    </option>
                    <option value="option2" className="text-black">
                        Etec JK - Sede
                    </option>
                    <option value="option3" className="text-black">
                        Etec JK - Extensão Senador Robert Kennedy
                    </option>
                    <option value="option3" className="text-black">
                        Etec JK - Extensão Céu Caminho do Mar
                    </option>
                    <option value="option3" className="text-black">
                        Etec JK - Extensão Associação Despertar
                    </option>
                </select>
            </div>
        </div>
    );
}
