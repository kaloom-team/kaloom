interface IRadiusButtonProps{
    typeCheck: 'Etec' | 'Fatec';
}


export default function RadiusButton({typeCheck}: IRadiusButtonProps){
    let id = " ";

    for(let i = 0; i<50; i++){
        id += String.fromCodePoint(Math.floor(Math.random()*26)+97)
    }
    
    return(
        <div>
            <input type="checkbox" name="" id="" />
        </div>
    )
}