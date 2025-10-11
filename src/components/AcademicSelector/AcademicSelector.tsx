import RadioButton from "../RadioButton/RadioButton";
import stylesB from "../ContentFormRegister/ContentFormRegister.module.scss";
import CheckButton from "../CheckButton/CheckButton";
import { useRef, useEffect, useState } from "react";
import axios from "axios";


interface AcademicSelector{
    institutionName: "Etec" | "Fatec";
    radioName: string;
}

interface IInstitutionalUnit {
    id: number;
    nomeunidade: string;
}

export default function AcademicSelector({ institutionName, radioName }: AcademicSelector) {
    const [dados, setDados] = useState<IInstitutionalUnit[]>([]);
    const [checked, setChecked] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState("");
    const selectRef = useRef<HTMLSelectElement>(null);

    const dadosApi = [
        { id: 1, nomeunidade: "unidade 1" },
        { id: 2, nomeunidade: "unidade 2" },
        { id: 3, nomeunidade: "unidade 3" },
    ];

    useEffect(() => {
        const endpoint = institutionName;
        const apiUrl = `https://localhost:7020`;

        async function buscarDados() {
            try {
                const resposta = dadosApi; //await axios.get(`${api}/${endpoint}`)
                //const data = resposta.data;
                setDados(resposta);
            } catch (err) {
                console.log("Erro ao receber dados: " + err);
            }
        }

        buscarDados();
    }, []);

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
                textButton={institutionName}
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
                    {dados.map((item) => {
                        return (
                            <option
                                key={item.id}
                                value={item.nomeunidade}
                                className="text-black"
                            >
                                {item.nomeunidade}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}
