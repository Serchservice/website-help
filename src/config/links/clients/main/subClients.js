import ClientCantSignInIssues from "../subLinks/accountPayment/signinIssues";
import ClientChangeAccountIssues from "../subLinks/accountPayment/changeaccountIssues";
import ClientPaymentIssues from "../subLinks/accountPayment/paymentIssues";
import ClientRewardIssues from "../subLinks/accountPayment/rewardIssues";
import ClientDataRequestIssues from "../subLinks/accountPayment/requestdataIssues";
import ClientUnknownChargeIssues from "../subLinks/accountPayment/unknownIssues";

import ClientSafetyIssues from "../subLinks/help/safetyIssues";
import ClientUnprofessionalIssues from "../subLinks/help/unprofessionIssues";
import ClientHelpDifferentIssues from "../subLinks/help/differentIssues";
import ClientFAQIssues from "../subLinks/help/faqIssues";
import ClientProviderSkillIssues from "../subLinks/help/skillIssues";

import ClientLegalPrivacyIssues from "../subLinks/more/legalPrivacyIssues";
import ClientGuestRequestIssues from "../subLinks/more/guestRequestIssues";
import ClientServiceRequestIssues from "../subLinks/more/serviceRequestIssues";
import { ClientAfterServiceTripIssues, ClientOnServiceTripIssues } from "../subLinks/more/serviceTripIssues";

import { ClientAccountCreateIssues, ClientSignUpToProvideIssues } from "../subLinks/signup/accountCreateIssues";
import {
    ClientAccessibilityAtSerchIssues, ClientCommunicateProblemProviderIssues, ClientDownloadUserClientAppIssues,
    ClientHowToUseVoiceTextIssues
} from "../subLinks/signup/accessibilityIssues";

export const ClientAccountAndPayment = [
    {
        title: 'I can\'t sign in or request a service',
        subLinks: ClientCantSignInIssues
    },
    {
        title: 'Changing my account settings',
        subLinks: ClientChangeAccountIssues
    },
    {
        title: 'Payment Options',
        subLinks: ClientPaymentIssues
    },
    {
        title: 'Promos, Credits and partnerships',
        subLinks: ClientRewardIssues
    },
    {
        title: 'Requesting Data as Card Issuer',
        subLinks: ClientDataRequestIssues
    },
    {
        title: 'I have an unknown charge',
        subLinks: ClientUnknownChargeIssues
    }
]

export const ClientMore = [
    {
        title: 'Legal, Privacy and other Inquiries',
        subLinks: ClientLegalPrivacyIssues
    },
    {
        title: 'Guest requests',
        subLinks: ClientGuestRequestIssues
    },
]

export const ClientGuide = [
    {
        title: 'Requesting for a service',
        subLinks: ClientServiceRequestIssues
    },
    {
        title: 'On a service trip',
        subLinks: ClientOnServiceTripIssues
    },
    {
        title: 'After my service trip',
        subLinks: ClientAfterServiceTripIssues
    },
]

export const ClientRewards = [
    // {
    //     title: 'I can\'t sign in or request a service',
    //     subLinks: "MoreOne"
    // },
    // {
    //     title: 'I can\'t sign in or request a service',
    //     subLinks: "MoreTwo"
    // },
    // {
    //     title: 'I can\'t sign in or request a service',
    //     subLinks: "MoreThree"
    // }
]

export const ClientSignUp = [
    {
        title: 'Creating a client account',
        subLinks: ClientAccountCreateIssues
    },
    {
        title: 'Downloading the user/client app',
        subLinks: ClientDownloadUserClientAppIssues
    },
    {
        title: 'Signing up to provide',
        subLinks: ClientSignUpToProvideIssues
    }
]

export const ClientAccessibility = [
    {
        title: 'How to Use VoiceText',
        subLinks: ClientHowToUseVoiceTextIssues
    },
    {
        title: 'How to communicate problems to a provider',
        subLinks: ClientCommunicateProblemProviderIssues
    },
    {
        title: 'Accessibility at Serch',
        subLinks: ClientAccessibilityAtSerchIssues
    }
]

export const ClientHelp = [
    {
        title: 'Safety',
        subLinks: ClientSafetyIssues
    },
    {
        title: 'My provider was unprofessional',
        subLinks: ClientUnprofessionalIssues
    },
    {
        title: 'I had a different issue',
        subLinks: ClientHelpDifferentIssues
    },
    {
        title: 'Frequently Asked Questions',
        subLinks: ClientFAQIssues
    },
    // {
    //     title: 'My provider did not arrive',
    //     subLinks: ClientProviderDidNotArriveSection
    // },
    {
        title: 'My provider was not skilled enough',
        subLinks: ClientProviderSkillIssues
    }
]