import React from 'react'
import ButtonIcon from "../media/icons/close.svg"

const DashSpaces = () => {

    const handleClick = () => {
    // grab the Text area Element to work with.
        const textArea = document.querySelector(".TextOperations__TextArea")
        let str = textArea.value
        // uses regex to replace the spaces with a -
        str = ""
        // sets new value inside the text box
        textArea.value = str
    }    

    return (<button onClick={handleClick}><img className="TextOperations__ButtonIcon" src={ButtonIcon} /> | Clear</button>)
    
}

export default DashSpaces