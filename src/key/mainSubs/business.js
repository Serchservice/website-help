import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Icons, Images } from "../../config/assets";
import { HelpCategoryLinks, HelpLinks, MainLinks } from "../../config/links/links";
import { Title } from "../../config/custom/titleheader";
import { Footer } from "../../widgets/contents/widgets";
import { NoPage } from "../main/main";

export const BusinessSubCategories = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [openSection, setOpenSection] = useState(-1);
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);

    useEffect(() => {
        let category = HelpCategoryLinks.find(help => help.id === 'business');
        let subCategory = category.subLinks.find(help => help.id === id);
        if(subCategory){
            setCategory(category);
            setSubCategory(subCategory);
        }
    }, [id]);
    const toogle = (index) => setOpenSection(index);

    subCategory ? Title(`${subCategory.title} || Serch Help`) : Title("Serch || Expecting you back");
    return(subCategory
        ?   <div className="serch">
                <header className="header">
                    <div className="logo unknown">
                        <a href={ MainLinks.home }> <img alt="" src={ Images.serch.serchLogo } width={30} height={30} /> </a>
                    </div>
                    {
                        open
                        ?   <div className={open ? 'openDrop DropDown' : "closeDrop DropDown"} onClick={()=>setOpen(!open)}>
                                <div className="menu">
                                    <Link to={`/${category.id}`} className="menuLink">{category.title}</Link>
                                    <Link to={`/${HelpLinks.clients}`} className="menuLink">Request/Clients</Link>
                                    <Link to={`/${HelpLinks.providers}`} className="menuLink">Provide/Providers</Link>
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
                <div className="support_section">
                    <div className="keyHeader">
                        <div className="keyHead">
                            <div className="rowLinks">
                                <p className="rightCorner">{'>'}</p>
                                <Link to={`/${HelpLinks.business}`} className="rowLink"> Business </Link>
                                <p className="leftCorner">{'>'}</p>
                                <Link to={`/${HelpLinks.business}/${id}`} className="rowLink"> {subCategory.title} </Link>
                            </div>
                        </div>
                        <a href={ "/" } className="keyArrowBack">
                            <img alt="" src={ Icons.arrowLeft } width={25} />
                            <h3 className="">Back to Help Hub</h3>
                        </a>
                    </div>
                </div>
                <div className="subLinks">
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
                                        return <Link to={`/${HelpLinks.business}/${id}/section/${item.id}`} key={index}
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
                <Footer />
            </div>
        : <NoPage />
    );
}