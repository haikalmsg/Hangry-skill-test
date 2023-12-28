import React, {createContext} from "react";

export const DropdownContext = createContext(null)

export const DropdownContextProvider = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    function setDropdownFalse(){
        return(
            setIsDropdownOpen(false)
        )
    }
    function toggleDropdown(){
        return(
           setIsDropdownOpen((prev) => (!prev))
        )
    }
    const contextValue = {isDropdownOpen, setDropdownFalse, toggleDropdown}
    return <DropdownContext.Provider value = {contextValue}>{props.children}</DropdownContext.Provider>
}
