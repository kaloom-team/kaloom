import stylesRadio from './RadioButton.module.scss';

interface IRadioProps{
    title: string;
    name:string;
}

export default function RadioButton({title, name}: IRadioProps){
     let id = "";
     for(let i = 0; i<10; i++){
         id += String.fromCodePoint(Math.floor(Math.random()*26)+97)
     }
    
    return(
        <div style={{display: "flex", flexDirection: "row", }}>
            <input className={stylesRadio.inputRadio} type="radio" name={name} id={id} />
            <label className={stylesRadio.label} htmlFor={id}>{title}</label>
        </div>
    )
}