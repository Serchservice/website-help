import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Footer from '../../components/footer/Footer'
import './home.css'
import SearchBar from '../../components/search-bar/SearchBar'
import Shimmer from '../../components/shimmer/Shimmer'
import ApiService from '../../api/ApiService';
import Header from '../../components/header/Header';
import ItemGenerator from '../../config/ItemGenerator';
import Assets from '../../assets/Assets';

const Home = () => {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ categories, setCategories ] = useState([
        {
            "category": "",
            "image": "",
            "key": ""
        }
    ])

    useEffect(() => {
        ApiService.loadCategories({
            setIsLoading: setIsLoading,
            setCategories: setCategories
        })
    }, [ ]);

    return (
        <div className="home-container">
            <Helmet>
                <title>Serch | Help Hub</title>
                <meta
                    name="description"
                    content="Find the answer for your questions and queries."
                />
                <meta property="og:title" content="Serch | Help Hub" />
                <meta
                    property="og:description"
                    content="We connect you to mechanics, electricians, plumbers and carpenters that are closer to you. Request, Provide, Earn."
                />
                <meta property="og:image" content={ Assets.logo } />
            </Helmet>
            <Header />
            <div className="home-body">
                <div className="home-welcome">
                    <span className="home-text02">Welcome to Help Hub</span>
                    <span>{ isLoading
                        ? "Wait a moment while we fetch content for you..."
                        : "What can we help you find today?"
                    }</span>
                    <div className="home-container2"></div>
                </div>
                <div className="home-categories-section">
                    <div className='home-search-view'>
                        <SearchBar placeholder={"Search questions, keywords and topics"}/>
                    </div>
                    <div className="home-categories">
                        {
                            isLoading ? ItemGenerator(length = 5).map((_, key) => {
                                return (<Shimmer key={ key } height={150} width={150}/>)
                            }) : categories.map((value, key) => {
                                return (
                                    <Link to={`/${ value.key }`} className="home-category-link" key={ key }>
                                        <div className="hover">
                                            <img src={ value.image } className='home-category-image'/>
                                            <span className="home-category-text">{ value.category }</span>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home