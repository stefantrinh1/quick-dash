import React from 'react'
import ButtonIcon from "../media/icons/lowercase.svg"

const Lowercase = () => {

    const handleClick = () => {
    // grab the Text area Element to work with.
        const textArea = document.querySelector(".TextOperations__TextArea")
        let str = textArea.value
        console.log("handleClick")
        str = str.toLowerCase()
        // sets new value inside the text box
        textArea.value = str
    }    

    return (<button onClick={handleClick}><img style={{height:'0.75em'}} className="TextOperations__ButtonIcon" src={ButtonIcon} /> | Lowercase</button>)
    
}

export default Lowercase
