import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import './search.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Link, useLocation } from 'react-router-dom'
import Links from '../../config/Links'
import { Icon } from '@iconify/react'
import HelpService from '../../api/HelpService'
import SearchResult from '../../components/search-result/SearchResult'
import Spacer from '../../components/Spacer'
import Assets from '../../assets/Assets'
import ItemGenerator from '../../config/ItemGenerator'
import Shimmer from '../../components/shimmer/Shimmer'

const Search = () => {
    const location = useLocation()
    const [ query, setQuery ] = useState("")
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
    const [ isLoading, setIsLoading ] = useState(true)

    const onChange = (event) => {
        setQuery(event)
        setIsLoading(true)
        HelpService.search({
            query: event,
            setResult: setResult
        }).then((value) => {
            setIsFound(value)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        onChange(location.search.replace("?q=", ""))
    }, [ ])

    return (
        <div className="search-container">
            <Helmet>
                <title>Serch Help Hub | Search Results</title>
                <meta name="description" content={`Search results for ${ query }`}/>
                <meta property="og:title" content="Serch (Search Results) - Service made easy"/>
                <meta property="og:description" content={`Search results for ${ query }`}/>
                <meta property="og:image" content={ Assets.logo } />
            </Helmet>
            <Header />
            <div className="search-body">
                <div className="search-header">
                    <span className="search-text overflow">Search - { query }</span>
                    <Link to={ Links.home }>
                        <div className="mouse">
                            <Icon icon="solar:arrow-left-line-duotone" />
                            <span className="search-text1">Back to Help Hub</span>
                            <span className="search-text2">
                            <span className="search-text3">Back</span>
                            <br></br>
                            </span>
                        </div>
                    </Link>
                </div>
                <div style={{ width: "95%" }}>
                    <div className="search-bar">
                        <div className="searchBox">
                            <div className="searchInput">
                                <div className="searchInputAndIcon">
                                    <img alt="" src={ Assets.searchIcon } width={25} height={25}/>
                                    <input
                                        type="text"
                                        placeholder="Search keywords, questions and topics"
                                        onChange={(e) => onChange(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height: "100px"}}></div>
                <span className="search-text6">Search Results</span>
                {
                    isLoading && ItemGenerator(length = 5).map((_, key) => {
                        return (
                            <div key={ key } style={{width: "100%"}}>
                                <div style={{height: "15px"}} key={ key }></div>
                                <Shimmer height={80} percentWidth='100%'/>
                            </div>
                        )
                    })
                }
                { result.length !== 0 && isFound && (
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
                )}
                { result.length === 0 && (
                    <div className="search-no-result">
                        <span className="search-text7">No result found</span>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Search
