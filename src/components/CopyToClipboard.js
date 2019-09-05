import React from 'react'
import ButtonIcon from "../media/icons/clipboard.svg"

const CopyToClipboard = () => {

    const handleClick = () => {
    // grab the Text area Element to work with.
        const textArea = document.querySelector(".TextOperations__TextArea")
        let str = textArea.value
        console.log("handleClick")

        textArea.select();
        document.execCommand("copy");

    }    

    return (<button onClick={handleClick}><img className="TextOperations__ButtonIcon" src={ButtonIcon} /> | Copy To Clipboard</button>)
    
}

export default CopyToClipboard