import { Link } from 'react-router-dom';
import { useState } from "react";
import '../css/searchbar.css';
import { Icons } from '../../config/assets';

export const SearchBar = ({ placeholder, data}) => {
    const [filteredData, setFilteredData] = useState([]);
    // const [searchData, setSearchData] = useState([]);
    // const [enteredData, setEnteredData] = useState([]);

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     handleSearchResults();
    //     setSearchData(e.target.value);
    // }

    // const handleSearchResults = ({data}) => {
    //     const searching = data;
    //     const filtered = searching.filter(dt => dt.title.toLowerCase().includes(
    //         search.toLowerCase().trim()
    //     ))
    // }

    // const handleFilter = (event) => {
    //     const searchWord = event.target.value;
    //     const newFilter = data.filter((value) => {
    //         return value.hint.toLowerCase().includes(searchWord.toLowerCase());
    //     });
    //     if(searchWord === "") {
    //         setFilteredData([]);
    //         setEnteredData(searchWord);
    //     } else {
    //         setFilteredData(newFilter);
    //         setEnteredData(searchWord);
    //     }
    // }

    const clear = () => {
        // setFilteredData([]);
        // setEnteredData("");
    }

    return (
        <div className='search'>
            <div className="searchBox">
                <img alt="" src={ Icons.searchIcon } width={20} />
                <input type="Search" placeholder={ placeholder }
                    /*value={ "searchData" }*/
                    onChange={ "handleChange" }
                    // onChange={ handleFilter } /*value={enteredData}*/
                />
                <div>
                    <img src={filteredData.length === 0 ? null : Icons.closeIcon} alt="" width={20} onClick={() => clear}/>
                </div>
                <div className="searchBtn">
                    <h3>Search</h3>
                </div>
            </div>
            {
                filteredData.length !== 0 && (
                    <div className='searchOptions'>
                        {filteredData.slice(0, 5).map(value => {
                            return <Link to={ value.link } className="searchData" key={ value.id } >
                                <h4 className='searchHead'> { value.title } </h4>
                                <p> { value.anotherhint } </p>
                            </Link>
                        })}
                    </div>
                )
            }
        </div>
    );
}

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