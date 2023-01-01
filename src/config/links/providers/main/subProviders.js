import { ID } from "../../../func/uniqueID"
import {
    ProviderBackgroundChecksSection, ProviderCantSignInSection, ProviderChangeAccountSettingsSection,
    ProviderCommonPhoneAppIssuesSection, ProviderRatingsandAcceptanceSection, ProviderUpdateDocumentsSection,
    ProviderUpdateProviderCategorySection
} from "../subLinks/accountAppIssues"
import { ProviderPromotionsSection, ProviderReferralSection } from "../subLinks/earningsPayment"
import {
    ProviderFromChatToServiceSection, ProviderGettingStartedSection, ProviderProvideShareSection, ProviderReceivingRequestSection,
    ProviderSigningUpSection
} from "../subLinks/guide"
import {
    ProviderAgreeingTermsAndConditionsSection, ProviderAvailableDataOnSerchSection, ProviderCommunityGuidelinesSection,
    ProviderLegalPrivacySection, ProviderPrivacyNoticeSection, ProviderRequestingDataFromSerch, ProviderRequestYourSerchDataSection,
    ProviderUnethicalBehaviourSection
} from "../subLinks/legal"
import {
    ProviderReportASeriousIncidentSection, ProviderUsingSWMSection, ProviderWasDiscriminatedAgainstSection,
    ProviderWasInvolvedInAnAccidentSection
} from "../subLinks/safetyAccessibility"



export const ProviderAccountAndAppIssues = [
    {
        id: ID(),
        title: 'Can\'t sign in or go online',
        subLinks: ProviderCantSignInSection
    },
    {
        id: ID(),
        title: 'Updating my service providing category',
        subLinks: ProviderUpdateProviderCategorySection
    },
    {
        id: ID(),
        title: 'Updating documents',
        subLinks: ProviderUpdateDocumentsSection
    },
    {
        id: ID(),
        title: 'Common phone and app issues',
        subLinks: ProviderCommonPhoneAppIssuesSection
    },
    {
        id: ID(),
        title: 'Background Checks',
        subLinks: ProviderBackgroundChecksSection
    },
    {
        id: ID(),
        title: 'Ratings and acceptance rates',
        subLinks: ProviderRatingsandAcceptanceSection
    },
    {
        id: ID(),
        title: 'Change account settings',
        subLinks: ProviderChangeAccountSettingsSection
    },
    {
        id: ID(),
        title: 'Managing providers',
        subLinks: "ProvLegal"
    },
]

export const ProviderEarningsAndPayments = [
    {
        id: ID(),
        title: 'Referrals',
        subLinks: ProviderReferralSection
    },
    {
        id: ID(),
        title: 'Promotions',
        subLinks: ProviderPromotionsSection
    },
    {
        id: ID(),
        title: 'Fees and Expenses',
        subLinks: "ProvLegal"
    },
    {
        id: ID(),
        title: 'General earnings information',
        subLinks: "ProvLegal"
    },
    {
        id: ID(),
        title: 'Wallet and earnings',
        subLinks: "ProvLegal"
    },
]

export const ProviderGuide = [
    {
        id: ID(),
        title: 'Signing up',
        subLinks: ProviderSigningUpSection
    },
    {
        id: ID(),
        title: 'Getting Started',
        subLinks: ProviderGettingStartedSection
    },
    {
        id: ID(),
        title: 'From Chat/Call to Request end',
        subLinks: ProviderFromChatToServiceSection
    },
    {
        id: ID(),
        title: 'Receiving Requests',
        subLinks: ProviderReceivingRequestSection
    },
    {
        id: ID(),
        title: 'What is Serch ProvideShare?',
        subLinks: ProviderProvideShareSection
    },
]

export const ProviderSafety = [
    {
        id: ID(),
        title: 'In-app Safety features',
        subLinks: ProviderUsingSWMSection
    },
    {
        id: ID(),
        title: 'I was discriminated against my client',
        subLinks: ProviderWasDiscriminatedAgainstSection
    },
    {
        id: ID(),
        title: 'Report a serious incident with a client',
        subLinks: ProviderReportASeriousIncidentSection
    },
    {
        id: ID(),
        title: 'I was involved in an incident',
        subLinks: ProviderWasInvolvedInAnAccidentSection
    },
]

export const ProviderAccessibility = [
    {
        id: ID(),
        title: 'Assisting clients with disabilities',
        subLinks: 'ProvLegal'
    },
    {
        id: ID(),
        title: 'Resources for providers with disabilities',
        subLinks: 'ProvLegal'
    },
]

export const ProviderLegalCompliance = [
    {
        id: ID(),
        title: 'Privacy Notice',
        subLinks: ProviderLegalPrivacySection
    },
    {
        id: ID(),
        title: 'Report Unethical Behaviour',
        subLinks: ProviderUnethicalBehaviourSection
    },
    {
        id: ID(),
        title: 'Request your personal Serch Data',
        subLinks: ProviderRequestYourSerchDataSection
    },
    {
        id: ID(),
        title: 'Community Guidelines',
        subLinks: ProviderCommunityGuidelinesSection
    },
    {
        id: ID(),
        title: 'Privacy Notice Information',
        subLinks: ProviderPrivacyNoticeSection
    },
    {
        id: ID(),
        title: 'Agreeing to terms and conditions',
        subLinks: ProviderAgreeingTermsAndConditionsSection
    },
    {
        id: ID(),
        title: 'What data is available on providers.serchservice.com',
        subLinks: ProviderAvailableDataOnSerchSection
    },
    {
        id: ID(),
        title: 'Requesting data from Serch',
        subLinks: ProviderRequestingDataFromSerch
    },
]