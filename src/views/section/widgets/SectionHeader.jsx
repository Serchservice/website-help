import { Icon } from "@iconify/react"
import SectionMobileNavigator from "./SectionMobileNavigator"
import { useState } from "react"
import DropdownMenu from "../../../components/dropdown-menu/DropdownMenu"
import SearchBar from "../../../components/search-bar/SearchBar"
import GroupItem from "../../../components/group-item/GroupItem"
import Spacer from "../../../components/Spacer"
import HelpForm from "../../../components/help-form/HelpForm"

const SectionHeader = ({
    groups = [
        {
            "group": "",
            "key": "",
            "help": [
                {
                    "question": "",
                    "answer": "",
                    "id": ""
                }
            ]
        }
    ],
    categories = [
        {
            "category": "",
            "image": "",
            "key": ""
        }
    ],
    activeCategory = "", activeSection = "",
    showMenuButton = true,
    section, category
}) => {
    const [ isOptionsOpen, setIsOptionsOpen ] = useState(false)

    const toggleNav = () => {
        setIsOptionsOpen(!isOptionsOpen)
    }

    return (
        <div className='section-body-left'>
            <div className='section-body-left-header'>
                <div className='section-body-left-header-dropdown'>
                    <DropdownMenu
                        list={ categories }
                        placeHolder={ category }
                    />
                </div>
                {
                    showMenuButton ? <div className='section-body-left-header-menu' onClick={ toggleNav }>
                        <Icon icon="gg:options" width={22} height={22} />
                    </div> : null
                }
            </div>
            <Spacer height={"30px"} />
            <SectionMobileNavigator
                category={ category }
                open={ isOptionsOpen }
                toggleMenu={ toggleNav }
                section={ section }
                groups={ groups }
                activeCategory={ activeCategory }
                activeSection={ activeSection }
            />
            <div className='section-body-left-search'>
                <SearchBar placeholder="Search keywords, questions and topics"/>
                <Spacer height={"40px"} />
            </div>
            <div className="section-body-left-contents hide-small">
                <p>{ section }</p>
                <Spacer height={"12px"} />
                {
                    groups.map((value, key) => {
                        return (
                            <GroupItem
                                key={ key }
                                groups={ value }
                                category={ activeCategory }
                                section={ activeSection }
                            />
                        )
                    })
                }
                <Spacer height={50}/>
                <HelpForm />
            </div>
        </div>
    )
}

export default SectionHeader;