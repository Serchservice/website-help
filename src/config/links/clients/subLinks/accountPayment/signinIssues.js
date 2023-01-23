import SubscriptionNotSuccessful from '../../docs/accountPayment/signinIssues/subscriptionNotSuccessful.md';
import TroubleShooting2FA from '../../docs/accountPayment/signinIssues/troubleshooting2FA.md';
import CantRequestService from '../../docs/accountPayment/signinIssues/cantRequestService.md';
import ForgotPassword from '../../docs/accountPayment/signinIssues/forgotPassword.md';
import ResetPassword from '../../docs/accountPayment/signinIssues/resetPassword.md';
import CantSignIn from '../../docs/accountPayment/signinIssues/cantSignIn.md';
import HackedAccount from '../../docs/accountPayment/signinIssues/hackedAccount.md';

const ClientCantSignInIssues = [
    {
        id: "326335200246f6ae00-d6f4-4951-9ceb-fe4be4",
        title: 'Why was my subscription not successful?',
        desc: SubscriptionNotSuccessful
    },
    {
        id: "38338093864d06f4bd-bd8c-4f6d-9fcc-92fdc3",
        title: 'Troubleshooting 2-Step Verification',
        desc: TroubleShooting2FA
    },
    {
        id: "1433321427c3f1653f-b3cd-405f-af82-190e8e",
        title: 'I can\'t request for a service',
        desc: CantRequestService
    },
    {
        id: "248697420685375514-1425-47aa-865d-997a72",
        title: 'I forgot my password',
        desc: ForgotPassword
    },
    {
        id: "757831422dd6dd61-c05f-4674-95d5-d9a39e",
        title: 'My password reset link isn\'t working',
        desc: ResetPassword
    },
    {
        id: "799329188efcf6048-6ab4-4486-9cd9-2d4b21",
        title: 'I can\'t sign in to my account',
        desc: CantSignIn
    },
    {
        id: "175810837298f1f56c-54de-4433-aa7a-010818",
        title: 'My account was hacked/stolen',
        desc: HackedAccount
    },
]

export default ClientCantSignInIssues;