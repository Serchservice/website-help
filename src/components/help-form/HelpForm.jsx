import React, { useState } from 'react'
import './help-form.css'
import HelpService from '../../api/HelpService'
import { wait } from '@testing-library/user-event/dist/utils'
import { Icon } from '@iconify/react'

const HelpForm = () => {
    const [ loading, setLoading ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)
    const [ message, setMessage ] = useState("")

    const [ emailAddress, setEmailAddress ] = useState("")
    const [ fullName, setFullName ] = useState("")
    const [ comment, setComment ] = useState("")

    const submitForm = async (event) => {
        event.preventDefault()

        if(loading) {
            return
        } else if(comment === "") {
            setMessage("Comment is needed")
            await wait(2000)
            setMessage("")
            return
        } else {
            setLoading(true)
            var response = await HelpService.submitQuery({
                emailAddress: emailAddress,
                fullName: fullName,
                comment: comment
            })
            setLoading(false)
            if(response) {
                setMessage("Query submitted")
                await wait(2000)
                setMessage("")
            } else {
                setMessage("Error occurred. Try again")
                await wait(2000)
                setMessage("")
            }
        }
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="help-form-container" style={{
            height: isOpen ? "auto" : "53px",
        }}>
            <div className='help-form-container-header'>
                <p>Having Issue? Let us know here</p>
                <Icon
                    icon={ isOpen ? "pajamas:close" : "octicon:discussion-closed-24" }
                    height={ 28 }
                    width={ 28 }
                    className='help-form-container-header-icon'
                    onClick={toggle}
                />
            </div>
            <form
                id="helpForm"
                name="Help Form"
                autoComplete="on"
                method="submit"
                className="help-form-form"
                onSubmit={submitForm}
                style={{
                    display: isOpen ? "flex" : "none",
                }}
            >
                <span className="help-form-full-name">
                    <span>First and Last Name</span>
                    <br></br>
                </span>
                <input
                    type="text"
                    placeholder="Enter your full name"
                    required={ true }
                    id="fullName"
                    name="Full Name"
                    autoComplete="name"
                    className="help-form-textinput"
                    onChange={(e) => setFullName(e.target.value)}
                />
                <span className="help-form-email-address">Email Address where support can contact you</span>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    required={ true }
                    id="emailAddress"
                    name="Email Address"
                    autoComplete="email"
                    className="help-form-textinput1"
                    onChange={(e) => setEmailAddress(e.target.value)}
                />
                <span className="help-form-comment">Anything you would like us to know</span>
                <textarea
                    placeholder="Let your voice be heard and your problem solved"
                    id="more"
                    name="Anything else we would need to know"
                    autoComplete="on"
                    className="help-form-textarea"
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button type="submit" className="help-form-button">{
                    loading ? "..." : message !== "" ? message : "Submit"
                }</button>
            </form>
        </div>
    )
}

export default HelpForm
