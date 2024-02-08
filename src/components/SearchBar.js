import { useEffect, useState } from "react";

const SearchBar = ({clientList}) => {

    if(clientList.length > 0) {
        console.log('SearchBar clientList: ', clientList);
    }

    const [inputValue, setInputValue] = useState('');
    const [filteredArr, setFilteredArr] = useState([]);

    useEffect(() => {
        console.log('filteredArr: ',filteredArr);
        
    }, [filteredArr])

    const handleButton = (e) => {
        e.preventDefault();
        setFilteredArr([]);
        findClientByName();
    }

    const inputHandler = (e) => {
        setInputValue(e.target.value);
    }

    const findClientByName = () => {
        const isMatch = clientList.some(client => client.name === inputValue);
        console.log(isMatch); //true

        if(isMatch === false) {
            console.log('Match is false');
            // setFilteredArr([]);
        }

        clientList.map(client => {
            if(client.name === inputValue) {
                setFilteredArr(prevState => [...prevState, client]);
            }
        })

    }
    

    return ( 
        <div>            
            <input onChange={inputHandler} placeholder="Pronadji klijenta..." />
            <button onClick={handleButton}>Click me</button>
        </div>
     );
}
 
export default SearchBar;