import React, { useState } from 'react'
import './group-item.css'
import Spacer from '../Spacer'
import { Icon } from '@iconify/react'
import { useParams } from 'react-router-dom'

const GroupItem = ({
    groups = {
        "group": "",
        "key": "",
        "help": [
            {
                "question": "",
                "answer": "",
                "id": ""
            }
        ]
    },
    category = '', section = '',
    needSpacer = true
}) => {
    const [ openGroup, setOpenGroup ] = useState("")
    const { group, id } = useParams()

    const toggleGroup = () => {
        if(groups.key === openGroup) {
            setOpenGroup("")
        } else {
            setOpenGroup(groups.key)
        }
    }

    return (
        <>
            <div className="group-container" style={{
                height: groups.key === openGroup ? "auto" : "60px",
                backgroundColor: group === groups.key ? "#030001" : "#ffffff"
            }}>
                <div className="group-header">
                    <span className="group-header-text" style={{
                        color: group === groups.key ? "#ffffff" : "#030001"
                    }}>{ groups.group }</span>
                    <div className="group-header-icon" onClick={toggleGroup}>
                        <Icon icon="solar:alt-arrow-up-line-duotone" width={"100%"} style={{
                            rotate: groups.key === openGroup ? "0deg" : "180deg",
                            transition: "0.5s",
                            color: group === groups.key ? "#ffffff" : "#030001"
                        }}/>
                    </div>
                </div>
                <div className='group-item-list' style={{
                    display: groups.key === openGroup ? "block" : "none"
                }}>
                    {
                        groups.help !== null && groups.help.length !== 0 && (
                            groups.help.map((value, key) => {
                                return (
                                    <a
                                        className="group-item"
                                        href={`/${ category }/${ section }/${ groups.key }/${ value.id }`}
                                        key={ key }
                                        style={{
                                            backgroundColor: id === value.id ? "#ffffff" : null,
                                            borderRadius: id === value.id ? "20px" : null,
                                            padding: id === value.id ? "15px 20px" : null,
                                            margin: id === value.id ? "10px 0" : null
                                        }}
                                    >
                                        {
                                            id !== value.id && (
                                            <div className="group-step">
                                                <div
                                                    className="group-step-w"
                                                    style={{
                                                        backgroundColor: group === groups.key ? "#ffffff" : "#030001"
                                                    }}
                                                ></div>
                                                <div
                                                    className="group-step-h"
                                                    style={{
                                                        backgroundColor: group === groups.key ? "#ffffff" : "#030001"
                                                    }}
                                                ></div>
                                                { key !== (groups.help.length - 1) && (
                                                    <div
                                                        className="group-step-h"
                                                        style={{
                                                            backgroundColor: group === groups.key ? "#ffffff" : "#030001"
                                                        }}
                                                    ></div>
                                                )}
                                                { key === (groups.help.length - 1) && (
                                                    <div
                                                        className="group-step-h"
                                                        style={{
                                                            backgroundColor: group === groups.key ? "#030001" : "#ffffff"
                                                        }}
                                                    ></div>
                                                )}
                                            </div>
                                        )}
                                        <span
                                            className="group-item-text"
                                            style={{
                                                color: id === value.id
                                                    ? "#030001"
                                                    : group === groups.key ? "#ffffff" : "#030001"
                                            }}
                                        >{ value.question }</span>
                                    </a>
                                )
                            })
                        )
                    }
                </div>
            </div>
            { needSpacer && (<Spacer height={"15px"} />)}
        </>
    )
}

export default GroupItem
