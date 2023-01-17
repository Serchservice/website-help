import '../../css/mainSubs.css';
import '../../css/subCategoryDocs.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CategoryImages, Icons, Images } from "../../config/assets";
import { HelpCategoryLinks, HelpLinks, MainLinks } from "../../config/links/links";
import { Title } from "../../config/custom/titleheader";
import { Footer } from "../../widgets/contents/widgets";
import { NoPage } from "../main/main";

export const ClientSubCategories = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [openSection, setOpenSection] = useState(-1);
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [questionMenu, setQuestionMenu] = useState(false);
    const [subSub, setSubSub] = useState(null);

    useEffect(() => {
        let category = HelpCategoryLinks.find(help => help.id);
        let subCategory = category.subLinks.find(help => help.id === id);
        let subSub = subCategory.subLinks.find(sub => sub);
        if(subCategory){
            setCategory(category);
            setSubCategory(subCategory);
            setSubSub(subSub);
        }
    }, [id]);

    const toogle = (index) => setOpenSection(index);

    const toggleQuestionMenu = () => setQuestionMenu(!questionMenu);

    subCategory ? Title(`${subCategory.title} || Serch Help`) : Title("Serch || Expecting you back");
    return(subCategory
        ?   <div className="serch">
                <div className="mobileHeader">
                    <header className="headerMobile">
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
                                    </div>
                                    <img alt="arrow"
                                        src={ open ? Icons.closeIcon : Icons.arrowDown }
                                        width={18} className="menuArrow"
                                    />
                                </div>
                        }
                        <div className={questionMenu ? "openQuestion Menu" : "closeQuestion Menu"}>
                            {
                                subCategory.subLinks.map((link, index) => {
                                    return <div key={index}
                                        className={ "dropSub drop" }
                                        onClick={() => toogle(index)}
                                    >
                                        <div className="subCategory">
                                            <h3 id={link.id}> {link.title} </h3>
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
                        </div>
                    </header>
                    <div className="keyHeaderMobile">
                        <div className="mobileRowLinks">
                            <div className="mobileLists"><img alt="" src={CategoryImages.option} onClick={toggleQuestionMenu}/></div>
                            <div className="rowLinks" >
                                <p className="rightCorner">{'||'}</p>
                                <Link to={`/${HelpLinks.clients}`} className="rowLink" > Request/Clients </Link>
                                <p className="leftCorner">{'||'}</p>
                                <Link to={`/${HelpLinks.clients}/${id}`} className="rowLink"> {subCategory.title} </Link>
                            </div>
                        </div>
                        <a href={ "/" } className="keyArrowBack">
                            <img alt="" src={ Icons.arrowLeft } width={25} />
                            <h3>Back to Help Hub</h3>
                        </a>
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
                    <div className="questionsGrid">
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
                                return <div key={index}
                                    className={ "dropSub drop" }
                                    onClick={() => toogle(index)}
                                >
                                    <div className="subCategory">
                                        <h3 id={link.id}> {link.title} </h3>
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
                    </div>
                    <div className="answersGrid">
                        <div className="keyHeaderTablet">
                            <a href={ "/" } className="keyArrowBack">
                                <img alt="" src={ Icons.arrowLeft } width={25} />
                                <h3>Back to Help Hub</h3>
                            </a>
                        </div>
                        {
                            subCategory.subLinks.map((link, index) => {
                                return <div key={index}
                                    className={ openSection === index ? "dropSub drop" : "downSub drop" }
                                    onClick={() => toogle(index)}
                                >
                                    <div className="subCategory">
                                        <h3 id={link.id}> {link.title} </h3>
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
                    </div>
                </div>
                <Footer />
            </div>
        : <NoPage />
    );
}

// export const ClientSubCategories = () => {
//     const { id } = useParams();
//     const [open, setOpen] = useState(false);
//     const [openSection, setOpenSection] = useState(-1);
//     const [category, setCategory] = useState(null);
//     const [subCategory, setSubCategory] = useState(null);
//     const [subSub, setSubSub] = useState(null);

//     useEffect(() => {
//         let category = HelpCategoryLinks.find(help => help.id);
//         let subCategory = category.subLinks.find(help => help.id === id);
//         let subSub = subCategory.subLinks.find(sub => sub);
//         if(subCategory){
//             setCategory(category);
//             setSubCategory(subCategory);
//             setSubSub(subSub);
//         }
//     }, [id]);

//     const toogle = (index) => setOpenSection(index);

//     subCategory ? Title(`${subCategory.title} || Serch Help`) : Title("Serch || Expecting you back");
//     return(subCategory
//         ?   <div className="serch">
//                 <header className="header">
//                     <div className="logo">
//                         <a href={ MainLinks.home }> <img alt="" src={ Images.serch.serchLogo } width={30} height={30} /> </a>
//                     </div>
//                     {
//                         open
//                         ?   <div className={open ? 'openDrop DropDown' : "closeDrop DropDown"} onClick={()=>setOpen(!open)}>
//                                 <div className="menu">
//                                     <Link to={`/${category.id}`} className="menuLink">{category.title}</Link>
//                                     <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
//                                     <Link to={`/${HelpLinks.business}`} className="menuLink">Business</Link>
//                                 </div>
//                                 <img alt="arrow" src={ open ? Icons.arrowUp : Icons.closeIcon } width={18} className="menuArrow"/>
//                             </div>
//                         :   <div className={open ? 'openDrop DropDown' : "closeDrop DropDown"} onClick={()=>setOpen(!open)}>
//                                 <div className="menu">
//                                     <article className="menuLink">{category.title}</article>
//                                     <article className="menuLink">Provide/Providers</article>
//                                     <article className="menuLink">Business</article>
//                                 </div>
//                                 <img alt="arrow"
//                                     src={ open ? Icons.closeIcon : Icons.arrowDown }
//                                     width={18} className="menuArrow"
//                                 />
//                             </div>
//                     }
//                 </header>
//                 <div className="support_section">
//                     <div className="keyHeader">
//                         <div className="keyHead">
//                             <div className="rowLinks" >
//                                 <p className="rightCorner">{'||'}</p>
//                                 <Link to={`/${HelpLinks.clients}`} className="rowLink" > Request/Clients </Link>
//                                 <p className="leftCorner">{'||'}</p>
//                                 <Link to={`/${HelpLinks.clients}/${id}`} className="rowLink"> {subCategory.title} </Link>
//                             </div>
//                         </div>
//                         <a href={ "/" } className="keyArrowBack">
//                             <img alt="" src={ Icons.arrowLeft } width={25} />
//                             <h3>Back to Help Hub</h3>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="subLinks" >
//                     {
//                         subCategory.subLinks.map((link, index) => {
//                             return <div key={index}
//                                 className={ openSection === index ? "dropSub drop" : "downSub drop" }
//                                 onClick={() => toogle(index)}
//                             >
//                                 <div className="subCategory">
//                                     <h3 id={link.id}> {link.title} </h3>
//                                     <img alt="" src={ openSection === index ? Icons.minus : Icons.plus } width={15} />
//                                 </div>
//                                 {
//                                     link.subLinks.map((item, index) => {
//                                         return <Link to={`/${HelpLinks.clients}/${id}/section/${item.id}`} key={index}
//                                             className="subSubCategory"
//                                         >
//                                             {item.title}
//                                             <img alt="" src={Icons.arrowRighty} width={20}/>
//                                         </Link>
//                                     })
//                                 }
//                             </div>
//                         })
//                     }
//                 </div>
//                 <Footer />
//             </div>
//         : <NoPage />
//     );
// }