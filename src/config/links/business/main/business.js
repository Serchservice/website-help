import { CategoryImages } from "../../../assets"
import { BusinessAccountAndBilling, BusinessSchedule, BusinessSignUp, BusinessDashBoard } from "./subBusiness"

export const BusinessHelpLinks = {
    accountBilling: 'account-and-billing',
    serviceSchedule: 'managing-service-schedule',
    signingUp: 'signing-up-in-serch-business',
    dashboard: 'using-serch-dashboard'
}

export const BusinessLinks = [
    {
        id: BusinessHelpLinks.accountBilling,
        title: 'Account and Billing',
        image: CategoryImages.account,
        subLinks: BusinessAccountAndBilling
    },
    {
        id: BusinessHelpLinks.serviceSchedule,
        title: 'Managing Service Schedule',
        image: CategoryImages.calendar,
        subLinks: BusinessSchedule
    },
    {
        id: BusinessHelpLinks.signingUp,
        title: 'Signing up in Serch Business',
        image: CategoryImages.signup,
        subLinks: BusinessSignUp
    },
    {
        id: BusinessHelpLinks.dashboard,
        title: 'Using Serch Dashboard',
        image: CategoryImages.dashboard,
        subLinks: BusinessDashBoard
    }
]