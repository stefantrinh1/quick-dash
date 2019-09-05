import React from 'react'
import ButtonIcon from "../media/icons/capitialize.svg"

const TitleCase = () => {

    const handleClick = () => {
        // grab the Text area Element to work with.
        const textArea = document.querySelector(".TextOperations__TextArea")
        let str = textArea.value
        console.log("handleClick")

        const titleCaseString = (str) => {
            // creates an array with each word as a element
            let wordsArray = str.split(" ");

            // function to capitalise first letter of any word given to it
            String.prototype.capitalize = function () {
                return this.charAt(0).toUpperCase() + this.slice(1);
            }

            // Maps through the array and captialise every word.
            let newWordsArray = wordsArray.map(word => {
                // return word.charAt(0).toUpperCase(); 
                return word.capitalize()
            });

            // returns the str joined together from the array seperated by a space.
            return newWordsArray.join(" ")
        }

        str = titleCaseString(str)

        // sets new value inside the text box
        textArea.value = str
    }

    return (<button onClick={handleClick}><img className="TextOperations__ButtonIcon" src={ButtonIcon} /> | Title Case</button>)

}

export default TitleCase
