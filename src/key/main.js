import { Link, useParams, Outlet } from "react-router-dom";
import {
    AppLinks, CompanyLinks, HelpCategoryLinks, HelpLinks, InformationLinks, MainLinks, ProductLinks, SupportLinks
} from "../config/links/links";
import { Footer, Header, Title } from "../widgets/contents/widgets";
import '../css/404.css';
import { HelpHomeBody, HelpHomeHeader } from "./home";
import { useEffect, useState } from "react";
import { Icons } from "../config/assets";
import { Download, SearchBar } from "../widgets/contents/searchbar";
import { FullPageShimmer } from "../widgets/contents/shimmer";

export const Help = () => {
    Title('Serch || Help Hub');
    return (
        <>
            <Header />
            <HelpHomeHeader />
            <HelpHomeBody />
            <Footer />
        </>
    );
}

export const NoPage = () => {
    Title("Serch || Expecting you back");
    return (
        <div className='pageerror'>
            <Header />
            <div className='pageerror_img'></div>
            <div className='errorpage'>
                <div className='errortext'>
                    <h3>Sorry, we couldn't find that page</h3>
                    <p>
                        We might have shifted the page you are looking for while we shifted a few things around.
                        Try re-entering the address or you can choose below.
                    </p>
                </div>
            </div>
            <div className='redirectLinks'>
                <a href={ MainLinks.home } className="head">Head to Serchservice.com</a>
                <a href={ CompanyLinks.careers } className="head">Head to Serch Careers</a>
                <a href={ ProductLinks.business } className="head">Head to Serch for Business</a>
                <a href={ InformationLinks.docs } className="head">Read our Documentation</a>
                <a href={ ProductLinks.request } className="head">Head to Serch Request</a>
                <Link to={ SupportLinks.help } className="head">Get the Help you need</Link>
                <a href={ InformationLinks.countries } className="head">See Countries in Serch</a>
                <a href={ MainLinks.helpAndSupport } className="head">Head to Serch Support</a>
            </div>
        </div>
    );
}

export const HelpCategories = () => {
    return(
        <>
            <Outlet />
        </>
    );
}

export const HelpCategoriesIndex = () => {
    const { category } = useParams();
    const [help, setHelp] = useState(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [noPage, setNoPage] = useState(false);

    useEffect(() => {
        setLoading(true)
        let helper = HelpCategoryLinks.find(help => help.id === category);

        if(helper){
            setNoPage(false)
            setLoading(false)
            setHelp(helper);
        } else {
            setLoading(false)
            setNoPage(true)
        }
    }, [category]);

    help != null && loading !== true && noPage !== true ? Title(`${help.title} || Serch Help`)
    : loading !== true && noPage !== false ? Title("Serch || Expecting you back") : Title("Loading || Serch Help");

    if(help != null && loading !== true && noPage !== true) {
        return(
            <>
                <Header />
                <div className="keyHeader">
                    <div className="keyHead">
                        {
                            open ?   <div className={open ? 'open dropdown' : "close dropdown"} onClick={()=>setOpen(!open)}>
                                {
                                    help.title === 'Request/Clients'
                                    ?   <div className="menu">
                                            <Link to={`/${help.id}`} className="menuLink">{help.title}</Link>
                                            <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
                                            {/* <Link to={`/${HelpLinks.business}`} className="menuLink">Business</Link> */}
                                        </div>
                                    : help.title === 'Provide/Providers'
                                    ?   <div className="menu">
                                            <Link to={`/${help.id}`} className="menuLink">{help.title}</Link>
                                            <Link to={`/${HelpLinks.clients}`} className="menuLink">Request/Clients</Link>
                                            {/* <Link to={`/${HelpLinks.business}`} className="menuLink">Business</Link> */}
                                        </div>
                                    :   <div className="menu">
                                            <Link to={`/${help.id}`} className="menuLink">{help.title}</Link>
                                            <Link to={`/${HelpLinks.clients}`} className="menuLink">Request/Clients</Link>
                                            <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
                                        </div>
                                }
                                <img alt="arrow" src={ open ? Icons.arrowUp : Icons.arrowDown } width={18} className="menuArrow"/>
                            </div>
                            :   <div className={open ? 'open dropdown' : "close dropdown"} onClick={()=>setOpen(!open)}>
                                {
                                    help.title === 'Request/Clients'
                                    ?   <article className="menuLink">{help.title}</article>
                                    : help.title === 'Provide/Providers'
                                    ?   <article className="menuLink">{help.title}</article>
                                    :   <article className="menuLink">{help.title}</article>
                                }
                                <img alt="arrow" src={ open ? Icons.arrowUp : Icons.arrowDown } width={18} className="menuArrow"/>
                            </div>
                        }
                        <p>Hope you find what you are looking for.</p>
                    </div>
                    <a href={ SupportLinks.help } className="keyArrowBack">
                        <img alt="" src={ Icons.arrowLeft } width={25} />
                        <h3>Back to Help Hub</h3>
                    </a>
                </div>
                <SearchBar placeholder={"Search questions, keywords and topics"} />
                <Download
                    appleLink={
                        help.title === 'Request/Clients' ? AppLinks.appleStore
                        : help.title === 'Provide/Providers' ? AppLinks.providerAppleStore
                        : AppLinks.appleStore
                    }
                    playLink={
                        help.title === 'Request/Clients' ? AppLinks.playStore
                        : help.title === 'Provide/Providers' ? AppLinks.providerPlayStore
                        : AppLinks.playStore
                    }
                />
                <div className="subLinks">
                    {
                        help.subLinks.map((link, index) => {
                            return <Link key={index} className="subLink" to={`/${help.id}/${link.id}`}>
                                <div className="subLinkIcon">
                                    <img alt="" src={link.image} width={25} />
                                    {link.title}
                                </div>
                                <img alt="" src={Icons.arrowRighty} width={20}/>
                            </Link>
                        })
                    }
                </div>
                <Footer />
            </>
        );
    } else if(loading !== true && noPage !== false) {
        return <NoPage />
    } else {
        return <FullPageShimmer />
    }
}