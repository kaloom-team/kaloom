interface ISelect{
    title: string;
    name: string;
};

export default function SelectButton({title, name}:ISelect){
    return(
        <div>
            <select name={name} id="">
                <option value="">{title}</option>
                <option value="">{title}</option>
            </select>
        </div>
    )
}