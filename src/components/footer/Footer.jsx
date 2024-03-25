import React from 'react'
import Assets from '../../assets/Assets'
import './footer.css'

const Footer = () => {
    const footerLinks = [
        {
            "main": "Company",
            "children": [
                {
                    "key": "About Us",
                    "link": ""
                },
                {
                    "key": "Blog",
                    "link": ""
                },
                {
                    "key": "Newsroom",
                    "link": ""
                },
                {
                    "key": "Marketplace",
                    "link": ""
                },
                {
                    "key": "Careers",
                    "link": ""
                },
            ]
        },
        {
            "main": "Product",
            "children": [
                {
                    "key": "Request",
                    "link": ""
                },
                {
                    "key": "Provide",
                    "link": ""
                },
                {
                    "key": "Business",
                    "link": ""
                },
                {
                    "key": "Guest",
                    "link": ""
                },
                {
                    "key": "Tip2Fix",
                    "link": ""
                },
            ]
        },
        {
            "main": "Information",
            "children": [
                {
                    "key": "Safety Guidelines",
                    "link": ""
                },
                {
                    "key": "Countries In Serch",
                    "link": ""
                },
            ]
        },
        {
            "main": "Support",
            "children": [
                {
                    "key": "Legal Hub",
                    "link": ""
                },
                {
                    "key": "Support Hub",
                    "link": ""
                },
            ]
        },
    ];

    const socialLinks = [
        {
            "link": 'https://www.linkedin.com/company/serchservice',
            "alt": "LinkedIn",
            "icon": Assets.linkedInIcon,
        },
        {
            "link": 'https://www.instagram.com/serchservice',
            "alt": "Instagram",
            "icon": Assets.instagramIcon,
        },
        {
            "link": 'https://www.x.com/serchservice',
            "alt": "Twitter",
            "icon": Assets.twitterIcon,
        },
        {
            "link": 'https://www.youtube.com/@serchservice',
            "alt": "YouTube",
            "icon": Assets.youtubeIcon,
        }
    ]

    const footerCopyright = [
        {
            "name": "Terms and Conditions",
            "link": "https://legal.serchservice.com"
        },
        {
            "name": "Accessibility",
            "link": "https://legal.serchservice.com"
        },
        {
            "name": "Privacy",
            "link": "https://legal.serchservice.com"
        }
    ]

    return (
        <footer className={"footer-footer"}>
            <div className="footer-content">
                <main className="footer-main-content">
                    <div className="footer-container">
                        <div className="footer-header">
                            <a href="https://www.serchservice.com" className="footer-link">
                                <img alt="Logo" src={Assets.lightLogo200} className="footer-branding mouse"/>
                            </a>
                            <img alt="Service made easy" src={Assets.tagWhite} className="footer-image"/>
                        </div>
                    </div>
                    <header className="footer-categories">
                        {
                            footerLinks.map((value, key) => {
                                return (
                                    <div key={ key } className="footer-category">
                                        <div className="footer-category-header">
                                            <span className="footer-header">{ value.main }</span>
                                        </div>
                                        <div className="footer-links">
                                            {
                                                value.children.map((child, key) => {
                                                    return (
                                                        <a href={ child.link } key={ key }>
                                                            <span className="footer-text01 footer-link">{ child.key }</span>
                                                        </a>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </header>
                    <div className="footer-socials">
                        {
                            socialLinks.map((value, key) => {
                                return (
                                    <a key={ key } href={ value.link } target="_blank" rel="noreferrer noopener" className="footer-link1">
                                        <img alt={ value.alt } src={ value.icon } className="social"/>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <section className="footer-copyright">
                        <span className="footer-text-copy">© 2023 Serchservice Inc. All Rights Reserved.</span>
                        <div className="footer-copy-links">
                            {
                                footerCopyright.map((value, key) => {
                                    return (
                                        <a href={ value.link } key={ key }>
                                            <span className="footer-text21">{ value.name }</span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </section>
                </main>
            </div>
        </footer>
    )
}

export default Footer
