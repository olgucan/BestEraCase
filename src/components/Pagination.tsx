import { Character } from "../pages/main"
type PaginateProps = {
    characters: Character,
    charactersPerPage: number
    paginate: (i: number) => void
}
const Paginate = (props: PaginateProps) => {


    return (
        <div className="flex">
            {Array.from({ length: Math.ceil(props.characters.length / props.charactersPerPage) }).map((_, index) => (
                <button className='text-white bg-black p-3 ml-2' key={index} onClick={() => props.paginate(index + 1)}>
                    {index + 1}
                </button>

            ))}
        </div>

    )
}
export default Paginate