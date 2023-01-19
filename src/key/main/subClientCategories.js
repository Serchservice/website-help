import '../../css/mainSubs.css';
import '../../css/subCategoryDocs.css';
import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { CategoryImages, Icons, Images } from "../../config/assets";
import { HelpCategoryLinks, HelpLinks, MainLinks } from "../../config/links/links";
import { Title } from "../../config/custom/titleheader";
import { Footer } from "../../widgets/contents/widgets";
import { NoPage } from "./main";
import { ContactSupport } from '../../widgets/container/link';

export const SubClientCategories = () => {
    const { id, newId } = useParams();
    const [open, setOpen] = useState(false);
    const [openSection, setOpenSection] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [questionMenu, setQuestionMenu] = useState(false);

    useEffect(() => {
        let category = HelpCategoryLinks.find(help => help.id);
        let subCategory = category.subLinks.find(help => help.id === id);
        if(subCategory){
            setCategory(category);
            console.log(category.id)
            setSubCategory(subCategory);
        }
    }, [id, newId]);

    const openAndClose = (index) => {
        setIsOpen(!isOpen);
        // setOpenSection(index);
        // if(openSection === index){
        //     setIsOpen(!isOpen);
        // }
    }
    const toggleQuestionMenu = () => setQuestionMenu(!questionMenu);

    subCategory != null ? Title(`${subCategory.title} || Serch Help`) : Title("Serch || Expecting you back");
    if(subCategory != null){
        return(
            <div className="serch">
                <div className="mobileHeader">
                    <header className="headerMobile">
                        <div className="logo">
                            <a href={ MainLinks.home }> <img alt="" src={ Images.serch.serchLogo } width={30} height={30} /> </a>
                        </div>
                        {
                            open ? <div className={open ? 'openDrop DropDown' : "closeDrop DropDown"} onClick={()=>setOpen(!open)}>
                                <div className="menu">
                                    <Link to={`/${category.id}`} className="menuLink">{category.title}</Link>
                                    <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
                                    <Link to={`/${HelpLinks.business}`} className="menuLink">Business</Link>
                                </div>
                                <img alt="arrow" src={ open ? Icons.arrowUp : Icons.closeIcon } width={18} className="menuArrow"/>
                            </div> : <div className={open ? 'openDrop DropDown' : "closeDrop DropDown"} onClick={()=>setOpen(!open)}>
                                <div className="menu">
                                    <article className="menuLink">{category.title}</article>
                                </div>
                                <img alt="arrow" src={ open ? Icons.closeIcon : Icons.arrowDown } width={18} className="menuArrow" />
                            </div>
                        }
                    </header>
                    <div className={questionMenu ? "openQuestion Menu" : "Menu"}>
                        <div className="arrowKeyBack" onClick={toggleQuestionMenu}>
                            <img alt="" src={ Icons.arrowLeft } width={18} />
                            <h5>Back</h5>
                        </div>
                        {
                            subCategory.subLinks.map((link, index) => {
                                return <div key={index}
                                    className={ "dropSub drop" }
                                >
                                    <div className="subCategory">
                                        <h3> {link.title} </h3>
                                    </div>
                                    {
                                        link.subLinks.map((item, index) => {
                                            return <Link to={`/${HelpLinks.clients}/${id}/section/${item.id}`} key={index}
                                                className="subSubCategory"
                                            >
                                                {item.title}
                                                <img alt="" src={Icons.arrowRighty} width={20}/>
                                            </Link>
                                        })
                                    }
                                </div>
                            })
                        }
                    </div>
                    <div className="mobileRowLinks">
                        <div className="mobileLists"><img alt="" src={CategoryImages.option} onClick={toggleQuestionMenu}/></div>
                        <div className="rowLinks" >
                            <p className="rightCorner">{'||'}</p>
                            <Link to={`/${HelpLinks.clients}`} className="rowLink" > Request/Clients </Link>
                            <p className="leftCorner">{'||'}</p>
                            <Link to={`/${HelpLinks.clients}/${id}`} className="rowLink"> {subCategory.title} </Link>
                        </div>
                    </div>
                </div>
                <header className="headerTablet">
                    <div className="logo">
                        <a href={ MainLinks.home }> <img alt="" src={ Images.serch.serchLogo } width={30} height={30} /> </a>
                    </div>
                    {
                        open
                        ?   <div className={open ? 'openDrop DropDown' : "closeDrop DropDown"} onClick={()=>setOpen(!open)}>
                                <div className="menu">
                                    <Link to={`/${category.id}`} className="menuLink">{category.title}</Link>
                                    <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
                                    <Link to={`/${HelpLinks.business}`} className="menuLink">Business</Link>
                                </div>
                                <img alt="arrow" src={ open ? Icons.arrowUp : Icons.closeIcon } width={18} className="menuArrow"/>
                            </div>
                        :   <div className={open ? 'openDrop DropDown' : "closeDrop DropDown"} onClick={()=>setOpen(!open)}>
                                <div className="menu">
                                    <article className="menuLink">{category.title}</article>
                                    <article className="menuLink">Provide/Providers</article>
                                    <article className="menuLink">Business</article>
                                </div>
                                <img alt="arrow"
                                    src={ open ? Icons.closeIcon : Icons.arrowDown }
                                    width={18} className="menuArrow"
                                />
                            </div>
                    }
                </header>
                <div className="subCategoryLinks" >
                    <aside className="questionsGrid">
                        <ContactSupport link={"/"}/>
                        {
                            subCategory.subLinks.map((link, index) => {
                                return <div key={index}
                                    className={ isOpen ? "dropSub drop" : "downSub drop" }
                                    onClick={() => openAndClose(index)}
                                >
                                    <div className="subCategory">
                                        <h3> {link.title} </h3>
                                        <img alt="" src={ openSection === index ? Icons.minus : Icons.plus } width={15} />
                                    </div>
                                    {
                                        link.subLinks.map((item, index) => {
                                            return <Link to={`/${HelpLinks.clients}/${id}/section/${item.id}`} key={index}
                                                className="subSubCategory"
                                            >
                                                {item.title}
                                                <img alt="" src={Icons.arrowRighty} width={20}/>
                                            </Link>
                                        })
                                    }
                                </div>
                            })
                        }
                    </aside>
                    <QuestionMain id={id} subCategory={subCategory} />
                    {/* <Routes>
                        <Route path={`/clients/${subCategory.id}`} element={} />
                    </Routes> */}
                </div>
                <Footer />
            </div>
        );
    } else {
        return <NoPage />
    }
}

export const QuestionMain = ({id, subCategory}) => {
    return(
        <main className="answersGrid" >
            <div className="keyHeaderTablet">
                <a href={ "/" } className="keyArrowBack">
                    <img alt="" src={ Icons.arrowLeft } width={25} />
                    <h3>Back to Help Hub</h3>
                </a>
            </div>
            <div className="keyHeadTablet">
                <div className="rowLinks" >
                    <p className="rightCorner">{'||'}</p>
                    <Link to={`/${HelpLinks.clients}`} className="rowLink" > Request/Clients </Link>
                    <p className="leftCorner">{'||'}</p>
                    <Link to={`/${HelpLinks.clients}/${id}`} className="rowLink"> {subCategory.title} </Link>
                </div>
            </div>
            {
                subCategory.subLinks.map((link, index) => {
                    return <div key={index}>
                        <div className="subCategory">
                            <h2> {link.title} </h2>
                        </div>
                        {
                            link.subLinks.map((item, index) => {
                                return <Link to={`/${HelpLinks.clients}/${id}/section/${item.id}`} key={index}
                                    className="droppedSub drop"
                                >
                                    {item.title}
                                </Link>
                            })
                        }
                    </div>
                })
            }
        </main>
    );
}