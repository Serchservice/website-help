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
        title: 'Can\'t sign in or go online',
        subLinks: ProviderCantSignInSection
    },
    {
        title: 'Updating my service providing category',
        subLinks: ProviderUpdateProviderCategorySection
    },
    {
        title: 'Updating documents',
        subLinks: ProviderUpdateDocumentsSection
    },
    {
        title: 'Common phone and app issues',
        subLinks: ProviderCommonPhoneAppIssuesSection
    },
    {
        title: 'Background Checks',
        subLinks: ProviderBackgroundChecksSection
    },
    {
        title: 'Ratings and acceptance rates',
        subLinks: ProviderRatingsandAcceptanceSection
    },
    {
        title: 'Change account settings',
        subLinks: ProviderChangeAccountSettingsSection
    },
    {
        title: 'Managing providers',
        subLinks: ProviderChangeAccountSettingsSection
    },
]

export const ProviderEarningsAndPayments = [
    {
        title: 'Referrals',
        subLinks: ProviderReferralSection
    },
    {
        title: 'Promotions',
        subLinks: ProviderPromotionsSection
    },
    {
        title: 'Fees and Expenses',
        subLinks: ProviderChangeAccountSettingsSection
    },
    {
        title: 'General earnings information',
        subLinks: ProviderChangeAccountSettingsSection
    },
    {
        title: 'Wallet and earnings',
        subLinks: ProviderChangeAccountSettingsSection
    },
]

export const ProviderGuide = [
    {
        title: 'Signing up',
        subLinks: ProviderSigningUpSection
    },
    {
        title: 'Getting Started',
        subLinks: ProviderGettingStartedSection
    },
    {
        title: 'From Chat/Call to Request end',
        subLinks: ProviderFromChatToServiceSection
    },
    {
        title: 'Receiving Requests',
        subLinks: ProviderReceivingRequestSection
    },
    {
        title: 'What is Serch ProvideShare?',
        subLinks: ProviderProvideShareSection
    },
]

export const ProviderSafety = [
    {
        title: 'In-app Safety features',
        subLinks: ProviderUsingSWMSection
    },
    {
        title: 'I was discriminated against my client',
        subLinks: ProviderWasDiscriminatedAgainstSection
    },
    {
        title: 'Report a serious incident with a client',
        subLinks: ProviderReportASeriousIncidentSection
    },
    {
        title: 'I was involved in an incident',
        subLinks: ProviderWasInvolvedInAnAccidentSection
    },
]

export const ProviderAccessibility = [
    {
        title: 'Assisting clients with disabilities',
        subLinks: ProviderChangeAccountSettingsSection
    },
    {
        title: 'Resources for providers with disabilities',
        subLinks: ProviderChangeAccountSettingsSection
    },
]

export const ProviderLegalCompliance = [
    {
        title: 'Privacy Notice',
        subLinks: ProviderLegalPrivacySection
    },
    {
        title: 'Report Unethical Behaviour',
        subLinks: ProviderUnethicalBehaviourSection
    },
    {
        title: 'Request your personal Serch Data',
        subLinks: ProviderRequestYourSerchDataSection
    },
    {
        title: 'Community Guidelines',
        subLinks: ProviderCommunityGuidelinesSection
    },
    {
        title: 'Privacy Notice Information',
        subLinks: ProviderPrivacyNoticeSection
    },
    {
        title: 'Agreeing to terms and conditions',
        subLinks: ProviderAgreeingTermsAndConditionsSection
    },
    {
        title: 'What data is available on providers.serchservice.com',
        subLinks: ProviderAvailableDataOnSerchSection
    },
    {
        title: 'Requesting data from Serch',
        subLinks: ProviderRequestingDataFromSerch
    },
]