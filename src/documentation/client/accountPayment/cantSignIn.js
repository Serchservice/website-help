// npm i markdown-to-jsx
import { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import clientSubscriptionNotSuccessful from '../../../markdown/client/accountPayment/subscriptionNotSuccessful.md';

// const App = () => {
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     fetch(ClientSubscriptionNotSuccessful)
//       .then(res => res.text())
//       .then(md => { setContent(md) })
//   })

//   return (
//     <div><Markdown children={content} /></div>
//   )
// }

export const ClientSubscriptionNotSuccessful = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(clientSubscriptionNotSuccessful)
        .then(res => res.text())
        .then(md => { setContent(md) })
    })

    return (
        <div><Markdown children={content} /></div>
    )
}

export const ClientTroubleShootingVerify = () => {}

export const ClientCantRequestService = () => {}

export const ClientForgotMyPassword = () => {}

export const ClientPasswordResetLink = () => {}

export const ClientCannotSignIn = () => {}

export const ClientHackedAccount = () => {}