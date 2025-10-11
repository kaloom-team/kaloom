import stylesRadio from './RadioButton.module.scss';

interface IRadioProps {
    title: string;
    name: string;
    state: boolean;
    checked?: boolean;
    onChange?: () => void;
}

export default function RadioButton({ title, name, state, checked, onChange }: IRadioProps) {
    let id = "";
    for (let i = 0; i < 10; i++) {
        id += String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
    }

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <input
                className={`${stylesRadio.inputRadio} outline-none focus:ring-1 focus:ring-white-300 focus:ring-opacity-50`}
                type="radio"
                name={name}
                id={id}
                checked={checked}
                onChange={onChange}
                disabled={state}
            />
            <label className={stylesRadio.label} htmlFor={id}>
                {title}
            </label>
        </div>
    );
}