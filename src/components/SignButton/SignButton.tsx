interface SignButtonProps{
    img?: string;
    textButton: string;
    styleButton: string;
    styleText: string;
    typeBtn: string;
}



export default function SignButton({img, textButton, styleButton, styleText, typeBtn}:SignButtonProps) {
    let id = " ";

    for(let i = 0; i<50; i++){
        id += String.fromCodePoint(Math.floor(Math.random()*26)+97)
    }
    
    return (
        //<label className={styleButton}>
        //</label>
        // <button>
        <>
            <label htmlFor={id} className={styleButton}>
                <input style={{display:'none'}} type={typeBtn} id={id}/>
                {img && <img src={img} alt="Ícone"/>} 
                <p className={styleText}>{textButton}</p>
            </label>
            {/* </button> */}
        </>
    )
}