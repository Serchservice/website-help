import { Icons } from "../../config/assets";
import '../../css/serch.css';
import '../../css/home.css';
import { HelpCategoryLinks, MainLinks } from "../../config/links/links";
import { Link } from "react-router-dom";

export const HelpHomeHeader = () => {
    return (
        <div className="support_section">
            <div className="keyHeader">
                <h2>Serch Help Hub</h2>
                <a href={ MainLinks.helpAndSupport } className="keyArrowBack">
                    <img alt="" src={ Icons.arrowLeft } width={30} />
                    <h3>Back to Help and Support</h3>
                </a>
            </div>
            <div className="planheader">
                <h2>Welcome to Serch Help Hub</h2>
                <p>How can we help you today?</p>
            </div>
        </div>
    );
}

export const HelpHomeBody = () => {
    return <div className="categories">
        {
            HelpCategoryLinks.map((item, index) => {
                return <Link className="greyBg" to={ `/${item.id}`} key={ index }>
                    <img alt="" src={ item.image } width={40}/>
                    <h3> { item.title } </h3>
                </Link>
            })
        }
    </div>
}

