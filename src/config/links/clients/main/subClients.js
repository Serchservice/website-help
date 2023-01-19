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

export const ClientAccountAndPayment = [
    {
        title: 'I can\'t sign in or request a service',
        subLinks: ClientCantSignInSection
    },
    {
        title: 'Changing my account settings',
        subLinks: ClientChangingAccountSettingSection
    },
    {
        title: 'Payment Options',
        subLinks: ClientPaymentOptionSection
    },
    {
        title: 'Promos, Credits and partnerships',
        subLinks: ClientRewardsSection
    },
    {
        title: 'Requesting Data as Card Issuer',
        subLinks: ClientRequestingDataSection
    },
    {
        title: 'I have an unknown charge',
        subLinks: ClientUnknownChargeSection
    }
]

export const ClientMore = [
    {
        title: 'Legal, Privacy and other Inquiries',
        subLinks: ClientLegalPrivacySection
    },
    {
        title: 'Guest requests',
        subLinks: ClientGuestRequestSection
    },
]

export const ClientGuide = [
    {
        title: 'Requesting for a service',
        subLinks: ClientRequestingForAService
    },
    {
        title: 'On a service trip',
        subLinks: ClientOnAServiceTrip
    },
    {
        title: 'After my service trip',
        subLinks: ClientAfterMyServiceTrip
    },
]

export const ClientRewards = [
    {
        title: 'I can\'t sign in or request a service',
        subLinks: "MoreOne"
    },
    {
        title: 'I can\'t sign in or request a service',
        subLinks: "MoreTwo"
    },
    {
        title: 'I can\'t sign in or request a service',
        subLinks: "MoreThree"
    }
]

export const ClientSignUp = [
    {
        title: 'Creating a client account',
        subLinks: ClientCreatingClientAccountSection
    },
    {
        title: 'Downloading the user/client app',
        subLinks: ClientDownloadUserClientAppSection
    },
    {
        title: 'Signing up to provide',
        subLinks: ClientSignUpToProvideSection
    }
]

export const ClientAccessibility = [
    {
        title: 'How to Use VoiceText',
        subLinks: ClientHowToUseVoiceTextSection
    },
    {
        title: 'How to communicate problems to a provider',
        subLinks: ClientCommunicateProblemProviderSection
    },
    {
        title: 'Accessibility at Serch',
        subLinks: ClientAccessibilityAtSerchSection
    }
]

export const ClientHelp = [
    {
        title: 'Safety',
        subLinks: ClientSafetySection
    },
    {
        title: 'My provider was unprofessional',
        subLinks: ClientUnprofessionalSection
    },
    {
        title: 'I had a different issue',
        subLinks: ClientHadADifferentSection
    },
    {
        title: 'Frequently Asked Questions',
        subLinks: ClientFAQSection
    },
    {
        title: 'My provider did not arrive',
        subLinks: ClientProviderDidNotArriveSection
    },
    {
        title: 'My provider was not skilled enough',
        subLinks: ClientProviderNotSkilledEnoughSection
    }
]