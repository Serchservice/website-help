import {
    BusinessAccountSettingsandIssuesSection, BusinessFeesandChargeSection, BusinessPaymentOptionsSection
} from "../subLinks/accountBilling"
import { BusinessIssuesArrangingServiceSection, BusinessRequesstingandSchedulingSection } from "../subLinks/schedule"
import {
    BusinessBusinessAccountPrivacySection, BusinessHowtoSignUpSection, BusinessIsSoftwareRequiredSection,
    BusinessManagingEmployeesSection, BusinessNotificationsSection, BusinessViewingAccountActivitySection
} from "../subLinks/signUpDashboard"

export const BusinessAccountAndBilling = [
    {
        id: '',
        title: 'Payment options',
        subLinks: BusinessPaymentOptionsSection
    },
    {
        id: '',
        title: 'Account settings and issues',
        subLinks: BusinessAccountSettingsandIssuesSection
    },
    {
        id: '',
        title: 'Fees and charges',
        subLinks: BusinessFeesandChargeSection
    }
]

export const BusinessSchedule = [
    {
        id: '',
        title: 'Requesting and scheduling services',
        subLinks: BusinessRequesstingandSchedulingSection
    },
    {
        id: '',
        title: 'Issues arranging services',
        subLinks: BusinessIssuesArrangingServiceSection
    },
]

export const BusinessSignUp = [
    {
        id: '',
        title: 'How to sign up for Serch for Business',
        subLinks: BusinessHowtoSignUpSection
    },
    {
        id: '',
        title: 'Is software installation required to use Serch for Business',
        subLinks: BusinessIsSoftwareRequiredSection
    },
    {
        id: '',
        title: 'Business account privacy and security',
        subLinks: BusinessBusinessAccountPrivacySection
    }
]

export const BusinessDashBoard = [
    {
        id: '',
        title: 'Viewing account activity',
        subLinks: BusinessViewingAccountActivitySection
    },
    {
        id: '',
        title: 'What notifications can I receive on the dashboard?',
        subLinks: BusinessNotificationsSection
    },
    {
        id: '',
        title: 'Managing employees',
        subLinks: BusinessManagingEmployeesSection
    },
]