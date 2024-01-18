
type OptionProps = {
    setFilteredValue:(a:string)=>void
}
const FilterOptions=({setFilteredValue}:OptionProps) => {


    return (
        <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-32' name="" id="" onChange={(e)=>setFilteredValue(e.target.value )}>
        <option value=""></option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="blue">blue</option>
        <option value="gold">gold</option>
        <option value="black">black</option>
        <option value="brown">brown</option>
        <option value="red">red</option>
        <option value="orange">orange</option>
        <option value="unknown">unknown</option>
      </select>
    )
}

export default FilterOptions