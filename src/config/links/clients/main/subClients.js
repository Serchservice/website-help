import {
    ClientAfterMyServiceTrip, ClientGuestRequestSection, ClientLegalPrivacySection,
    ClientOnAServiceTrip, ClientRequestingForAService
} from "../subLinks/moreGuide";
import {
    ClientCantSignInSection, ClientChangingAccountSettingSection, ClientPaymentOptionSection,
    ClientRequestingDataSection, ClientRewardsSection, ClientUnknownChargeSection
} from "../subLinks/accountPayment";
import {
    ClientAccessibilityAtSerchSection, ClientCommunicateProblemProviderSection, ClientCreatingClientAccountSection,
    ClientDownloadUserClientAppSection, ClientHowToUseVoiceTextSection, ClientSignUpToProvideSection
} from "../subLinks/signUp";
import {
    ClientFAQSection, ClientHadADifferentSection, ClientProviderDidNotArriveSection, ClientProviderNotSkilledEnoughSection,
    ClientSafetySection, ClientUnprofessionalSection
} from "../subLinks/help";
import { ID } from "../../../func/uniqueID";



export const ClientAccountAndPayment = [
    {
        id: ID(),
        title: 'I can\'t sign in or request a service',
        subLinks: ClientCantSignInSection
    },
    {
        id: ID(),
        title: 'Changing my account settings',
        subLinks: ClientChangingAccountSettingSection
    },
    {
        id: ID(),
        title: 'Payment Options',
        subLinks: ClientPaymentOptionSection
    },
    {
        id: ID(),
        title: 'Promos, Credits and partnerships',
        subLinks: ClientRewardsSection
    },
    {
        id: ID(),
        title: 'Requesting Data as Card Issuer',
        subLinks: ClientRequestingDataSection
    },
    {
        id: ID(),
        title: 'I have an unknown charge',
        subLinks: ClientUnknownChargeSection
    }
]

export const ClientMore = [
    {
        id: ID(),
        title: 'Legal, Privacy and other Inquiries',
        subLinks: ClientLegalPrivacySection
    },
    {
        id: ID(),
        title: 'Guest requests',
        subLinks: ClientGuestRequestSection
    },
]

export const ClientGuide = [
    {
        id: ID(),
        title: 'Requesting for a service',
        subLinks: ClientRequestingForAService
    },
    {
        id: ID(),
        title: 'On a service trip',
        subLinks: ClientOnAServiceTrip
    },
    {
        id: ID(),
        title: 'After my service trip',
        subLinks: ClientAfterMyServiceTrip
    },
]

export const ClientRewards = [
    {
        id: ID(),
        title: 'I can\'t sign in or request a service',
        subLinks: "MoreOne"
    },
    {
        id: ID(),
        title: 'I can\'t sign in or request a service',
        subLinks: "MoreTwo"
    },
    {
        id: ID(),
        title: 'I can\'t sign in or request a service',
        subLinks: "MoreThree"
    }
]

export const ClientSignUp = [
    {
        id: ID(),
        title: 'Creating a client account',
        subLinks: ClientCreatingClientAccountSection
    },
    {
        id: ID(),
        title: 'Downloading the user/client app',
        subLinks: ClientDownloadUserClientAppSection
    },
    {
        id: ID(),
        title: 'Signing up to provide',
        subLinks: ClientSignUpToProvideSection
    }
]

export const ClientAccessibility = [
    {
        id: ID(),
        title: 'How to Use VoiceText',
        subLinks: ClientHowToUseVoiceTextSection
    },
    {
        id: ID(),
        title: 'How to communicate problems to a provider',
        subLinks: ClientCommunicateProblemProviderSection
    },
    {
        id: ID(),
        title: 'Accessibility at Serch',
        subLinks: ClientAccessibilityAtSerchSection
    }
]

export const ClientHelp = [
    {
        id: ID(),
        title: 'Safety',
        subLinks: ClientSafetySection
    },
    {
        id: ID(),
        title: 'My provider was unprofessional',
        subLinks: ClientUnprofessionalSection
    },
    {
        id: ID(),
        title: 'I had a different issue',
        subLinks: ClientHadADifferentSection
    },
    {
        id: ID(),
        title: 'Frequently Asked Questions',
        subLinks: ClientFAQSection
    },
    {
        id: ID(),
        title: 'My provider did not arrive',
        subLinks: ClientProviderDidNotArriveSection
    },
    {
        id: ID(),
        title: 'My provider was not skilled enough',
        subLinks: ClientProviderNotSkilledEnoughSection
    }
]