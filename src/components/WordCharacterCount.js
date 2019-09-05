import React, { useState, useEffect } from 'react'

const WordCharacterCount = () => {

  const [wordCount, calcWordCount] = useState(undefined)
  const [characterCount, calcCharacterCount] = useState(undefined)

  useEffect(() => {
    // grab the Text area Element to work with.
    const textArea = document.querySelector(".TextOperations__TextArea")
    // once an input has been made
    const handleInput = () => {

      // a function to take a string and
      // return the number of words/Characters in the string
      const WordCount = (str) => str.split(" ").length;
      const characterCount = (str) => str.length;

      // run The WordCount/CharacterCount function with the current
      // Text area's Value and returns the Counts
      // and then run the state change function to 
      // re render the Count
      calcWordCount(WordCount(textArea.value));
      calcCharacterCount(characterCount(textArea.value));
    }

    // Everytime there is a change to the input 
    // carry out the function handleInput
    textArea.oninput = handleInput

  }, []);

  return (
    <div className="TextOperations__CountContainer">
      <span className="TextOperations__Count">Word Count: <strong>{wordCount ? wordCount : 0}</strong></span>
      <span className="TextOperations__Count">Characters:  <strong>{characterCount ? characterCount : 0}</strong></span>
    </div>
  )
}

export default WordCharacterCount;