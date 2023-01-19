import { Link } from "react-router-dom";

export const ContactSupport = ({link}) => {
    return(
        <div className="drop">
            <Link to={link}>Contact Support</Link>
        </div>
    );
}