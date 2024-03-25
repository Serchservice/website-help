import { useEffect, useRef, useState } from "react";
import Assets from "../../assets/Assets";
import './search-bar.css';
import HelpService from "../../api/HelpService";
import { useNavigate } from "react-router-dom";
import Links from "../../config/Links";
import SearchResult from "../search-result/SearchResult";
import Spacer from "../Spacer";

const SearchBar = ({ placeholder }) => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const searchRef = useRef(null);
    const [ result, setResult ] = useState([
        {
            "question": "",
            "section": "",
            "category": "",
            "link": "",
            "image": ""
        }
    ])
    const [ isFound, setIsFound ] = useState(false)

    const handleSearch = () => {
        if(query === null || query === '') {
            return
        } else {
            navigate(`${ Links.search }?q=${ query }`)
        }
    }

    const onChange = (event) => {
        setQuery(event.target.value)
        HelpService.search({
            query: event.target.value,
            setResult: setResult
        }).then((value) => {
            setIsFound(value)
        })
    }

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setResult([])
            setIsFound(false)
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="search-bar" ref={searchRef}>
            <div className="searchBox">
                <div className="searchInput">
                    <div className="searchInputAndIcon">
                        <img alt="" src={ Assets.searchIcon } width={25} height={25}/>
                        <input type="text" placeholder={ placeholder } onChange={onChange} />
                    </div>
                </div>
                <div className="searchBtn" onClick={handleSearch}>
                    <span>Search</span>
                </div>
            </div>
            { result.length !== 0 && isFound && (
                <div className="search-results" ref={searchRef}>
                    {
                        result.map((value, key) => {
                            return (
                                <div key={ key } style={{ width: "100%" }}>
                                    <SearchResult
                                        image={ value.image }
                                        header={ value.question }
                                        category={ value.category }
                                        section={ value.section }
                                        link={ value.link }
                                    />
                                    { key !== (result.length - 1) && (<Spacer height={"10px"} /> )}
                                </div>
                            )
                        })
                    }
                </div>
            )}
        </div>
    );
}

export default SearchBar;