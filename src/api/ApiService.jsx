import HelpService from "./HelpService";

const ApiService = {
    loadCategories: async ({ setIsLoading, setCategories }) => {
        setIsLoading(true);
        HelpService.loadCategories({
            setCategories: setCategories,
        }).then((value) => {
            if(value !== null) {
                setIsLoading(false)
            } else {
                // setIsLoading(false)
            }
        })
    },

    loadSections: async ({
        category, setIsLoading, setCategories,
        setSections, setIsFound, setIsError,
        setErrorMessage, setActiveCategory
    }) => {
        setIsLoading(true);
        HelpService.loadCategories({
            setCategories: setCategories,
        }).then((value) => {
            if(value !== null) {
                setActiveCategory(value.find((cat) => cat.key === category))
                HelpService.loadSections({
                    category: category,
                    setSections: setSections,
                }).then((value) => {
                    if(value) {
                        setIsFound(true)
                        setIsLoading(false)
                        return true
                    } else {
                        setIsError(true)
                        setIsLoading(false)
                        setErrorMessage(
                            `An error occurred while fetching help section data.
                            Check your internet connection.`
                        )
                        return false
                    }
                })
            } else {
                setIsError(true)
                setIsLoading(false)
                setErrorMessage("An error occurred while fetching help data. Check your internet connection.")
                return false
            }
        })
    },

    loadGroups: async ({
        category, setIsLoading, setCategories,
        section, setSection, setGroups,
        setErrorMessage, setIsError, setIsFound,
        setActiveCategory
    }) => {
        setIsLoading(true);
        HelpService.loadCategories({
            setCategories: setCategories,
        }).then((value) => {
            if(value !== null) {
                setActiveCategory(value.find((cat) => cat.key === category))
                HelpService.loadSection({
                    section: section,
                    setSection: setSection,
                }).then((value) => {
                    if(value) {
                        HelpService.loadGroups({
                            category: category,
                            section: section,
                            setGroups: setGroups
                        }).then((value) => {
                            if(value) {
                                setIsFound(true)
                                setIsLoading(false)
                            } else {
                                setIsError(true)
                                setIsLoading(false)
                                setErrorMessage(
                                    `Couldn't find the faq groups you were looking for.
                                    Check the address or click the option below`
                                )
                            }
                        })
                    } else {
                        setIsError(true)
                        setIsLoading(false)
                        setErrorMessage(
                            `An error occurred while fetching help section data.
                            Check your internet connection.`
                        )
                    }
                })
            } else {
                setIsError(true)
                setIsLoading(false)
                setErrorMessage("An error occurred while fetching help data. Check your internet connection.")
            }
        })
    },

    loadHelp: async ({ id, setHelp, setIsFound, setIsLoading, setErrorMessage, setIsError }) => {
        HelpService.loadHelp({
            id: id,
            setHelp: setHelp
        }).then((value) => {
            if(value) {
                setIsFound(true)
                setIsLoading(false)
            } else {
                setIsError(true)
                setIsLoading(false)
                setErrorMessage(
                    `Couldn't find any frequently asked question for
                    ${ id }. Check the data or select another option.`
                )
            }
        })
    }
}

export default ApiService