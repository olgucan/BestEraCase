

type CharacterCompProps = {
    index:number,
    name:string,
    color:string,
    gender:string
}
const CharacterComponent = (props:CharacterCompProps) => {
    return (
        <li className={`p-3 bg-[${props.color}] flex-col md:flex-row  flex justify-center items-center rounded-md border-2 gap-2`} key={props.index}>
            <span>Name: {props.name}</span>
        <span>Gender: {props.gender} </span><span>Color: {props.color}</span>
        </li>

    )

}
export default CharacterComponent