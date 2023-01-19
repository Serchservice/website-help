import {
    ClientLocationIssue, ClientPaymentMethodSwitch, ClientProviderRatingChange, ClientProviderRefusedLocation
} from "../../../../documentation/client/help/others"
import {
    ClientDiscriminatedAgainst, ClientProviderProfileDidntMatchReality, ClientProviderWorkedDangerously,
    ClientReportASeriousIncident, ClientSafetyRelatedIssue
} from "../../../../documentation/client/help/safety"



export const ClientSafetySection = [
    {
        id: '249769548e5e3847-66a9-4580-a5a4-10c0b9',
        title: 'Report a serious incident with a provider',
        desc: ClientReportASeriousIncident
    },
    {
        id: '2755297693f8fe3c35-1975-41ac-96af-7f26ba',
        title: 'I was discriminated against by my provider',
        desc: ClientDiscriminatedAgainst
    },
    {
        id: '32162090568549c79-e733-4a3b-b2d5-1dc009',
        title: 'My provider didn\'t match the profile in my app',
        desc: ClientProviderProfileDidntMatchReality
    },
    {
        id: '174220714133e2b6e6-21a0-4bab-b917-8844b6',
        title: 'My provider worked dangerously',
        desc: ClientProviderWorkedDangerously
    },
    {
        id: '143761574ae473742-b377-4bf6-a57c-ab1b4a',
        title: 'I had a safety-related issue',
        desc: ClientSafetyRelatedIssue
    },
]

export const ClientUnprofessionalSection = [
    {
        id: '15528456450e5dd0d6-c20a-438a-add6-c3cdb4',
        title: 'I had an issue with my location',
        desc: ClientLocationIssue
    },
    {
        id: '300827213432edd39b-ac7f-4b89-a77e-3351ca',
        title: 'My provider refused my location',
        desc: ClientProviderRefusedLocation
    },
]

export const ClientHadADifferentSection = [
    {
        id: '3359951847acc7240c-17d1-42df-9ef1-39a43e',
        title: 'Switch the payment method for my subscription',
        desc: ClientPaymentMethodSwitch
    },
    {
        id: '3147350037953a1438-b8c6-4fee-b1c4-9fe5a4',
        title: 'How do I change the rating for a provider?',
        desc: ClientProviderRatingChange
    },
]

export const ClientFAQSection = []

export const ClientProviderDidNotArriveSection = []

export const ClientProviderNotSkilledEnoughSection = []