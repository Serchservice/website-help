import {
    ClientLocationIssue, ClientPaymentMethodSwitch, ClientProviderRatingChange, ClientProviderRefusedLocation
} from "../../../../pages/client/help/others"
import {
    ClientDiscriminatedAgainst, ClientProviderProfileDidntMatchReality, ClientProviderWorkedDangerously,
    ClientReportASeriousIncident, ClientSafetyRelatedIssue
} from "../../../../pages/client/help/safety"



export const ClientSafetySection = [
    {
        id: 'd',
        title: 'Report a serious incident with a provider',
        desc: ClientReportASeriousIncident
    },
    {
        id: 'd',
        title: 'I was discriminated against by my provider',
        desc: ClientDiscriminatedAgainst
    },
    {
        id: 'd',
        title: 'My provider didn\'t match the profile in my app',
        desc: ClientProviderProfileDidntMatchReality
    },
    {
        id: 'd',
        title: 'My provider worked dangerously',
        desc: ClientProviderWorkedDangerously
    },
    {
        id: 'd',
        title: 'I had a safety-related issue',
        desc: ClientSafetyRelatedIssue
    },
]

export const ClientUnprofessionalSection = [
    {
        id: 'd',
        title: 'I had an issue with my location',
        desc: ClientLocationIssue
    },
    {
        id: 'd',
        title: 'My provider refused my location',
        desc: ClientProviderRefusedLocation
    },
]

export const ClientHadADifferentSection = [
    {
        id: 'd',
        title: 'Switch the payment method for my subscription',
        desc: ClientPaymentMethodSwitch
    },
    {
        id: 'd',
        title: 'How do I change the rating for a provider?',
        desc: ClientProviderRatingChange
    },
]

export const ClientFAQSection = []

export const ClientProviderDidNotArriveSection = []

export const ClientProviderNotSkilledEnoughSection = []