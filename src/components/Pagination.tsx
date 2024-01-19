import { Character } from "../pages/main"
import { useState } from "react"
type PaginateProps = {
    characters: Character,
    charactersPerPage: number
    paginate: (i: number) => void
}
const Paginate = (props: PaginateProps) => {
   const [active,setActive]=useState(0)

    return (
        <div className="flex">
            {Array.from({ length: Math.ceil(props.characters.length / props.charactersPerPage) }).map((_, index) => (
                <button className={`text-white bg-black ${active==index && 'bg-[red]'} p-3 ml-2`} key={index} onClick={(event) => {setActive(index);props.paginate(index + 1)}}>
                    {index + 1}
                </button>

            ))}
        </div>

    )
}
export default Paginate