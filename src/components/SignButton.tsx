import styles from '../App.module.scss';

interface SignButtonProps{
    img?:any,
    textButton:string
}

export function SignButton({img, textButton}:SignButtonProps) {
    img = img ? <img src={img}/> : ''

    return(
        <div>
            {img}
            <p>{textButton}</p>
        </div>
    )
}