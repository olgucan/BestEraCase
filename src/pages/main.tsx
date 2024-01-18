import { useState, useEffect } from 'react';
import ExportExcel from '../components/excelReport';
import FilterOptions from '../components/Options';
import CharacterComponent from '../components/CharacterComponent';
import Paginate from '../components/Pagination';
import axios from 'axios';
export type Character = {
    name: string,
    gender: string,
    eyeColor: string
}[]
const Main = () => {
    const [characters, setCharacters] = useState<Character>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage, setCharactersPerPage] = useState(15);
    const [filteredValue, setFilteredValue] = useState('')



    useEffect(() => {
        // Verileri çekmek için kullanılacak fonksiyon
        const fetchFilmCharacters = async () => {
            try {
                const response = await axios.post(
                    'https://swapi-graphql.netlify.app/.netlify/functions/index',
                    {
                        query: `
              query {
                allPeople {
                  totalCount
                  people {
                    name
                    gender
                    eyeColor
                  }
                }
              }
            `,
                    }
                );

                // Verileri state'e kaydet
                setCharacters(response.data.data.allPeople.people);
            } catch (error) {
                console.error('Veri çekme hatası:', error);
            }
        };


        console.log(characters)
        fetchFilmCharacters();
    }, []);
    const filteredNew = characters.filter(a => filteredValue == '' ? true : (filteredValue == a.eyeColor || filteredValue == a.gender))
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = filteredNew.slice(indexOfFirstCharacter, indexOfLastCharacter);

    // Sayfa değiştirme fonksiyonu
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
   // const FilteredArray = currentCharacters.filter(a => filteredValue == '' ? true : (filteredValue == a.eyeColor || filteredValue == a.gender))
    //console.log(FilteredArray)
    return (
        <div className="px-8 py-16">
            <h1 className='text-center text-lg font-medium'>Star Wars Characters</h1>
            <ul className='flex flex-wrap gap-4 my-16'>
                {currentCharacters.length > 0 ? currentCharacters.map((character, index) => (
                    <CharacterComponent index={index} name={character.name} color={character.eyeColor} gender={character.gender} />
                )) : <p>No item has found</p>}
            </ul>


            <div>
               
                <div className='text-center flex gap-2 justify-center md:flex-row flex-col'>
                    <Paginate characters={characters} paginate={paginate} charactersPerPage={charactersPerPage} />

                    <FilterOptions setFilteredValue={setFilteredValue} />
                    <ExportExcel excelData={currentCharacters} fileName='dads' />
                </div>

            </div>

        </div>
    )
}
export default Main