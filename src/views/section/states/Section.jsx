import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemGenerator from "../../../config/ItemGenerator";
import HelpService from "../../../api/HelpService";
import Shimmer from "../../../components/shimmer/Shimmer";
import GroupItem from "../../../components/group-item/GroupItem";
import Spacer from "../../../components/Spacer";

const Section = () => {
    const [ isLoading, setIsLoading ] = useState(true)
    const { category, section } = useParams()
    const [ groups, setGroups ] = useState([{
        "group": "",
        "key": "",
        "help": [
            {
                "question": "",
                "answer": "",
                "id": ""
            }
        ]
    }])
    const [ activeSection, setActiveSection ] = useState({
        "section": "",
        "image": "",
        "key": ""
    })

    useEffect(() => {
        setIsLoading(true)
        HelpService.loadSection({
            section: section,
            setSection: setActiveSection
        }).then((value) => {
            if(value) {
                HelpService.loadGroups({
                    category: category,
                    section: section,
                    setGroups: setGroups
                }).then((value) => {
                    if(value) {
                        setIsLoading(false)
                    }
                })
            }
        })
    }, [ ])

    return (
        <div className="section-body-left-contents hide-large">
            { isLoading && (
                ItemGenerator(length = 5).map((_, key) => {
                    return (
                        <div key={ key } style={{width: "100%"}}>
                            <div style={{height: "15px"}} key={ key }></div>
                            <Shimmer height={60} percentWidth='100%'/>
                        </div>
                    )
                })
            )}
            {
                !isLoading && (
                    <>
                        <p>{ activeSection.section }</p>
                        <Spacer height={"12px"} />
                    </>
                )
            }
            {
                !isLoading && groups.map((value, key) => {
                    return (
                        <GroupItem
                            key={ key }
                            groups={ value }
                            category={ category }
                            section={ section }
                        />
                    )
                })
            }
        </div>
    )
}

export default Section;