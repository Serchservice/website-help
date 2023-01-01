import '../css/footer.css';
import '../css/header.css';
import '../css/dropdown.css';
import { Link } from "react-router-dom";
import {
    AppLinks, CompanyLinks, InformationLinks, LegalLinks,
    MainLinks, ProductLinks, SocialLinks, SupportLinks
} from '../../config/links/links';
import { Emails } from '../../config/custom/emails';
import { Images } from '../../config/assets';


export const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href={ MainLinks.home }> <img alt="" src={ Images.serch.serchLogo } width={30} height={30} /> </a>
            </div>
            <div className="headerlinks">
                <a href={ AppLinks.loginUser }>Login</a>
                <a href={ AppLinks.signupUser }>Signup</a>
            </div>
        </header>
    );
}

export const Footer = () => {
    const getTime = new Date();
    const getHours = getTime.getHours();
    var getGreeting = () => {
        if(getHours < 12) {
            return "It's a new day. Let's make the most of it.";
        } else if(getHours === 12 && getHours < 18) {
            return "The day is not over. We can always start now.";
        }else if (getHours <= 21) {
            return "It's not over until you say it's over. Go all in now!";
        }else {
            return "Rest is as always important as your life is.";
        }
    }
    return (
        <footer className="footer">
            <div className="logo">
                <div className="greeting">
                    <h3>{getGreeting()}</h3>
                </div>
                <a href={ MainLinks.home }><img alt='' src={ Images.serch.serchLogoName } /></a>
            </div>
            <div className='footerlinks'>
                <div className='app'>
                    <a href={ AppLinks.playStore }><img alt='' src={ Images.app.playStore } /> </a>
                    <a href={ AppLinks.appleStore }><img alt='' src={ Images.app.appleStore } /> </a>
                </div>
                <div className='socialmedia'>
                    <a href={ SocialLinks.twitter }><img alt='' src={ Images.social.twitter } /> </a>
                    <a href={ SocialLinks.facebook }><img alt='' src={ Images.social.facebook } /> </a>
                    <a href={ Emails.help }><img alt='' src={ Images.social.gmail } /> </a>
                    <a href={ SocialLinks.instagram }><img alt='' src={ Images.social.instagram } /> </a>
                    <a href={ SocialLinks.linkedIn }><img alt='' src={ Images.social.linkedIn } /> </a>
                </div>
            </div>
            <div className='footerlist'>
                <div className='company'>
                    <h2>Company</h2>
                    <a href={ CompanyLinks.about } className="pageLink">About Us</a>
                    <a href={ CompanyLinks.blog } className="pageLink">Blog</a>
                    <a href={ CompanyLinks.newsroom } className="pageLink">Newsroom</a>
                    <a href={ CompanyLinks.marketplace } className="pageLink">Marketplace </a>
                    <a href={ CompanyLinks.careers } className="pageLink">Careers</a>
                </div>
                <div className='product'>
                    <h2>Product</h2>
                    <a href={ ProductLinks.business } className="pageLink">Serch for Business</a>
                    <a href={ ProductLinks.request } className="pageLink">Request</a>
                    <a href={ ProductLinks.provide } className="pageLink">Provide</a>
                </div>
                <div className='pricing'>
                    <h2>Information</h2>
                    <a href={ InformationLinks.docs } className="pageLink">Documentation</a>
                    <a href={ InformationLinks.safety } className="pageLink">Safety guidelines</a>
                    <a href={ InformationLinks.payment } className="pageLink">Pricing &  Payment Methods</a>
                    <a href={ InformationLinks.countries } className="pageLink">Countries in Serch</a>
                </div>
                <div className='support'>
                    <h2>Help and Support</h2>
                    <a href={ SupportLinks.legal } className="pageLink">Legal Hub</a>
                    <Link to={ SupportLinks.help } className="pageLink">Help Hub</Link>
                    <a href={ SupportLinks.support } className="pageLink">Support Hub</a>
                    <a href={ Emails.improve } className="pageLink">Improve our services</a>
                    <a href={ Emails.report } className="pageLink">Report a broken feature</a>
                </div>
            </div>
            <div className='footerbottom'>
                <div className='policy'>
                    <a href={ LegalLinks.privacyPolicy } className="pageLink">Privacy Policy</a>
                    <a href={ LegalLinks.termsAndConditions } className="pageLink">Terms of Service</a>
                    <a href={ LegalLinks.accessibility } className="pageLink">Accessibility</a>
                </div>
                <div className='bottom'>
                    <p>2022 Serch Inc. Tech.</p>
                </div>
            </div>
        </footer>
    );
}