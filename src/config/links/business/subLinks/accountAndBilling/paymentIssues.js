import accountCharged from "../../docs/accountAndBilling/paymentIssues/accountCharged.md"
import billingFAQ from "../../docs/accountAndBilling/paymentIssues/billingFAQ.md"
import downloadStatement from "../../docs/accountAndBilling/paymentIssues/downloadStatement.md"
import feeAdjustment from "../../docs/accountAndBilling/paymentIssues/feeAdjustment.md"
import manageMethods from "../../docs/accountAndBilling/paymentIssues/manageMethods.md"
import serchPricing from "../../docs/accountAndBilling/paymentIssues/serchPricing.md"
import updateAccount from "../../docs/accountAndBilling/paymentIssues/updateAccount.md"
import upfrontPricing from "../../docs/accountAndBilling/paymentIssues/upfrontPricing.md"

export const BusinessPaymentIssues = [
    {
        id: "3579495241ad87461f-90f3-4958-82d1-6e3709",
        title: 'Updating account billing information',
        desc: updateAccount
    },
    {
        id: '270984056ef9488c6-5a71-4fee-9415-eba509',
        title: 'Managing business account payment methods',
        desc: manageMethods
    },
    {
        id: '246415222008a448c8-4278-49ee-bbda-c386b3',
        title: 'Downloading monthly account statements',
        desc: downloadStatement
    },
    {
        id: '3554144232cae53f75-126b-42d6-948a-9d75fc',
        title: 'Monthly billing FAQ',
        desc: billingFAQ
    },
]

export const BusinessFeesandChargeIssues = [
    {
        id: '2173261979572e92cd-86ff-45f4-bb9a-4f2c45',
        title: 'How Serch pricing for businesses work',
        desc: serchPricing
    },
    {
        id: '155442034436fc1891-d5c7-4c38-bea2-195a6e',
        title: 'Upfront pricing FAQ',
        desc: upfrontPricing
    },
    {
        id: '6824360186b1f6d8c-be69-4c96-92ea-45deb7',
        title: 'Why was my business account charged a cancellation fee?',
        desc: accountCharged
    },
    {
        id: '13295463381361353b-419b-48e1-b601-ecd0e7',
        title: 'Requesting a payment or fee adjustment',
        desc: feeAdjustment
    },
]