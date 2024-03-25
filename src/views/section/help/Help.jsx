import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../../../api/ApiService";
import HelpLoading from "./HelpLoading";
import HelpNotFound from "./HelpNotFound";
import './help.css';

const Help = () => {
    const { category, section, id } = useParams()
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isFound, setIsFound ] = useState(false)
    const [ isError, setIsError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ help, setHelp ] = useState({
        "question": "",
        "answer": "",
        "id": ""
    })

    useEffect(() => {
        ApiService.loadHelp({
            id: id,
            setHelp: setHelp,
            setIsFound: setIsFound,
            setIsLoading: setIsLoading,
            setErrorMessage: setErrorMessage,
            setIsError: setIsError,
        })
        console.log(help.answer)
    }, [ ])

    return (
        <>
        {
            isLoading ? (<HelpLoading />)
                : isFound && (help.answer === "" || help.answer === null || help.answer == undefined)
                    ? (<div style={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        flex: "1 1",
                        justifyContent: "center",
                        width: "100%"
                    }}>No content yet</div>)
                : isFound && help.answer !== ""
                    ? <div className="answer">
                        <iframe
                            src={ help.answer }
                            className="answer-view"
                        ></iframe>
                    </div>
                : <HelpNotFound
                    message={ errorMessage }
                    category={ category }
                    section={ section }
                />
        }
        </>
    )
}

export default Help;