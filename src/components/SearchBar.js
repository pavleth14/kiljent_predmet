import { useEffect, useState } from "react";

const SearchBar = ({ clientList }) => {

    if (clientList.length > 0) {
        console.log('SearchBar clientList: ', clientList);
    }

    const [inputValue, setInputValue] = useState('');
    const [filteredArr, setFilteredArr] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        filteredArr.forEach(item => {
            console.log(item.subject);            
        })
    }, [filteredArr])

    const handleButton = (e) => {
        e.preventDefault();
        // isprazni listu na sledeci klik
        setFilteredArr([]);
        setIsClicked(prevState => !prevState);
        findClientByName();
    }

    const inputHandler = (e) => {
        setInputValue(e.target.value);
    }

    const findClientByName = () => {
        const isMatch = clientList.some(client => client.name === inputValue);
        console.log(isMatch); //true

        if (isMatch === false) {
            console.log('No match!');
            // setFilteredArr([]);
        }

        clientList.map(client => {
            if (client.name === inputValue) {
                setFilteredArr(prevState => [...prevState, client]);
            }
        })

    }


    return (
        <div style={{ margin: '50px' }}>
            <input onChange={inputHandler} placeholder="Pronadji klijenta..." />
            <button onClick={handleButton}>Click me</button>

            {

                // filteredArr.map((subject, index) => (
                //     <div key={index}>
                //         <p>Subject: {subject.subject}</p>
                //     </div>
                // ))

                filteredArr.length > 0 && filteredArr.map((item, itemIndex) => (
                    <div key={itemIndex}>
                        {item.subject.map((subject, subjectIndex) => (
                            <div key={subjectIndex}>
                                Subject: {subject}
                            </div>
                        ))}
                    </div>
                ))

            }

        </div>
    );
}

export default SearchBar;