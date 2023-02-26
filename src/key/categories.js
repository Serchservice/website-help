import '../css/mainSubs.css';
import '../css/subCategoryDocs.css';
import React, { useEffect, useState} from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Markdown from 'markdown-to-jsx';
import { CategoryImages, Icons, Images } from "../config/assets";
import { HelpCategoryLinks, HelpLinks, MainLinks } from "../config/links/links";
import { Footer, Title } from "../widgets/contents/widgets";
import { NoPage } from "./main";
import { ContactSupport } from '../widgets/container/link';
import { AnswerPageShimmer, CategoryPageShimmer } from '../widgets/contents/shimmer';
import useComponentVisible from '../hooks/mobile';
import { DocumentNotFound } from '../widgets/contents/notFound';

export const SubCategories = () => {
    const [open, setOpen] = useState(false);
    const [openSection, setOpenSection] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const { category, section } = useParams();
    const { ref, isVisible, setIsVisible } = useComponentVisible(false);
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState();
    // const history = unstable_HistoryRouter();

    const [loading, setLoading] = useState(false);
    const [noPage, setNoPage] = useState(false);

    useEffect(() => {
        setLoading(true)
        let cat = HelpCategoryLinks.find((link) => link.id === category)
        let sec = cat.subLinks.find((sublink) => sublink.id === section)
        if(sec || cat){
            setNoPage(false)
            setLoading(false)
            setFirst(cat)
            setSecond(sec)
        } else {
            setNoPage(true)
            setLoading(false)
        }
        // if(isVisible){
        //     document.getElementById('blurr').style.filter = 'blur(5px)';
        //     document.getElementById('blurred').style.filter = 'blur(5px)';
        // } else {
        //     document.getElementById('blurr').style.filter = 'blur(0px) grayscale(0%)';
        //     document.getElementById('blurred').style.filter = 'blur(0px) grayscale(0%)'
        // }
    }, [category, section, first, second, isVisible]);

    function openAndClose(index) {
        setOpenSection(index);
        if(openSection === index){
            setIsOpen(!isOpen);
        }
    }
    // ${isVisible ? "blur" : ""}
    // function handleOptionClick(route){
    //     history.push(route);
    //     setIsVisible(!isVisible);
    // }

    if(second != null && loading !== true && noPage !== true){
        Title(`${second.title} || Serch Help`)
    } else if(loading !== true && noPage !== false){
        Title("Serch || Expecting you back")
    } else {
        Title("Loading || Serch Help");
    }

    if(second != null && loading !== true && noPage !== true){
        return(
            <>
                <div className="mobileHeader">
                    <header className={`headerMobile`} >
                        <div className="logo">
                            <a href={ MainLinks.home }> <img alt="" src={ Images.serch.serchLogo } width={30} height={30} /> </a>
                        </div>
                        {
                            open ? <div className={'openDrop DropDown'} onClick={()=>setOpen(!open)}>
                                {
                                    first.title === "Request/Clients" ? <div className="menu">
                                        <Link to={`/${first.id}`} className="menuLink">{first.title}</Link>
                                        <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
                                        {/* <Link to={`/${HelpLinks.business}`} className="menuLink">Business</Link> */}
                                    </div>
                                    : first.title === "Provide/Providers" ? <div className="menu">
                                        <Link to={`/${first.id}`} className="menuLink">{first.title}</Link>
                                        <Link to={`/${HelpLinks.clients}`} className="menuLink">Request/Clients</Link>
                                        {/* <Link to={`/${HelpLinks.business}`} className="menuLink">Business</Link> */}
                                    </div>
                                    : <div className="menu">
                                        <Link to={`/${first.id}`} className="menuLink">{first.title}</Link>
                                        <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
                                        <Link to={`/${HelpLinks.clients}`} className="menuLink">Request/Clients</Link>
                                    </div>
                                }
                                <img alt="arrow" src={Icons.arrowUp} width={18} className="menuArrow"/>
                            </div> : <div className={"closeDrop DropDown"} onClick={()=>setOpen(!open)}>
                                <article className="menuLink">{first.title}</article>
                                <img alt="arrow" src={Icons.arrowDown} width={18} className="menuArrow" />
                            </div>
                        }
                    </header>
                    <div id="menu">
                        <article ref={ref} className={`Menu ${isVisible ? "openQuestion" : ""}`}>
                            <div className="arrowKeyBack" onClick={() => setIsVisible(!isVisible)}>
                                <img alt="" src={ Icons.arrowLeft } width={18} />
                                <h5>Back</h5>
                            </div>
                            {
                                second.subLinks.map((link, index) => {
                                    return(
                                        isOpen && openSection === index ? <nav key={index}
                                            className={"mobileQuestion"}
                                            onClick={() => openAndClose(index)}
                                        >
                                            <div className="subCategory">
                                                <h3> {link.title} </h3>
                                                <img alt="" src={Icons.minus} width={15} />
                                            </div>
                                            {
                                                link.subLinks.map((item, index) => {
                                                    return <div onClick={() => setIsVisible(false)}  key={index}>
                                                        <Link to={`${link.title}/${item.id}`} className="subSubCategory">
                                                            {item.title}
                                                            <img alt="" src={Icons.arrowRighty} width={20}/>
                                                        </Link>
                                                    </div>
                                                })
                                            }
                                        </nav> : <nav key={index}
                                            className={"mobileQuestion"}
                                            onClick={() => openAndClose(index)}
                                        >
                                            <div className="subCategory">
                                                <h3> {link.title} </h3>
                                                <img alt="" src={ Icons.plus } width={15} />
                                            </div>
                                        </nav>
                                    );
                                })
                            }
                        </article>
                    </div>
                    <div className={`mobileRowLinks`} id="blurred">
                        <div className="mobileLists">
                            <img alt="" src={CategoryImages.option} onClick={() => setIsVisible(!isVisible)} />
                        </div>
                        <div className="rowLinks" >
                            <p className="rightCorner">{'||'}</p>
                            <Link to={`/${category}`} className="rowLink" > {first.title} </Link>
                            <p className="leftCorner">{'||'}</p>
                            <Link to={`/${category}/${section}`} className="rowLink"> {second.title} </Link>
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
                                {
                                    first.title === "Request/Clients" ? <div className="menu">
                                        <Link to={`/${first.id}`} className="menuLink">{first.title}</Link>
                                        <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
                                        {/* <Link to={`/${HelpLinks.business}`} className="menuLink">Business</Link> */}
                                    </div>
                                    : first.title === "Provide/Providers" ? <div className="menu">
                                        <Link to={`/${first.id}`} className="menuLink">{first.title}</Link>
                                        <Link to={`/${HelpLinks.clients}`} className="menuLink">Request/Clients</Link>
                                        {/* <Link to={`/${HelpLinks.business}`} className="menuLink">Business</Link> */}
                                    </div>
                                    : <div className="menu">
                                        <Link to={`/${first.id}`} className="menuLink">{first.title}</Link>
                                        <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
                                        {/* <Link to={`/${HelpLinks.clients}`} className="menuLink">Request/Clients</Link> */}
                                    </div>
                                }
                                <img alt="arrow" src={ open ? Icons.arrowUp : Icons.closeIcon } width={18} className="menuArrow"/>
                            </div>
                        :   <div className={open ? 'openDrop DropDown' : "closeDrop DropDown"} onClick={()=>setOpen(!open)}>
                                <article className="menuLink">{first.title}</article>
                                <img alt="arrow"
                                    src={ open ? Icons.closeIcon : Icons.arrowDown } width={18} className="menuArrow"
                                />
                            </div>
                    }
                </header>
                <div className={`subCategoryLinks`} id="blurr">
                    <aside className="questionsGrid">
                        <ContactSupport link={"/"}/>
                        {
                            second.subLinks.map((link, index) => {
                                return(
                                    isOpen && openSection === index ? <nav key={index}
                                        className={"drop"}
                                        onClick={() => openAndClose(index)}
                                    >
                                        <div className="subCategory">
                                            <h3> {link.title} </h3>
                                            <img alt="" src={ Icons.minus } width={15} />
                                        </div>
                                        {
                                            link.subLinks.map((item, index) => {
                                                return <Link to={`${link.title}/${item.id}`} key={index}
                                                    className="subSubCategory"
                                                >
                                                    {item.title}
                                                    <img alt="" src={Icons.arrowRighty} width={20}/>
                                                </Link>
                                            })
                                        }
                                    </nav> : <nav key={index}
                                        className={"drop"}
                                        onClick={() => openAndClose(index)}
                                    >
                                        <div className="subCategory">
                                            <h3> {link.title} </h3>
                                            <img alt="" src={ Icons.plus } width={15} />
                                        </div>
                                    </nav>
                                );
                            })
                        }
                    </aside>
                    <Outlet />
                </div>
                <Footer />
            </>
        );
    } else if(loading !== true && noPage !== false) {
        return <NoPage />
    } else {
        return <CategoryPageShimmer />
    }
}

export const AnswerQuestionMap = () => {
    const { category, section} = useParams();
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState();

    const [loading, setLoading] = useState(true);
    const [noPage, setNoPage] = useState(false);

    useEffect(() => {
        setLoading(true)
        let cat = HelpCategoryLinks.find((link) => link.id === category)
        let sub = cat.subLinks.find((subLink) => subLink.id === section)
        if(sub){
            setNoPage(false)
            setLoading(false)
            setFirst(cat)
            setSecond(sub)
        } else {
            setNoPage(true)
            setLoading(false)
        }
    }, [category, section, first, second]);

    if(second != null && loading !== true && noPage !== true){
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
                        <Link to={`/${first.id}`} className="rowLink" > {first.title} </Link>
                        <p className="leftCorner">{'||'}</p>
                        <Link to={`/${first.id}/${second.id}`} className="rowLink"> {second.title} </Link>
                    </div>
                </div>
                {
                    second.subLinks.map((link, index) => {
                        return <nav key={index}>
                            <div className="subCategory">
                                <h2> {link.title} </h2>
                            </div>
                            {
                                link.subLinks.map((item, index) => {
                                    return <Link to={`${link.title}/${item.id}`} key={index}
                                        className="droppedSub drop"
                                    >
                                        {item.title}
                                    </Link>
                                })
                            }
                        </nav>
                    })
                }
            </main>
        );
    } else if(loading !== true && (second == null || noPage !== false)) {
        return <div>Sorry, not found</div>
    } else {
        return <AnswerPageShimmer />
    }
}

export const AnswerDescription = () => {
    const { category, section, questionSection, question } = useParams();
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState();
    const [third, setThird] = useState([]);
    const [fourth, setFourth] = useState([]);

    const [loading, setLoading] = useState(true);
    const [noPage, setNoPage] = useState(false);
    const [content, setContent] = useState("");

    useEffect(() => {
        setLoading(true)
        let cat = HelpCategoryLinks.find((link) => link.id === category)
        let subCat = cat.subLinks.find((sub) => sub.id === section)
        let quest = subCat.subLinks.find((title) => title.title === questionSection)
        let final = quest.subLinks.find((ask) => ask.id === question)
        if(final){
            fetch(final.desc).then(res => res.text()).then(document => {
                setContent(document)
                setNoPage(false)
                setLoading(false)
                setFirst(cat)
                setSecond(subCat)
                setThird(quest)
                setFourth(final)
            }).catch(error => {
                setContent(error)
                setNoPage(true)
                setLoading(false)
            })
        } else {
            setNoPage(true)
            setLoading(false)
        }
    }, [category, section, questionSection, question, first, second, third, fourth]);

    if(fourth != null && loading !== true && noPage !== true){
        return(
            <main>
                <div className="keyHeaderTablet">
                    <a href={ "/" } className="keyArrowBack">
                        <img alt="" src={ Icons.arrowLeft } width={25} />
                        <h3>Back to Help Hub</h3>
                    </a>
                </div>
                <div className="keyHeadTablet">
                    <div className="rowLinks" >
                        <p className="rightCorner">{'||'}</p>
                        <Link to={`/${first.id}`} className="rowLink" > {first.title} </Link>
                        <p className="leftCorner">{'||'}</p>
                        <Link to={`/${first.id}/${second.id}`} className="rowLink"> {second.title} </Link>
                        <p className="leftCorner">{'||'}</p>
                        <Link to={`/${first.id}/${second.id}/${questionSection}/${question}`} className="rowLink"> {fourth.title} </Link>
                    </div>
                </div>
                <Markdown children={content} />
            </main>
        );
    } else if(loading !== true && (second == null || noPage !== false || fourth == null)) {
        return <DocumentNotFound />
    } else {
        return <AnswerPageShimmer />
    }
}