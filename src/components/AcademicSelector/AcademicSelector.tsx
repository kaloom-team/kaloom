import RadioButton from "../RadioButton/RadioButton";
import stylesB from "../ContentFormRegister/ContentFormRegister.module.scss";
import SignButton from "../SignButton/SignButton";

interface AcademicSelector{
    institution: string;
}

export default function AcademicSelector({institution}: AcademicSelector) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
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
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <RadioButton title="Cursando" name="name_radio_1" />
                <RadioButton title="Formado(a)" name="name_radio_1" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "6px 5px" }}>
                <select id="" name="">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
    );
}
