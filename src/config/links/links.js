import { Icons } from "../assets"
import { BusinessLinks } from "./business/main/business"
import { ClientLinks } from "./clients/main/clients"
import { ProviderLinks } from "./providers/main/providers"

export const MainLinks = {
    home: 'https://www.serchservice.com/',
    company: 'https://www.serchservice.com/company/',
    product: 'https://www.serchservice.com/product/',
    information: 'https://www.serchservice.com/information/',
    helpAndSupport: 'https://www.serchservice.com/support/'
}

export const SocialLinks = {
    twitter: 'https://www.twitter.com/serchservice/',
    facebook: 'https://www.facebook.com/serchservice/',
    instagram: 'https://www.instagram.com/serchservice/',
    linkedIn: 'https://www.linkedin.com/company/serchservice/'
}

export const AppLinks = {
    playStore: '/',
    appleStore: '/',
    providerPlayStore: '/',
    providerAppleStore: '/',
    signupProvider: '/',
    loginProvider: '/',
    signupUser: '/',
    loginUser: '/'
}

export const CompanyLinks = {
    about: 'https://www.serchservice.com/company/about/',
    blog: 'https://www.serchservice.com/company/blogs/',
    newsroom: 'https://www.serchservice.com/newsroom/',
    marketplace: 'https://www.serchservice.com/marketplace/',
    careers: 'https://www.serchservice.com/company/careers/'
}

export const ProductLinks = {
    business: 'https://www.serchservice.com/business/',
    request: 'https://www.serchservice.com/product/request/',
    provide: 'https://www.serchservice.com/product/providers/'
}

export const InformationLinks = {
    docs: 'https://www.serchservice.com/information/docs/',
    safety: 'https://www.serchservice.com/information/safety-guidelines/',
    payment: 'https://www.serchservice.com/information/pricing-and-payment-methods/',
    countries: 'https://www.serchservice.com/information/serch-and-countries/'
}

export const SupportLinks = {
    legal: 'https://www.serchservice.com/legal/',
    support: 'https://www.serchservice.com/support/hub/',
    help: '/',
}

export const LegalLinks = {
    communityGuidelines: 'https://www.serchservice.com/legal/document/community-guidelines/',
    cookiePolicy: 'https://www.serchservice.com/legal/document/cookie-policy/',
    feedbackPolicy: 'https://www.serchservice.com/legal/document/feedback-policy/',
    advertPolicy: 'https://www.serchservice.com/legal/document/global-advertising-content-policy/',
    discriminationPolicy: 'https://www.serchservice.com/legal/document/non-discrimination-policy/',
    privacyPolicy: 'https://www.serchservice.com/legal/document/privacy-policy/',
    referralProgramme: 'https://www.serchservice.com/legal/document/referral-programme/',
    termsAndConditions: 'https://www.serchservice.com/legal/document/terms-and-conditions/',
    userContent: 'https://www.serchservice.com/legal/document/user-generated-content/',
    zeroPolicy: 'https://www.serchservice.com/legal/document/zero-tolerance-policy/',
    accessibility: 'https://www.serchservice.com/legal/document/accessibility-policy/'
}

export const HelpLinks = {
    categories: ":category",
    subCategories: ":section",
    description: ':questionSection/:question',
    business: 'business',
    providers: 'providers',
    clients: 'clients',
}

export const HelpCategoryLinks = [
    {
        id: HelpLinks.clients,
        image: Icons.clients,
        title: 'Request/Clients',
        subLinks: ClientLinks,
    },
    {
        id: HelpLinks.business,
        image: Icons.business,
        title: 'Business',
        subLinks: BusinessLinks,
    },
    {
        id: HelpLinks.providers,
        image: Icons.providers,
        title: 'Provide/Providers',
        subLinks: ProviderLinks,
    }
]

export const ExternalLinks = {}