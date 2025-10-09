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
                <select id="" name="">
                    <option value="option1" disabled selected>Selecione a unidade</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
    );
}
