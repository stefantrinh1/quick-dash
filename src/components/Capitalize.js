import React from 'react'
import ButtonIcon from "../media/icons/capitialize.svg"

const Captialize = () => {

    const handleClick = () => {
    // grab the Text area Element to work with.
        const textArea = document.querySelector(".TextOperations__TextArea")
        let str = textArea.value
        console.log("handleClick")

        // creates a generic function that can be called.
        String.prototype.capitalize = function() {
                return this.charAt(0).toUpperCase() + this.slice(1);
            }
        str = str.capitalize()
        // sets new value inside the text box
        textArea.value = str
    }    

    return (<button onClick={handleClick}><img className="TextOperations__ButtonIcon" src={ButtonIcon} /> | Capitalize</button>)
    
}

export default Captialize





// const str = 'the Eiffel Tower';
// const newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
// console.log('Original String:', str); // the Eiffel Tower
// console.log('New String:', newStr); // The Eiffel Tower

// String.prototype.capitalize = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }
// You'd call the function, like this:

// "hello world".capitalize();
// With the expected output being:

// "Hello world" 

// function ucFirstAllWords( str )
// {
//     var pieces = str.split(" ");
//     for ( var i = 0; i < pieces.length; i++ )
//     {
//         var j = pieces[i].charAt(0).toUpperCase();
//         pieces[i] = j + pieces[i].substr(1).toLowerCase();
//     }
//     return pieces.join(" ");
// }