import cancelCharge from '../../docs/more/serviceTripIssues/cancelCharge.md';
import providerPay from '../../docs/more/serviceTripIssues/providerPay.md';
import providerRating from '../../docs/more/serviceTripIssues/providerRating.md';
import requestShare from '../../docs/more/serviceTripIssues/requestShare.md';
import waitTimeFees from '../../docs/more/serviceTripIssues/waitTimeFees.md';

export const ClientOnServiceTripIssues = [
    {
        id: '186784481f70b629-ed51-4cc1-8ffe-12abeb',
        title: 'Am I charged for canceling a service?',
        desc: cancelCharge
    },
    {
        id: '363538668650fc95be-8e77-4a82-a23e-8899ae',
        title: 'Wait time fees',
        desc: waitTimeFees
    },
    {
        id: '306538868950fc95be-8e87-7a12-u23d-8899gv',
        title: 'How RequestSharing works for me?',
        desc: requestShare
    },
]

export const ClientAfterServiceTripIssues = [
    {
        id: '128329131f71c791a-660e-4151-a44e-561002',
        title: 'Rating a provider',
        desc: providerRating
    },
    {
        id: '12506140a3cc90ca-8064-4aae-8340-f86fb0',
        title: 'How/When do I pay my provider?',
        desc: providerPay
    },
]