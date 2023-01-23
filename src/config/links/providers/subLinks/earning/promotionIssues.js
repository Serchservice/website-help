import wrongPromotion from "../../docs/earning/promotionIssues/wrongPromotion.md";
import trackPromotionProgress from "../../docs/earning/promotionIssues/trackPromotionProgress.md";
import paidPromotion from "../../docs/earning/promotionIssues/paidPromotion.md";
import promotionPeriod from "../../docs/earning/promotionIssues/promotionPeriod.md";
import notReceivingPromotion from "../../docs/earning/promotionIssues/notReceivingPromotion.md";

const ProviderPromotionIssues = [
    {
        id: '3370199391208a6c9-89e0-4443-8d3e-9a1a44',
        title: 'My promotion was wrong',
        desc: wrongPromotion
    },
    {
        id: '4171261733acc6dfd7-3729-42c1-8e52-0918c8',
        title: 'Why am I not receiving weekly promotion offers?',
        desc: notReceivingPromotion
    },
    {
        id: '3838078520a1472e9d-837e-491d-8d27-97fb2c',
        title: 'When are promotions paid?',
        desc: paidPromotion
    },
    {
        id: '185609760919f3078c-6b24-43eb-83c4-409f49',
        title: 'What is a promotion period?',
        desc: promotionPeriod
    },
    // {
    //     id: '29266299693ba1a0d8-a581-4966-9a46-e261d9',
    //     title: 'Why is my promotion offer different this week?',
    //     desc: ''
    // },
    {
        id: '12465343841c2e1e29-f88d-485b-971b-49e7eb',
        title: 'Can I track my progress towards a weekly promotion?',
        desc: trackPromotionProgress
    },
]

export default ProviderPromotionIssues;