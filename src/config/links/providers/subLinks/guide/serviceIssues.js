import audioCustomize from '../../docs/guide/serviceIssues/audioCustomize.md'
import cancelRequest from '../../docs/guide/serviceIssues/cancelRequest.md'
import contactClient from '../../docs/guide/serviceIssues/contactClient.md'
import endRequest from '../../docs/guide/serviceIssues/endRequest.md'
import incident from '../../docs/guide/serviceIssues/incident.md'
import locationShare from '../../docs/guide/serviceIssues/locationShare.md'
import longServiceAccept from '../../docs/guide/serviceIssues/longServiceAccept.md'
import mostProviders from '../../docs/guide/serviceIssues/mostProviders.md'
import navigationSounds from '../../docs/guide/serviceIssues/navigationSounds.md'
import providerDestination from '../../docs/guide/serviceIssues/providerDestination.md'
import provideShare from '../../docs/guide/serviceIssues/provideShare.md'
import thirdPartyNav from '../../docs/guide/serviceIssues/thirdPartyNav.md'
import whereToProvide from '../../docs/guide/serviceIssues/whereToProvide.md'

export const ProviderFromChatToServiceIssues = [
    {
        id: '462335272fae008fc-3201-4a2c-8af6-3bd495',
        title: 'When and where are the most providers?',
        desc: mostProviders
    },
    {
        id: '4107532626b284d26d-d532-4fed-ad2d-5e7947',
        title: 'Where can I provide with Serch?',
        desc: whereToProvide
    },
    {
        id: '95739770961157fc5-17dc-460e-af5b-3fdd43',
        title: 'Audio customization',
        desc: audioCustomize
    },
    {
        id: '1740988304ec59526a-6406-4340-9299-b56325',
        title: 'Accepting long service requests',
        desc: longServiceAccept
    },
    {
        id: '14228781131072bade-cd86-4fc2-af5b-963074',
        title: 'Set a Provider Destination',
        desc: providerDestination
    },
    {
        id: '31555030574643fc56-9bbb-4013-a26d-3f258a',
        title: 'Ending a request',
        desc: endRequest
    },
    {
        id: '36954691750c93ff2c-7f46-4c8d-93a6-aa93ae',
        title: 'Contacting a client',
        desc: contactClient
    },
    {
        id: '18668992488e5c3a2f-0bb5-4d2f-8322-76d842',
        title: 'Turning navigation features/sounds on and off',
        desc: navigationSounds
    },
    {
        id: '229946643059fcc71b-c6ed-42b2-bda3-309a5a',
        title: 'Using a third-party navigation app',
        desc: thirdPartyNav
    },
    {
        id: '181883615298e7285-cb96-4e41-b24a-096168',
        title: 'Provider location sharing',
        desc: locationShare
    },
    {
        id: '9128119264f6f3ed7-6cb6-4c6e-859b-9cb092',
        title: 'In case of an incident',
        desc: incident
    },
]

export const ProviderReceivingRequestIssues = [{
    id: '33774675490364174b-3811-411a-927a-9648ff',
    title: 'Canceling a request',
    desc: cancelRequest
}]

export const ProviderProvideShareIssues = [{
    id: '1987263104468102a1-7dcc-4d68-a7c9-9678d4',
    title: 'What is Serch ProvideShare?',
    desc: provideShare
}]