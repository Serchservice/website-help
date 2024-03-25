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
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/serch-2eb43.appspot.com/o/dark%20-%20Serch%20Boxed%20(2).png?alt=media&token=1de7eb39-5131-4205-b782-f3a01584e493"/>
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