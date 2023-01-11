import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Icons, Images } from "../../config/assets";
import { Title } from "../../config/custom/titleheader";
import { HelpCategoryLinks, HelpLinks, MainLinks } from "../../config/links/links";
import { Footer } from "../../widgets/contents/widgets";
import { NoPage } from "./main";

export const Description = () => {
    const {id} = useParams();
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [sub, setSub] = useState(null);
    const [section, setSection] = useState(null);

    useEffect(() => {
        let category = HelpCategoryLinks.find(cat => cat);
        let subCat = category.subLinks.find(subCat => subCat);
        let sub = subCat.subLinks.find(sub => sub);
        let section = sub.subLinks.find(section => section.id === id);

        if(category){
            setCategory(category);
            if(subCat){
                setSubCategory(subCat);
                if(sub){
                    setSub(sub);
                    if(section){
                        setSection(section);
                    }
                }
            }
        }
    }, [id]);

    section ? Title(`${section.title} || Serch Help`) : Title('Serch || Expecting You Back Soon');
    return(section
        ? <div className="serch">
            <header className="header">
                <div className="logo">
                    <a href={ MainLinks.home }> <img alt="" src={ Images.serch.serchLogo } width={30} height={30} /> </a>
                </div>
                <div className={open ? 'open DropDown' : "close DropDown"} onClick={()=>setOpen(!open)}>
                    {
                        category.id === 'clients'
                        ? <div className="menu">
                            <Link to={`/${category.id}`} className="menuLink">{category.title}</Link>
                            <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
                            <Link to={`/${HelpLinks.business}`} className="menuLink">Business</Link>
                        </div>
                        : category.id === 'providers'
                        ? <div className="menu">
                            <Link to={`/${category.id}`} className="menuLink">{category.title}</Link>
                            <Link to={`/${HelpLinks.clients}`} className="menuLink">Request/Clients</Link>
                            <Link to={`/${HelpLinks.business}`} className="menuLink">Business</Link>
                        </div>
                        : <div className="menu">
                            <Link to={`/${category.id}`} className="menuLink">{category.title}</Link>
                            <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
                            <Link to={`/${HelpLinks.clients}`} className="menuLink">Request/Clients</Link>
                        </div>
                    }
                    <img alt="arrow" src={ open ? Icons.arrowUp : Icons.arrowDown } width={18} className="menuArrow"/>
                </div>
            </header>
            <div className="support_section">
                <div className="keyHeader">
                    <div className="keyHead">
                        {
                            category.id === 'clients'
                            ? <div className="rowLinks">
                                <p className="rightCorner">{'>'}</p>
                                <Link to={`/${category.id}`} className="rowLink"> {category.title} </Link>
                                <p className="leftCorner">{'>'}</p>
                                <Link to={`/${category.id}/${subCategory.id}`} className="rowLink"> {subCategory.title} </Link>
                            </div>
                            : category.id === 'providers'
                            ? <div className="rowLinks">
                                <p className="rightCorner">{'>'}</p>
                                <Link to={`/${category.id}`} className="rowLink"> {category.title} </Link>
                                <p className="leftCorner">{'>'}</p>
                                <Link to={`/${category.id}/${subCategory.id}`} className="rowLink"> {subCategory.title} </Link>
                            </div>
                            : <div className="rowLinks">
                                <p className="rightCorner">{'>'}</p>
                                <Link to={`/${category.id}`} className="rowLink"> {category.title} </Link>
                                <p className="leftCorner">{'>'}</p>
                                <Link to={`/${category.id}/${subCategory.id}`} className="rowLink"> {subCategory.title} </Link>
                            </div>
                        }
                    </div>
                    <a href={ "/" } className="keyArrowBack">
                        <img alt="" src={ Icons.arrowLeft } width={25} />
                        <h3>Back to Help Hub</h3>
                    </a>
                </div>
            </div>
            <div className="desc">
                <div className="rowLinks">
                    <h3>{sub.title}</h3>
                    <h3 className="desc">/</h3>
                    <h3>{section.title}</h3>
                </div>
                {section.desc}
            </div>
            <Footer />
        </div>
        : <NoPage />
    );
}