import { Images } from "../../config/assets"
import { Emails } from "../../config/custom/emails"
import { AppLinks, CompanyLinks, InformationLinks, ProductLinks, SocialLinks, SupportLinks } from "../../config/links/links"

export const CompanyLink = [{
    link: CompanyLinks.about,
    title: "About Us"
},{
    link: CompanyLinks.blog,
    title: "Blog"
},{
    link: CompanyLinks.newsroom,
    title: "Newsroom"
},{
    link: CompanyLinks.marketplace,
    title: "Marketplace"
},{
    link: CompanyLinks.careers,
    title: "Careers"
}]

export const ProductLink = [{
    title: "Serch for Business",
    link: ProductLinks.business
},{
    title: "Request",
    link: ProductLinks.request
},{
    title: "Provide",
    link: ProductLinks.provide
}]

export const InformationLink = [{
    title: "Safety guidelines",
    link: InformationLinks.safety
},{
    title: "Pricing & Payment Methods",
    link: InformationLinks.payment,
},{
    title: "Countries in Serch",
    link: InformationLinks.countries
}]

export const HelpAndSupportLink = [{
    title: "Legal Hub",
    link: SupportLinks.legal
},{
    title: "Help Hub",
    link: SupportLinks.help
},{
    title: "Support Hub",
    link: SupportLinks.support
},{
    title: "Improve our services",
    link: Emails.improve
},{
    title: "Report a broken feature",
    link: Emails.report
}]

export const FooterLinks = [{
    section: "Company",
    link: CompanyLink
},{
    section: "Product",
    link: ProductLink
},{
    section: "Information",
    link: InformationLink
},{
    section: "Help and Support",
    link: HelpAndSupportLink
}]

export const SerchAppDownloadLinks = [{
    image: Images.app.playStore,
    imageAlt: 'Serch Mobile App Playstore Android',
    link: AppLinks.playStore,
    height: "65px"
},{
    image: Images.app.appleStore,
    imageAlt: 'Serch Mobile App AppleStore iOS',
    link: AppLinks.appleStore,
    height: "65px"
}]

export const SocialMediaLinks = [{
    image: Images.social.twitter,
    imageAlt: 'Serch Twitter Link',
    link: SocialLinks.twitter,
},{
    image: Images.social.facebook,
    imageAlt: 'Serch Facebook Link',
    link: SocialLinks.facebook,
},{
    image: Images.social.gmail,
    imageAlt: 'Serch Email Link',
    link: Emails.help,
},{
    image: Images.social.instagram,
    imageAlt: 'Serch Instagram Link',
    link: SocialLinks.instagram,
},{
    image: Images.social.linkedIn,
    imageAlt: 'Serch LinkedIn Link',
    link: SocialLinks.linkedIn,
}]

export const FooterDocumentLinks = [{
    link: "https://www.serchservice.com/legal/document/privacy-policy",
    name: "Privacy"
},{
    link: "https://www.serchservice.com/legal/document/terms-and-conditions",
    name: "Terms"
},{
    link: "https://www.serchservice.com/legal/document/accessibility-policy",
    name: "Accessibility"
}]