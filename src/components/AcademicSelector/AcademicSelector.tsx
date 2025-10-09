import RadioButton from "../RadioButton/RadioButton";
import stylesB from "../ContentFormRegister/ContentFormRegister.module.scss";
import SignButton from "../SignButton/SignButton";

interface AcademicSelector{
    institution: string;
    name: string;
}

export default function AcademicSelector({institution, name}: AcademicSelector) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 12,
                alignSelf: "flex-start",
            }}
        >
            <SignButton
                textButton={institution}
                styleButton={stylesB.signInButton}
                styleText={stylesB.textEntrar}
                typeBtn="checkbox"
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "6px 5px" }}>
                <RadioButton title="Cursando" name={name} />
                <RadioButton title="Formado(a)" name={name} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "6px 14px" }}>
                <select id="" name="" className="w-[9.6rem] h-[1.7rem] px-[0.625rem] text-[0.8rem] bg-transparent text-white border-2 border-white font-bold text-left outline-none focus:ring-1 focus:ring-white-300 focus:ring-opacity-50">
                    <option value="option1" disabled selected style={{color: "white"}}>Selecione a unidade</option>
                    <option value="option2" className="text-black">Etec JK - Sede</option>
                    <option value="option3" className="text-black">Etec JK - Extensão Senador Robert Kennedy</option>
                    <option value="option3" className="text-black">Etec JK - Extensão Céu Caminho do Mar</option>
                    <option value="option3" className="text-black">Etec JK - Extensão Associação Despertar</option>
                </select>
            </div>
        </div>
    );
}
