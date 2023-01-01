import {
    ClientAppPermissions, ClientDataRequest, ClientLocationInformationUsage, ClientPrivacyNoticeInformation,
    ClientPrivacyPolicySubmit, ClientSerchCommunityGuidelines
} from "../../../../pages/client/more/legal"
import {
    ClientChargedForServiceCancel, ClientProviderRating, ClientRequestForSomeone, ClientSomeoneElseRequestedForMe, ClientWaitTimeFees
} from "../../../../pages/client/more/onAfterService"
import {
    ClientCancelingSerchRequest, ClientContactAProvider, ClientCTGUsage, ClientHowETAsWork, ClientHowToRequestService,
    ClientRequestingMoreThanOne, ClientRequestSharing, ClientSerchCityAvailability, ClientServiceAdvanceSchedule,
    ClientSpecificProviderRequest
} from "../../../../pages/client/more/serviceRequest"



export const ClientLegalPrivacySection = [
    {
        id: 'd',
        title: 'Serch Community Guidelines',
        desc: ClientSerchCommunityGuidelines
    },
    {
        id: 'dd',
        title: 'Privacy Notice Information',
        desc: ClientPrivacyNoticeInformation
    },
    {
        id: 'ddd',
        title: 'Serch app permissions (Android and iOS)',
        desc: ClientAppPermissions
    },
    {
        id: 'd',
        title: 'How Serch uses client location information (Android and iOS)',
        desc: ClientLocationInformationUsage
    },
    {
        id: 'dd',
        title: 'Requesting data from Serch',
        desc: ClientDataRequest
    },
    {
        id: 'ddd',
        title: 'Submit a privacy policy',
        desc: ClientPrivacyPolicySubmit
    },
]

export const ClientGuestRequestSection = [
    {
        id: '',
        title: 'Someone else requested service for me',
        desc: ClientSomeoneElseRequestedForMe
    },
    {
        id: '',
        title: 'Request a service for someone else',
        desc: ClientRequestForSomeone
    },
]

export const ClientRequestingForAService = [
    {
        id: '',
        title: 'How to request a service',
        desc: ClientHowToRequestService
    },
    {
        id: '',
        title: 'When and where is Serch available in my city?',
        desc: ClientSerchCityAvailability
    },
    {
        id: '',
        title: 'Requesting more than one service',
        desc: ClientRequestingMoreThanOne
    },
    {
        id: '',
        title: 'Scheduling a service in advance',
        desc: ClientServiceAdvanceSchedule
    },
    {
        id: '',
        title: 'Requesting a specific provider',
        desc: ClientSpecificProviderRequest
    },
    {
        id: '',
        title: 'What is RequestSharing?',
        desc: ClientRequestSharing
    },
    {
        id: '',
        title: 'How do ETAs work?',
        desc: ClientHowETAsWork
    },
    {
        id: '',
        title: 'Contact a provider',
        desc: ClientContactAProvider
    },
    {
        id: '',
        title: 'Canceling a Serch request',
        desc: ClientCancelingSerchRequest
    },
    {
        id: '',
        title: 'Using Connect-To-Go (CTG)',
        desc: ClientCTGUsage
    },
]

export const ClientOnAServiceTrip = [
    {
        id: '',
        title: 'Am I charged for canceling a service?',
        desc: ClientChargedForServiceCancel
    },
    {
        id: '',
        title: 'Wait time fees',
        desc: ClientWaitTimeFees
    },
]

export const ClientAfterMyServiceTrip = [
    {
        id: '',
        title: 'Rating a provider',
        desc: ClientProviderRating
    },
    {
        id: '',
        title: 'How are prices calculated?',
        desc: ''
    },
]