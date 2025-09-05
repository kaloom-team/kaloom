interface SignButtonProps{
    img?:string,
    textButton: string,
    styleButton:string,
    styleText:string
}

export default function SignButton({img, textButton, styleButton, styleText}:SignButtonProps) {
    return (
        <button className={styleButton}>
            {img && <img src={img} alt="Ícone"/>}
            
            <p className={styleText}>{textButton}</p>
        </button>
    )
}