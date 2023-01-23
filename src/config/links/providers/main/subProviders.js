import ProviderChangeAccountSettingIssues from "../subLinks/accountApp/accountSettingIssues"
import ProviderCommonAppIssues from "../subLinks/accountApp/commonAppIssues"
import {
    ProviderBackgroundCheckIssues, ProviderCantSignInIssues, ProviderCategoryUpdateIssues, ProviderRatingsandAcceptanceIssues
} from "../subLinks/accountApp/profileIssues"

import ProviderPromotionIssues from "../subLinks/earning/promotionIssues"
import ProviderReferralIssues from "../subLinks/earning/referralIssues"

import ProviderGettingStartedIssues from "../subLinks/guide/gettingstartedIssues"
import { ProviderFromChatToServiceIssues, ProviderProvideShareIssues, ProviderReceivingRequestIssues } from "../subLinks/guide/serviceIssues"
import ProviderSigningUpIssues from "../subLinks/guide/signupIssues"

import {
    ProviderAgreeingTermsAndConditionsIssues, ProviderAvailableDataOnSerchIssues, ProviderCommunityGuidelinesIssues,
    ProviderLegalPrivacyIssues, ProviderPrivacyNoticeIssues, ProviderRequestingDataFromSerchIssues, ProviderRequestYourSerchDataIssues,
    ProviderUnethicalBehaviourIssues
} from "../subLinks/legal/legal"

import {
    ProviderReportASeriousIncidentIssues, ProviderUsingSWMIssues, ProviderWasDiscriminatedAgainstIssues,
    ProviderWasInvolvedInAnAccidentIssues
} from "../subLinks/safetyAccessibility/safetyAccessibility"



export const ProviderAccountAndAppIssues = [
    {
        title: 'Can\'t sign in or go online',
        subLinks: ProviderCantSignInIssues
    },
    {
        title: 'Updating my service providing category',
        subLinks: ProviderCategoryUpdateIssues
    },
    // {
    //     title: 'Updating documents',
    //     subLinks: ProviderDocumentUpdateIssues
    // },
    {
        title: 'Common phone and app issues',
        subLinks: ProviderCommonAppIssues
    },
    {
        title: 'Background Checks',
        subLinks: ProviderBackgroundCheckIssues
    },
    {
        title: 'Ratings and acceptance rates',
        subLinks: ProviderRatingsandAcceptanceIssues
    },
    {
        title: 'Change account settings',
        subLinks: ProviderChangeAccountSettingIssues
    },
    // {
    //     title: 'Managing providers',
    //     subLinks: ProviderChangeAccountSettingsSection
    // },
]

export const ProviderEarningsAndPayments = [
    {
        title: 'Referrals',
        subLinks: ProviderReferralIssues
    },
    {
        title: 'Promotions',
        subLinks: ProviderPromotionIssues
    },
    // {
    //     title: 'Fees and Expenses',
    //     subLinks: ProviderChangeAccountSettingsSection
    // },
    // {
    //     title: 'General earnings information',
    //     subLinks: ProviderChangeAccountSettingsSection
    // },
    // {
    //     title: 'Wallet and earnings',
    //     subLinks: ProviderChangeAccountSettingsSection
    // },
]

export const ProviderGuide = [
    {
        title: 'Signing up',
        subLinks: ProviderSigningUpIssues
    },
    {
        title: 'Getting Started',
        subLinks: ProviderGettingStartedIssues
    },
    {
        title: 'From Chat/Call to Request end',
        subLinks: ProviderFromChatToServiceIssues
    },
    {
        title: 'Receiving Requests',
        subLinks: ProviderReceivingRequestIssues
    },
    {
        title: 'What is Serch ProvideShare?',
        subLinks: ProviderProvideShareIssues
    },
]

export const ProviderSafety = [
    {
        title: 'In-app Safety features',
        subLinks: ProviderUsingSWMIssues
    },
    {
        title: 'I was discriminated against my client',
        subLinks: ProviderWasDiscriminatedAgainstIssues
    },
    {
        title: 'Report a serious incident with a client',
        subLinks: ProviderReportASeriousIncidentIssues
    },
    {
        title: 'I was involved in an incident',
        subLinks: ProviderWasInvolvedInAnAccidentIssues
    },
]

export const ProviderAccessibility = [
    // {
    //     title: 'Assisting clients with disabilities',
    //     subLinks: ProviderChangeAccountSettingsIssues
    // },
    // {
    //     title: 'Resources for providers with disabilities',
    //     subLinks: ProviderChangeAccountSettingsIssues
    // },
]

export const ProviderLegalCompliance = [
    {
        title: 'Privacy Notice',
        subLinks: ProviderLegalPrivacyIssues
    },
    {
        title: 'Report Unethical Behaviour',
        subLinks: ProviderUnethicalBehaviourIssues
    },
    {
        title: 'Request your personal Serch Data',
        subLinks: ProviderRequestYourSerchDataIssues
    },
    {
        title: 'Community Guidelines',
        subLinks: ProviderCommunityGuidelinesIssues
    },
    {
        title: 'Privacy Notice Information',
        subLinks: ProviderPrivacyNoticeIssues
    },
    {
        title: 'Agreeing to terms and conditions',
        subLinks: ProviderAgreeingTermsAndConditionsIssues
    },
    {
        title: 'What data is available on providers.serchservice.com',
        subLinks: ProviderAvailableDataOnSerchIssues
    },
    {
        title: 'Requesting data from Serch',
        subLinks: ProviderRequestingDataFromSerchIssues
    },
]