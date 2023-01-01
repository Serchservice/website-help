import { CategoryImages } from "../../../assets"
import {
    ProviderAccessibility, ProviderAccountAndAppIssues, ProviderEarningsAndPayments,
    ProviderGuide, ProviderLegalCompliance, ProviderSafety
} from "./subProviders"

export const ProvidersHelpLinks = {
    providers: '/providers/:id/',
    accountApp: 'account-and-app-issues',
    earningsPayment: 'earnings-and-payment',
    providingGuide: 'a-guide-to-skills-or-talent-providing',
    safety: 'safety',
    accessibility: 'accessbility',
    legalCompliance: 'legal-ethics-and-compliance',
}

export const ProviderLinks = [
    {
        id: ProvidersHelpLinks.accountApp,
        title: 'Account and App Issues',
        image: CategoryImages.app,
        subLinks: ProviderAccountAndAppIssues
    },
    {
        id: ProvidersHelpLinks.earningsPayment,
        title: 'Earnings and Payments',
        image: CategoryImages.earning,
        subLinks: ProviderEarningsAndPayments
    },
    {
        id: ProvidersHelpLinks.providingGuide,
        title: 'A Guide to Skill/Talent Providing',
        image: CategoryImages.guide,
        subLinks: ProviderGuide
    },
    {
        id: ProvidersHelpLinks.safety,
        title: 'Safety',
        image: CategoryImages.safety,
        subLinks: ProviderSafety
    },
    {
        id: ProvidersHelpLinks.accessibility,
        title: 'Accessibility',
        image: CategoryImages.accessible,
        subLinks: ProviderAccessibility
    },
    {
        id: ProvidersHelpLinks.legalCompliance,
        title: 'Legal Ethics and Compliance',
        image: CategoryImages.legal,
        subLinks: ProviderLegalCompliance
    },
]