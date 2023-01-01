import { Link } from "react-router-dom";
import '../css/dropdown.css';

export const DropDownMenuLink = ({menuList}) => {
    return (
        <div className="dropdown">
            {
                menuList.map(menu => <Link to={ menu.id } className="menuLink"> { menu.title } </Link>)
            }
        </div>
    );
}