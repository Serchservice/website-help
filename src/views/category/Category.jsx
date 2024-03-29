import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import './category.css'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'
import CategoryLoading from './states/CategoryLoading'
import CategoryNotFound from './states/CategoryNotFound'
import ApiService from '../../api/ApiService'
import CategoryFound from './states/CategoryFound'
import Header from '../../components/header/Header'
import Assets from '../../assets/Assets'

const Category = () => {
    const { category } = useParams()

    const [ isLoading, setIsLoading ] = useState(true)
    const [ activeCategory, setActiveCategory ] = useState({
        "category": "",
        "image": "",
        "key": ""
    })
    const [ isFound, setIsFound ] = useState(false)
    const [ isError, setIsError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ sections, setSections ] = useState([
        {
            "section": "",
            "image": "",
            "key": ""
        }
    ])
    const [ categories, setCategories ] = useState([
        {
            "category": "",
            "image": "",
            "key": ""
        }
    ])

    useEffect(() => {
        ApiService.loadSections({
            category: category,
            setCategories: setCategories,
            setIsError: setIsError,
            setIsFound: setIsFound,
            setIsLoading: setIsLoading,
            setSections: setSections,
            setErrorMessage: setErrorMessage,
            setActiveCategory: setActiveCategory
        })
    }, [ ])

    return (
        <div className="category-container">
            <Helmet>
                <title>{ `Serch Help Hub | ${activeCategory.category}` }</title>
                <meta name="description" content={ `Explore question and answers in ${activeCategory.category}` } />
                <meta property="og:title" content={ `Serch Help Hub | ${activeCategory.category}` } />
                <meta property="og:description" content={ `Explore question and answers in ${activeCategory.category}` } />
                <meta property="og:image" content={ Assets.logo } />
            </Helmet>
            <Header />
            { isLoading && (<CategoryLoading />) }
            { isError && (<CategoryNotFound message={ errorMessage }/>) }
            { isFound && (<CategoryFound
                sections={ sections }
                categories={ categories }
                category={ activeCategory }
            />) }
            <Footer />
        </div>
    )
}

export default Category