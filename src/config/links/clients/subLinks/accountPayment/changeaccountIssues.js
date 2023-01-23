import UpdatePersonal from '../../docs/accountPayment/changeaccountIssues/updatePersonal.md';
import UpdateEmail from '../../docs/accountPayment/changeaccountIssues/updateEmail.md';
import TurnOn2Step from '../../docs/accountPayment/changeaccountIssues/turnOn2Step.md';
import RatingDetermined from '../../docs/accountPayment/changeaccountIssues/ratingDetermined.md';
import NotReceivingEmails from '../../docs/accountPayment/changeaccountIssues/noEmailReceival.md';
import ManageFFProfile from '../../docs/accountPayment/changeaccountIssues/manageFFProfile.md';
import KnowMyRate from '../../docs/accountPayment/changeaccountIssues/knowMyRate.md';
import EditPBProfile from '../../docs/accountPayment/changeaccountIssues/editPBProfile.md';
import DeleteAccount from '../../docs/accountPayment/changeaccountIssues/deleteAccount.md';
import ChangePicture from '../../docs/accountPayment/changeaccountIssues/changePicture.md';

const ClientChangeAccountIssues = [
    {
        id: '1874231718ca00533e-17fe-416a-b22c-a296df',
        title: 'Update personal information',
        desc: UpdatePersonal
    },
    {
        id: '1622299744cc76ae96-41a4-4a76-92a2-25e6a3',
        title: 'Turn on 2-Step verification',
        desc: TurnOn2Step
    },
    {
        id: '19105115324d1e554-739d-463e-a0fc-265275',
        title: 'How is my rating determined?',
        desc: RatingDetermined
    },
    {
        id: '33038384544d923f77-f108-48bf-90a2-9b6e08',
        title: 'I would like to know my rating',
        desc: KnowMyRate
    },
    {
        id: '6210816696eaa171e-35eb-4abe-b907-c299b2',
        title: 'I\'m not receiving receipts or emails',
        desc: NotReceivingEmails
    },
    {
        id: '898032064066e8713-6e08-49f6-a1a0-501596',
        title: 'Delete my Serch account',
        desc: DeleteAccount
    },
    // {
    //     id: '388685035602fb297a-071a-4628-a7d3-425d01',
    //     title: 'I need help deleting my Serch account',
    //     desc: ClientHelpDeleteAccount
    // },
    {
        id: '3179458110996dff7d-ff5f-458e-80a5-b50f0f',
        title: 'Editing a personal or business service profile',
        desc: EditPBProfile
    },
    {
        id: '4484376062c811ed9-4926-4b3b-a411-06768e',
        title: 'Change client profile picture',
        desc: ChangePicture
    },
    // {
    //     id: '1867983778bc63ac59-bf5c-4f22-8c44-439d5a',
    //     title: 'I can\'t update my phone number',
    //     desc: ClientCantUpdatePhoneNumber
    // },
    {
        id: '25394531143016611c-ff10-4c2d-a7e2-75da7e',
        title: 'I can\'t update my eamil address',
        desc: UpdateEmail
    },
    {
        id: '1712758893f1339beb-61bd-44ff-97d0-8a9927',
        title: 'Managing Serch Family and Friends profiles',
        desc: ManageFFProfile
    },
]

export default ClientChangeAccountIssues;