import React from 'react'
import ButtonIcon from "../media/icons/capitialize.svg"

const SentenceCase = () => {

    //  this uses regex to find the full  stop and replace the first letter with a upper case letter after it.
    const firstLetterUpper = (theString) => theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});

    const handleClick = () => {
    // grab the Text area Element to work with.
        const textArea = document.querySelector(".TextOperations__TextArea")
        let str = textArea.value
        console.log("handleClick")
        str = firstLetterUpper(str);
        // sets new value inside the text box
        textArea.value = str
    } 
    
    return (<button onClick={handleClick}><img style={{height:'0.75em'}} className="TextOperations__ButtonIcon" src={ButtonIcon} /> | Sentence Case</button>)
    
}

export default SentenceCase;
