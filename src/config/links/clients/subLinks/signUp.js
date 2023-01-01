import {
    ClientErrorSubscribing, ClientHowDoesSerchWork, ClientHowDoICreateASerchAccount, ClientNeedHelpSigningUpForAClientAccount,
    ClientPhoneOrEmailAlreadyInUse, ClientSigningUpAsAMinor
} from "../../../../pages/client/signUp/creating"
import {
    ClientDownloadingClientApp, ClientNeedMoreInfoOnSigninUpToProvideWithSerch, ClientSignupToProvideWithSerch,
    ClientUseSerchWithoutSmartphone
} from "../../../../pages/client/signUp/provideDownload"



export const ClientCreatingClientAccountSection = [
    {
        id: 'd',
        title: 'How does Serch work?',
        desc: ClientHowDoesSerchWork
    },
    {
        id: 'd',
        title: 'How do I create a Serch account?',
        desc: ClientHowDoICreateASerchAccount
    },
    {
        id: 'd',
        title: 'Signing up as a minor',
        desc: ClientSigningUpAsAMinor
    },
    {
        id: 'd',
        title: 'Error subscribing',
        desc: ClientErrorSubscribing
    },
    {
        id: 'd',
        title: 'I need help signing up for a client account',
        desc: ClientNeedHelpSigningUpForAClientAccount
    },
    {
        id: 'd',
        title: 'My phone or email is already in use',
        desc: ClientPhoneOrEmailAlreadyInUse
    },
]

export const ClientDownloadUserClientAppSection = [
    {
        id: 'd',
        title: 'Downloading the client app (Android and iOS)',
        desc: ClientDownloadingClientApp
    },
    {
        id: 'd',
        title: 'Use Serch without a smartphone',
        desc: ClientUseSerchWithoutSmartphone
    },
]

export const ClientSignUpToProvideSection = [
    {
        id: 'd',
        title: 'Signup to provide with Serch',
        desc: ClientSignupToProvideWithSerch
    },
    {
        id: 'd',
        title: 'Need more info about signing up to provide',
        desc: ClientNeedMoreInfoOnSigninUpToProvideWithSerch
    },
]

export const ClientHowToUseVoiceTextSection = [
    {
        id: 'd',
        title: 'Contact your provider with TalkBack',
        desc: ClientNeedMoreInfoOnSigninUpToProvideWithSerch
    },
    {
        id: 'd',
        title: 'Navigate the menu with TalkBack',
        desc: ClientNeedMoreInfoOnSigninUpToProvideWithSerch
    },
]

export const ClientCommunicateProblemProviderSection = []

export const ClientAccessibilityAtSerchSection = []