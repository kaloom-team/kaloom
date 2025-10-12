import RadioButton from "../RadioButton/RadioButton";
import styles from "./AcademicSelector.module.sass";
import CheckButton from "../CheckButton/CheckButton";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

interface IAcademicSelector {
    institutionName: "Etec" | "Fatec";
    radioName: string;
}

interface IInstitutionalUnit {
    id: number;
    nomeUnidade: string;
}

export default function AcademicSelector({
    institutionName,
    radioName,
}: IAcademicSelector) {
    const [dados, setDados] = useState<IInstitutionalUnit[]>([]);
    const [checked, setChecked] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState("");
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        const endpoint = institutionName;
        const apiUrl = `https://localhost:7020`;

        async function buscarDados() {
            try {
                const resposta = await axios.get(`${apiUrl}/${endpoint}`);
                const data = resposta.data;
                setDados(data);
            } catch (err) {
                console.log("Erro ao receber dados: " + err);
            }
        }

        buscarDados();
    }, [institutionName]);

    useEffect(() => {
        if (checked) {
            setSelectedRadio("Cursando");
        } else {
            setSelectedRadio("");
            if (selectRef.current) {
                selectRef.current.value = "";
            }
        }
    }, [checked]);

    return (
        <div className="flex flex-row justify-center items-center gap-3">
            <CheckButton
                textButton={institutionName}
                styleButton={styles.button}
                styleText={styles.text}
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
                    name={radioName}
                    state={!checked}
                    checked={selectedRadio === "Cursando"}
                    onChange={() => setSelectedRadio("Cursando")}
                />
                <RadioButton
                    title="Formado(a)"
                    name={radioName}
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
                    id={`select-unit-${institutionName}`}
                    name=""
                    className={`${styles.select} w-[9.8rem] h-[2.25rem] text-[0.8rem] bg-transparent text-white border-2 border-white font-bold text-left outline-none focus:ring-1 focus:ring-white-300 focus:ring-opacity-50`}
                    disabled={!checked}
                    required
                >
                    <option value="" disabled style={{ color: "white" }}>
                        Selecione a unidade
                    </option>
                    {dados.map((item) => {
                        return (
                            <option
                                key={item.id}
                                value={item.nomeUnidade}
                                className="text-black"
                            >
                                {item.nomeUnidade}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}
