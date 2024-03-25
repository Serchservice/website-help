import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const SectionItem = ({
    section = {
        "section": "",
        "image": "",
        "key": ""
    },
    category
}) => {
    return (
        <Link to={`/${ category }/${ section.key }`} className='item-link'>
            <div className="item-item">
                <div className="item-item-container">
                    <img alt="section" src={ section.image } className="item-image" />
                    <span className="item-text">{ section.section }</span>
                </div>
                <Icon icon="solar:arrow-right-broken" className="item-icon"/>
            </div>
        </Link>
    )
}

export default SectionItem
