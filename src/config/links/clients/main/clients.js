import { CategoryImages } from "../../../assets"
import {
    ClientAccessibility, ClientAccountAndPayment, ClientGuide, ClientHelp, ClientMore, ClientRewards, ClientSignUp
} from "./subClients"

export const ClientsHelpLinks = {
    accountPayment: 'account-and-payment-options',
    more: 'more',
    serchGuide: 'your-guide-in-serch',
    rewards: 'serch-rewards',
    signUp: 'signing-up-in-serch',
    accessibility: 'accessibility',
    serviceTrip: 'help-with-service-trip'
}

export const ClientLinks = [
    {
        id: ClientsHelpLinks.accountPayment,
        title: 'Account and Payment Options',
        image: CategoryImages.account,
        subLinks: ClientAccountAndPayment
    },
    {
        id: ClientsHelpLinks.more,
        title: 'More',
        image: CategoryImages.more,
        subLinks: ClientMore
    },
    {
        id: ClientsHelpLinks.serchGuide,
        title: 'Your Guide to Serch',
        image: CategoryImages.guide,
        subLinks: ClientGuide
    },
    {
        id: ClientsHelpLinks.rewards,
        title: 'Serch Rewards',
        image: CategoryImages.reward,
        subLinks: ClientRewards
    },
    {
        id: ClientsHelpLinks.signUp,
        title: 'Signing up in Serch',
        image: CategoryImages.addUser,
        subLinks: ClientSignUp
    },
    {
        id: ClientsHelpLinks.accessibility,
        title: 'Accessibility',
        image: CategoryImages.accessible,
        subLinks: ClientAccessibility
    },
    {
        id: ClientsHelpLinks.serviceTrip,
        title: 'Help With A Service trip',
        image: CategoryImages.help,
        subLinks: ClientHelp
    }
]