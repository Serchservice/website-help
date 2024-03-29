import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import './section.css'
import Footer from '../../components/footer/Footer'
import { Outlet, useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import SectionLoading from './states/SectionLoading'
import SectionNotFound from './states/SectionNotFound'
import ApiService from '../../api/ApiService'
import SectionHeader from './widgets/SectionHeader'
import Assets from '../../assets/Assets'

const SectionPage = () => {
    const { category, section, id } = useParams()

    const [ isLoading, setIsLoading ] = useState(true)
    const [ isFound, setIsFound ] = useState(false)
    const [ isError, setIsError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState("")

    const [ activeSection, setActiveSection ] = useState({
        "section": "",
        "image": "",
        "key": ""
    })
    const [ activeCategory, setActiveCategory ] = useState({
        "category": "",
        "image": "",
        "key": ""
    })
    const [ groups, setGroups ] = useState([{
        "group": "",
        "key": "",
        "help": [
            {
                "question": "",
                "answer": "",
                "id": ""
            }
        ]
    }])
    const [ categories, setCategories ] = useState([
        {
            "category": "",
            "image": "",
            "key": ""
        }
    ])

    useEffect(() => {
        ApiService.loadGroups({
            category: category,
            setIsLoading: setIsLoading,
            setCategories: setCategories,
            section: section,
            setSection: setActiveSection,
            setGroups: setGroups,
            setErrorMessage: setErrorMessage,
            setIsError: setIsError,
            setIsFound: setIsFound,
            setActiveCategory: setActiveCategory
        })
    }, [ ])

    return (
        <div className="section-container">
            <Helmet>
                <title>{ `Serch Help Hub | ${ activeSection.section }` }</title>
                <meta name="description" content={ `Explore question and answers in ${ activeSection.section }` } />
                <meta property="og:title" content={ `Serch Help Hub | ${ activeSection.section }` } />
                <meta property="og:description" content={ `Explore question and answers in ${ activeSection.section }` } />
                <meta property="og:image" content={ Assets.logo } />
            </Helmet>
            <Header />
            { isLoading && (<SectionLoading />) }
            { isError && (
                <SectionNotFound
                    message={ errorMessage }
                    link={ category }
                    category={ activeCategory.category }
                />
            ) }
            { isFound && (
                <div className='section-body'>
                    <SectionHeader
                        groups={ groups }
                        categories={ categories }
                        section={ activeSection.section }
                        category={ activeCategory.category }
                        activeCategory={ activeCategory.key }
                        activeSection={ activeSection.key }
                        showMenuButton={ id !== null && id !== undefined }
                    />
                    <div className='section-body-right'>
                        <Outlet />
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default SectionPage