import appDownload from "../../docs/accountApp/commonAppIssues/appDownload.md";
import appDownloadIssues from "../../docs/accountApp/commonAppIssues/appDownloadIssues.md";
import appUpdate from "../../docs/accountApp/commonAppIssues/appUpdate.md";
import cantCreateAccount from "../../docs/accountApp/commonAppIssues/cantCreateAccount.md";
import contactClients from "../../docs/accountApp/commonAppIssues/contactClients.md";
import freezingOrCrashing from "../../docs/accountApp/commonAppIssues/freezingOrCrashing.md";
import gpsIssue from "../../docs/accountApp/commonAppIssues/gpsIssue.md";
import hotPhone from "../../docs/accountApp/commonAppIssues/hotPhone.md";
import iOSVersion from "../../docs/accountApp/commonAppIssues/iOSVersion.md";
import locationUnable from "../../docs/accountApp/commonAppIssues/locationUnable.md";
import networkError from "../../docs/accountApp/commonAppIssues/networkError.md";
import osUpdate from "../../docs/accountApp/commonAppIssues/osUpdate.md";
import otherAppsWhileOnUsage from "../../docs/accountApp/commonAppIssues/otherAppsWhileOnUsage.md";
import phoneNotCharging from "../../docs/accountApp/commonAppIssues/phoneNotCharging.md";
import requestOnRequest from "../../docs/accountApp/commonAppIssues/requestOnRequest.md";
import takeAPhoto from "../../docs/accountApp/commonAppIssues/takeAPhoto.md";

const ProviderCommonAppIssues = [
    {
        id: '1850762815185f495e-f952-41aa-9dc1-51bc07',
        title: 'Can I use other apps to receive personal calls while online?',
        desc: otherAppsWhileOnUsage
    },
    {
        id: '71893141cef8bc6-c76c-4a3e-abfc-4974ef',
        title: 'Unable to contact clients',
        desc: contactClients
    },
    {
        id: '6153332377a93bdad-fa91-433a-8dec-00d93f',
        title: 'Updating the Provider app (Android and iOS)',
        desc: appUpdate
    },
    // {
    //     id: '3724865285712153c-d958-43bd-9ba8-18ed40',
    //     title: 'Using other apps or getting calls while online',
    //     desc: ''
    // },
    {
        id: '1415411656579edaa3-cdea-4888-8816-38cba0',
        title: 'Why am I being asked to take a photo of myself?',
        desc: takeAPhoto
    },
    {
        id: '15245608024223a00a-436a-4522-aaad-f009b9',
        title: 'The app is freezing or crashing (Android and iOS)',
        desc: freezingOrCrashing
    },
    {
        id: '109243532732af8aab-616c-406b-b8cc-594d52',
        title: 'Why is the app "Unable to determine my location"?',
        desc: locationUnable
    },
    {
        id: '337799343f1853246-3198-4ce9-abdd-8f13a8',
        title: 'Why is my mobile phone hot?',
        desc: hotPhone
    },
    {
        id: '4101625870526b3eed-84c2-44ea-a476-dff209',
        title: 'What iOS version do I need to accept requests?',
        desc: iOSVersion
    },
    {
        id: '1173818022d8a65d44-4361-4512-bdce-1056e5',
        title: 'My phone won\'t charge',
        desc: phoneNotCharging
    },
    {
        id: '16650453737cd5fe38-5848-436b-8f53-1ee30f',
        title: 'Getting another request while on a request',
        desc: requestOnRequest
    },
    {
        id: '3229409454944f886f-25b3-47a2-abca-d9d2e5',
        title: 'Had an issue downloading the app (Android and iOS)',
        desc: appDownloadIssues
    },
    {
        id: '3256989092e13991c6-46e6-419c-a4ca-b6aa7b',
        title: 'Downloading Serch app for Provider on iOS',
        desc: appDownload
    },
    {
        id: '4115288087a4d5a3b3-97d5-4970-afd2-47a034',
        title: 'I cant\'t create my account',
        desc: cantCreateAccount
    },
    {
        id: '1055346763b79a246e-42d3-403f-bed5-734ccf',
        title: 'My phone says "Network Error"',
        desc: networkError
    },
    {
        id: '1854765781d80d4ccd-6136-4489-a933-ed7e1b',
        title: 'Had a GPS issue with a request',
        desc: gpsIssue
    },
    {
        id: '611173129df54bdb3-38f1-4b19-a86c-32907a',
        title: 'How to update your OS (Android)',
        desc: osUpdate
    },
]

export default ProviderCommonAppIssues;