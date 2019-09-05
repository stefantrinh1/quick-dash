import React from 'react'
import ButtonIcon from "../media/icons/subtract.svg"

const DashSpaces = () => {

    const handleClick = () => {
    // grab the Text area Element to work with.
        const textArea = document.querySelector(".TextOperations__TextArea")
        let str = textArea.value
        // uses regex to replace the spaces with a -
        str = str.replace(/\s+/g, '-')
        // sets new value inside the text box
        textArea.value = str
    }    

    return (<button onClick={handleClick}><img style={{width:'1em'}}className="TextOperations__ButtonIcon" src={ButtonIcon} /> | Dash Between Spaces</button>)
    
}

export default DashSpaces
