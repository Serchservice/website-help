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
        title: 'Payment options',
        subLinks: BusinessPaymentOptionsSection
    },
    {
        title: 'Account settings and issues',
        subLinks: BusinessAccountSettingsandIssuesSection
    },
    {
        title: 'Fees and charges',
        subLinks: BusinessFeesandChargeSection
    }
]

export const BusinessSchedule = [
    {
        title: 'Requesting and scheduling services',
        subLinks: BusinessRequesstingandSchedulingSection
    },
    {
        title: 'Issues arranging services',
        subLinks: BusinessIssuesArrangingServiceSection
    },
]

export const BusinessSignUp = [
    {
        title: 'How to sign up for Serch for Business',
        subLinks: BusinessHowtoSignUpSection
    },
    {
        title: 'Is software installation required to use Serch for Business',
        subLinks: BusinessIsSoftwareRequiredSection
    },
    {
        title: 'Business account privacy and security',
        subLinks: BusinessBusinessAccountPrivacySection
    }
]

export const BusinessDashBoard = [
    {
        title: 'Viewing account activity',
        subLinks: BusinessViewingAccountActivitySection
    },
    {
        title: 'What notifications can I receive on the dashboard?',
        subLinks: BusinessNotificationsSection
    },
    {
        title: 'Managing employees',
        subLinks: BusinessManagingEmployeesSection
    },
]