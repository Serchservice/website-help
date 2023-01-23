import SeriousIncident from '../../docs/help/safetyIssues/seriousIncident.md';
import SafetyRelated from '../../docs/help/safetyIssues/safetyRelated.md';
import ProviderWorkedDangerously from '../../docs/help/safetyIssues/providerWorkedDangerously.md';
import NoMatch from '../../docs/help/safetyIssues/providerProfileNoMatch.md';
import Discriminated from '../../docs/help/safetyIssues/discriminated.md';

const ClientSafetyIssues = [
    {
        id: '249769548e5e3847-66a9-4580-a5a4-10c0b9',
        title: 'Report a serious incident with a provider',
        desc: SeriousIncident
    },
    {
        id: '2755297693f8fe3c35-1975-41ac-96af-7f26ba',
        title: 'I was discriminated against by my provider',
        desc: Discriminated
    },
    {
        id: '32162090568549c79-e733-4a3b-b2d5-1dc009',
        title: 'My provider didn\'t match the profile in my app',
        desc: NoMatch
    },
    {
        id: '174220714133e2b6e6-21a0-4bab-b917-8844b6',
        title: 'My provider worked dangerously',
        desc: ProviderWorkedDangerously
    },
    {
        id: '143761574ae473742-b377-4bf6-a57c-ab1b4a',
        title: 'I had a safety-related issue',
        desc: SafetyRelated
    },
]

export default ClientSafetyIssues;