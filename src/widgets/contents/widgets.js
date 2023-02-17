import '../css/widget.css';
import { Link } from "react-router-dom";
import { AppLinks, MainLinks } from '../../config/links/links';
import { Images } from '../../config/assets';
import { FooterDocumentLinks, FooterLinks, SerchAppDownloadLinks, SocialMediaLinks } from './pageWidgetLinks';

export const Header = ({pagetitle, pagedescription}) => {
    return (
        <header style={{backgroundColor: "#030001", padding: pagetitle ? "0.8rem 0.9rem" : ""}}>
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", padding: pagetitle ? "" : "0.8rem 0.9rem"
            }}>
                <div className="logo">
                    <Link to={ MainLinks.home }> <img alt="Serch Logo" src={ Images.serch.serchLogo } width={40} height={40} /> </Link>
                </div>
                <div className="headerlinks" style={{justifyContent: "space-between",}}>
                    <Link to={ AppLinks.loginUser } style={{margin: "0.5rem", fontSize: "1rem"}}>Login</Link>
                    <Link to={ AppLinks.signupUser } style={{margin: "0.5rem", fontSize: "1rem"}}>Signup</Link>
                </div>
            </div>
            {
                pagetitle ? <>
                    <h2 style={{color: "#FAFAFA"}}>{pagetitle}</h2>
                    <p style={{color: "#FAFAFA"}}>{pagedescription}</p>
                </> : null
            }
        </header>
    );
}

export const Footer = () => {
    return (
        <footer style={{backgroundColor: "#030001", width: "100%"}} className="footer">
            <div className="footer-logo" style={{display: "flex", flexWrap: "wrap",}}>
                <img alt='Serch Tagline' src={ Images.serch.serchTagline }
                    style={{width: "150px", borderRadius: "0.8rem"}} className="upper-tagline"
                />
                <Link to={ MainLinks.home }>
                    <img alt='Serch Logo' src={ Images.serch.serchLogoName } style={{
                        width: "150px", borderRadius: "0.8rem"
                    }} />
                </Link>
                <img alt='Serch Tagline' src={ Images.serch.serchTagline }
                    style={{width: "150px", borderRadius: "0.8rem"}} className="lower-tagline"
                />
            </div>
            <div className='company-footer-links' style={{
                display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between"
            }}>{
                FooterLinks.map((item, index) => {
                    if(item.section.includes("Help")){
                        return <div style={{
                            display: "flex",
                            flexDirection: "column",
                        }} key={index} className="company-links">
                            <h2 style={{color: "#bdbdbd"}}>{item.section}</h2>
                            {
                            item.link.map((item, index) => {
                                if(index === 1 || index === 3 || index === 4){
                                    return <a href={ item.link } key={index} className="pageLink">{item.title}</a>
                                } else {
                                    return <Link to={ item.link } key={index} className="pageLink">{item.title}</Link>
                                }
                            })
                        }
                        </div>
                    } else {
                        return <div style={{
                            display: "flex",
                            flexDirection: "column",
                        }} key={index} className="company-links">
                            <h2 style={{color: "#bdbdbd"}}>{item.section}</h2>
                            {
                                item.link.map((item, index) => {
                                    return <Link to={ item.link } key={index} className="pageLink">{item.title}</Link>
                                })
                            }
                        </div>
                    }
                })
            }</div>
            <div className='external-links' style={{
                display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between"
            }}>
                <div className='app' style={{
                    display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
                }}>{
                    SerchAppDownloadLinks.map((item, index) => {
                        return <a href={item.link} key={index} style={{padding: "0.2rem"}}>
                            <img alt={item.imageAlt} src={item.image} height={item.height} style={{width: "100%"}} />
                        </a>
                    })
                }</div>
                <div className='socialmedia' style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between"}}>{
                    SocialMediaLinks.map((item, index) => {
                        return <a href={item.link} key={index} style={{padding: "0.2rem"}}>
                            <img alt={item.imageAlt} src={item.image} className="external-links-social" />
                        </a>
                    })
                }</div>
            </div>
            <div  style={{alignItems: "center", textAlign: "center"}}>
                <div  style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", marginTop: "0.8rem"}}>{
                    FooterDocumentLinks.map((item, index) => {
                        return <a href={item.link} style={{
                            color: "#bdbdbd",
                            margin: "0.5rem"
                        }} className="footer-document-link" key={index}>{item.name}</a>
                    })
                }</div>
                <p style={{marginTop: "0.8rem", color: "#bdbdbd"}}>2022 Serch Inc. Tech.</p>
            </div>
        </footer>
    );
}