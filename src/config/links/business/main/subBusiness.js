import { BusinessAccountSettingIssues } from "../subLinks/accountAndBilling/accountIssues"
import { BusinessFeesandChargeIssues, BusinessPaymentIssues } from "../subLinks/accountAndBilling/paymentIssues"
import { BusinessAccountPrivacyIssues, BusinessHowtoSignUpIssues, BusinessIsSoftwareRequiredIssues, BusinessNotificationIssues, BusinessViewingAccountActivityIssues } from "../subLinks/dashboard/dashboardIssues"
import BusinessEmployeesManagementIssues from "../subLinks/dashboard/manageIssues"
import { BusinessArrangingServiceIssues, BusinessRequestandScheduleIssues } from "../subLinks/schedule/scheduleIssues"

export const BusinessAccountAndBilling = [
    {
        title: 'Payment options',
        subLinks: BusinessPaymentIssues
    },
    {
        title: 'Account settings and issues',
        subLinks: BusinessAccountSettingIssues
    },
    {
        title: 'Fees and charges',
        subLinks: BusinessFeesandChargeIssues
    }
]

export const BusinessSchedule = [
    {
        title: 'Requesting and scheduling services',
        subLinks: BusinessRequestandScheduleIssues
    },
    {
        title: 'Issues arranging services',
        subLinks: BusinessArrangingServiceIssues
    },
]

export const BusinessSignUp = [
    {
        title: 'How to sign up for Serch for Business',
        subLinks: BusinessHowtoSignUpIssues
    },
    {
        title: 'Is software installation required to use Serch for Business',
        subLinks: BusinessIsSoftwareRequiredIssues
    },
    {
        title: 'Business account privacy and security',
        subLinks: BusinessAccountPrivacyIssues
    }
]

export const BusinessDashBoard = [
    {
        title: 'Viewing account activity',
        subLinks: BusinessViewingAccountActivityIssues
    },
    {
        title: 'What notifications can I receive on the dashboard?',
        subLinks: BusinessNotificationIssues
    },
    {
        title: 'Managing employees',
        subLinks: BusinessEmployeesManagementIssues
    },
]