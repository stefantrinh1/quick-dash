import React from 'react'
import ButtonIcon from "../media/icons/uppercase.svg"

const Uppercase = () => {

    const handleClick = () => {
    // grab the Text area Element to work with.
        const textArea = document.querySelector(".TextOperations__TextArea")
        let str = textArea.value
       console.log("handleClick")
        str = str.toUpperCase()
        // sets new value inside the text box
        textArea.value = str
    }    

    return (<button onClick={handleClick}><img className="TextOperations__ButtonIcon" src={ButtonIcon} /> | Uppercase</button>)
    
}

export default Uppercase
