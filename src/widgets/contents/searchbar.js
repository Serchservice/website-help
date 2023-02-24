import { Link } from 'react-router-dom';
import { useState, useRef } from "react";
import '../css/searchbar.css';
import { Icons } from '../../config/assets';

export const Download = ({playLink, appleLink}) => {
    return(
        <div className="serchGrey">
            <h2>Log in/Get Started for a personal experience and support</h2>
            <div className="flex">
                <Link to={playLink}>Download from PlayStore</Link>
                <Link to={appleLink}>Download from AppleStore</Link>
            </div>
        </div>
    );
}

export const SearchBar = ({ placeholder, data }) => {
    const [results, setResults] = useState([])
    const [query, setQuery] = useState("")
    const inputRef = useRef()

    const handleSearch = (event) => {
        event.preventDefault();
        let filteredData = [];
        //Iterating over the outermost array
        if(query !== "" || query !== null){
            for (let first = 0; first < data.length; first++){
                for (let second = 0; second < data[first].length; second++){
                    for (let third = 0; third < data[first][second].length; third++){
                        for (let fourth = 0; fourth < data[first][second][third].length; fourth++){
                            if(Object.values(data[first][second][third][fourth].some(
                                value => typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase)
                            ))){
                                filteredData.push(data[first][second][third][fourth])
                            }
                        }
                    }
                }
            }
            setResults(filteredData);
        } else {
            setResults([])
        }
    }

    const onChange = (e) => {
        setQuery(e.target.value)
        console.log(inputRef.current.value)
        console.log(results)
    }

    return (
        <div className='search'>
            <div className="searchBox">
                <div className="searchInput">
                    <div className="searchInputAndIcon">
                        <img alt="" src={ Icons.searchIcon } width={25} height={25}/>
                        <input type="text" placeholder={placeholder} value={query} onChange={onChange} ref={inputRef}/>
                    </div>
                    { query.length !== 0 ? <img src={Icons.closeIcon} alt="" width={15} height={15} onClick={() => setQuery([])}/> : null}
                </div>
                <div className="searchBtn" onClick={handleSearch}>
                    <h3>Search</h3>
                </div>
            </div>
            {/* <form className="searchBox" onSubmit={handleSearch}>
                <div className="searchInput">
                    <div className="searchInputAndIcon">
                        <img alt="" src={ Icons.searchIcon } width={30} height={30}/>
                        <input type="text" placeholder={placeholder} value={query} onChange={e => setQuery(e.target.value)} />
                    </div>
                    <img src={query.length === 0 ? null : Icons.closeIcon} alt="" width={15} height={15} onClick={() => setQuery([])}/>
                </div>
                <button className="searchBtn" type='submit'>
                    <h3>Search</h3>
                </button>
            </form> */}
            {/* {
                results.length !== 0 && (
                    <div className='searchOptions'>
                        {results.slice(0, 5).map(value => {
                            return <Link to={ value.link } className="searchData" key={ value.id } >
                                <h4 className='searchHead'> { value.title } </h4>
                                <p> { value.anotherhint } </p>
                            </Link>
                        })}
                    </div>
                )

                results.map(result => (
                    <div key={result.id}>
                        <h2>{result.title}</h2>
                        <p>{result.description}</p>
                        <p>{result.author}</p>
                        <Link to={result.link} target="_blank" rel="noopener noreferrer">More</Link>
                    </div>
                ))
            } */}
        </div>
    );
}