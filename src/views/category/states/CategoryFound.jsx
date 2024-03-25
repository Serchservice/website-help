import DownloadUserApp from '../../../components/app-download/DownloadUserApp'
import DownloadProviderApp from '../../../components/app-download/DownloadProviderApp'
import DownloadBusinessApp from '../../../components/app-download/DownloadBusinessApp'
import SearchBar from '../../../components/search-bar/SearchBar'
import DropdownMenu from '../../../components/dropdown-menu/DropdownMenu'
import '../category.css'
import { Link } from 'react-router-dom'
import Links from '../../../config/Links'
import SectionItem from '../../../components/section-item/SectionItem'
import { Icon } from '@iconify/react'

const CategoryFound = ({
    sections = [
        {
            "section": "",
            "image": "",
            "key": ""
        }
    ],
    categories = [
        {
            "category": "",
            "image": "",
            "key": ""
        }
    ],
    category = {
        "category": "",
        "image": "",
        "key": ""
    }
}) => {
    return (
        <div className="category-body">
            <div className="category-header">
                <DropdownMenu
                    list={ categories }
                    placeHolder={ category.category }
                />
                <Link to={ Links.home }>
                    <div className="mouse">
                        <Icon icon="solar:arrow-left-line-duotone" />
                        <span className="category-text">Back to Help Hub</span>
                        <span className="category-text1">
                        <span className="category-text2">Back</span>
                        <br></br>
                        </span>
                    </div>
                </Link>
            </div>
            <div className='home-search-view'>
                <SearchBar placeholder="Search keywords, questions and topics"/>
            </div>
            <div style={{height: "50px"}}></div>
            {
                category.key.includes("business")
                    ? (<DownloadBusinessApp />)
                    : category.key.includes("provider") || category.key.includes("providesharing")
                    ? (<DownloadProviderApp />)
                    : (<DownloadUserApp />)
            }
            <div style={{height: "80px"}}></div>
            {
                sections.length === 0
                    ? (
                        <div className="search-no-result">
                            <span className="search-text7">No content for this category yet</span>
                        </div>
                    )
                    : sections.map((value, key) => {
                        return <SectionItem
                            key={ key }
                            section={ value }
                            category={ category.key }
                        />
                    })
            }
        </div>
    )
}

export default CategoryFound