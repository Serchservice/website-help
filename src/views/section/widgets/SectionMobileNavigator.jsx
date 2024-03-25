import { Icon } from "@iconify/react";
import SearchBar from "../../../components/search-bar/SearchBar";
import GroupItem from "../../../components/group-item/GroupItem";
import Spacer from "../../../components/Spacer";
import HelpForm from "../../../components/help-form/HelpForm";

const SectionMobileNavigator = ({
    toggleMenu, category, open,
    groups = [{
        "group": "",
        "key": "",
        "help": [
            {
                "question": "",
                "answer": "",
                "id": ""
            }
        ]
    }],
    section, activeCategory, activeSection
}) => {
    return (
        <div data-thq="thq-mobile-menu" className="navbar-interactive-mobile-menu" style={{
            transform: open ? "translateX(0%)" : "translateX(100%)",
            display: open ? "flex" : "none",
            backgroundColor: "#ffffff",
            zIndex: "99"
        }}>
            <div className="navbar-interactive-nav">
                <div className="navbar-interactive-top">
                    <h2>{ category }</h2>
                    <div data-thq="thq-close-menu" className="navbar-interactive-close-menu" onClick={ toggleMenu }>
                        <Icon icon="solar:arrow-left-line-duotone" color='#030001' width={35}/>
                    </div>
                </div>
                <SearchBar placeholder="Search keywords, questions and topics"/>
                <Spacer height={"40px"} />
                <span>{ section }</span>
                <Spacer height={"15px"} />
                <div className="navbar-interactive-links">
                    {
                        groups.map((value, key) => {
                            return (
                                <GroupItem
                                    key={ key }
                                    groups={ value }
                                    category={ activeCategory }
                                    section={ activeSection }
                                    needSpacer={ false }
                                />
                            )
                        })
                    }
                </div>
                <Spacer height={50}/>
                <HelpForm />
            </div>
        </div>
    )
}

export default SectionMobileNavigator;