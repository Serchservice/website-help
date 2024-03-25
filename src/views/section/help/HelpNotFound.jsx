import { Link } from 'react-router-dom';
import '../../category/states/category-not-found.css';

const HelpNotFound = ({ message, section, category }) => {
    return (
        <div style={{ width: "100%" }}>
            <img
                alt="image"
                src="https://images.unsplash.com/photo-1513735539099-cf6e5d559d82?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyMHx8Y2l0eXxlbnwwfHx8fDE3MDkwMDg3ODl8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="error-image"
            />
            <div style={{height: "100px"}}></div>
            <div>
                <h1 className="error-text">{ message }</h1>
                <Link to={`/${ category }/${ section }`} className="error-navlink">
                    <div data-role="accordion-container" className="error-element accordion-element">
                        <div className="error-details">
                            <span className="error-text1">Head back to section </span>
                        </div>
                        <svg viewBox="0 0 1024 1024" data-role="accordion-icon" className="error-icon">
                            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                        </svg>
                    </div>
                </Link>
            </div>
            <div style={{height: "100px"}}></div>
        </div>
    )
}

export default HelpNotFound