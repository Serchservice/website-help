import {
    ClientCannotSignIn, ClientCantRequestService, ClientForgotMyPassword, ClientHackedAccount,
    ClientPasswordResetLink, ClientSubscriptionNotSuccessful, ClientTroubleShootingVerify
} from "../../../../pages/client/accountPayment/cantSignIn"
import {
    ClientCantUpdateEmailAddress, ClientCantUpdatePhoneNumber, ClientChangeClientPicture,
    ClientDeleteAccount, ClientEditPersonalBusinessServiceProfile, ClientHelpDeleteAccount,
    ClientKnowMyRating, ClientManageFamilyAndFriendsProfile, ClientNotReceivingReceiptsOrEmails,
    ClientRatingDetermination, ClientTurnOn2StepVerification, ClientUpdatePersonalInformation
} from "../../../../pages/client/accountPayment/changeAccount"
import {
    ClientDifferentPaymentIssue, ClientPayingWithWallet, ClientUpdatePaymentOption
} from "../../../../pages/client/accountPayment/paymentOption"
import { ID } from "../../../func/uniqueID"

export const ClientCantSignInSection = [
    {
        id: ID(),
        title: 'Why was my subscription not successful?',
        desc: ClientSubscriptionNotSuccessful
    },
    {
        id: ID(),
        title: 'Troubleshooting 2-Step Verification',
        desc: ClientTroubleShootingVerify
    },
    {
        id: ID(),
        title: 'I can\'t request for a service',
        desc: ClientCantRequestService
    },
    {
        id: ID(),
        title: 'I forgot my password',
        desc: ClientForgotMyPassword
    },
    {
        id: ID(),
        title: 'My password reset link isn\'t working',
        desc: ClientPasswordResetLink
    },
    {
        id: ID(),
        title: 'I can\'t sign in to my account',
        desc: ClientCannotSignIn
    },
    {
        id: ID(),
        title: 'My account was hacked/stolen',
        desc: ClientHackedAccount
    },
]

export const ClientChangingAccountSettingSection = [
    {
        id: '',
        title: 'Update personal information',
        desc: ClientUpdatePersonalInformation
    },
    {
        id: '',
        title: 'Turn on 2-Step verification',
        desc: ClientTurnOn2StepVerification
    },
    {
        id: '',
        title: 'How is my rating determined?',
        desc: ClientRatingDetermination
    },
    {
        id: '',
        title: 'I would like to know my rating',
        desc: ClientKnowMyRating
    },
    {
        id: '',
        title: 'I\'m not receiving receipts or emails',
        desc: ClientNotReceivingReceiptsOrEmails
    },
    {
        id: '',
        title: 'Delete my Serch account',
        desc: ClientDeleteAccount
    },
    {
        id: '',
        title: 'I need help deleting my Serch account',
        desc: ClientHelpDeleteAccount
    },
    {
        id: '',
        title: 'Editing a personal or business service profile',
        desc: ClientEditPersonalBusinessServiceProfile
    },
    {
        id: '',
        title: 'Change client profile picture',
        desc: ClientChangeClientPicture
    },
    {
        id: '',
        title: 'I can\'t update my phone number',
        desc: ClientCantUpdatePhoneNumber
    },
    {
        id: '',
        title: 'I can\'t update my eamil address',
        desc: ClientCantUpdateEmailAddress
    },
    {
        id: '',
        title: 'Managing Serch Family and Friends profiles',
        desc: ClientManageFamilyAndFriendsProfile
    },
]

export const ClientPaymentOptionSection = [
    {
        id: '',
        title: 'Updating a payment method on your account',
        desc: ClientUpdatePaymentOption
    },
    {
        id: '',
        title: 'I have a different payment issue',
        desc: ClientDifferentPaymentIssue
    },
    {
        id: '',
        title: 'Paying with Wallets',
        desc: ClientPayingWithWallet
    }
]

export const ClientRewardsSection = [
    {
        id: '',
        title: 'Why was my subscription not successful?',
        desc: ''
    },
    {
        id: '',
        title: 'Why was my subscription not successful?',
        desc: ''
    },
    {
        id: '',
        title: 'Why was my subscription not successful?',
        desc: ''
    }
]

export const ClientUnknownChargeSection = [
    {
        id: '',
        title: 'Why was my subscription not successful?',
        desc: ''
    },
    {
        id: '',
        title: 'Why was my subscription not successful?',
        desc: ''
    },
    {
        id: '',
        title: 'Why was my subscription not successful?',
        desc: ''
    }
]

export const ClientRequestingDataSection = [
    {
        id: '',
        title: 'Why was my subscription not successful?',
        desc: ''
    },
    {
        id: '',
        title: 'Why was my subscription not successful?',
        desc: ''
    },
    {
        id: '',
        title: 'Why was my subscription not successful?',
        desc: ''
    }
]