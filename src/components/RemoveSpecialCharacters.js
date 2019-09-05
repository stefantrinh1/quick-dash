import React from 'react'
import ButtonIcon from "../media/icons/exclaimation.svg"

const RemoveSpecialCharacters = () => {

    const handleClick = () => {
    // grab the Text area Element to work with.
        const textArea = document.querySelector(".TextOperations__TextArea")

        const specialCharacters = ['!','@','£','$','%','^','&','*','*','(',')','_','+','±','§','-','=','⁄','™','‹','›','ﬁ','ﬂ','‡','°','‡','°','·','[',']','{','}','”','’','Ú',';',':',"'",'"','Æ','\\','/','|','Æ',',','¯','<','.','˘','.','¿','/','?','`','~','Ÿ',
                                    '¡','€','#','¢','∞','§','¶','•','ª','º','≠','–','…','æ','«','≤','≥','÷','`','§','±','æ','²','Ç','ü','é','â','ä','à','å','ç','ê','ƒ','½','¼','÷','©','®','¹','¾','³']

        let str = textArea.value

        // uses regex to delete special Characaters
        str = str.replace(/'/g, '');
        str = str.replace(/"/g, '');
        str = str.replace(/’/g, '');
        str = str.replace(/%/g, '');
        str = str.replace(/;/g, '');
        str = str.replace(/-/g, '');
        str = str.replace(/&/g, '');
        str = str.replace(/@/g, '');
        str = str.replace(/™/g, '');
        str = str.replace(/¡/g, '');
        str = str.replace(/∞/g, '');
        str = str.replace(/§/g, '');
        str = str.replace(/¶/g, '');
        str = str.replace(/•/g, '');
        str = str.replace(/¢/g, '');
        str = str.replace(/ª/g, '');
        str = str.replace(/º/g, '');
        str = str.replace(/“/g, '');
        str = str.replace(/⁄/g, '');
        str = str.replace(/‹/g, '');
        str = str.replace(/›/g, '');
        str = str.replace(/ﬁ/g, '');
        str = str.replace(/\[/g, '');
        str = str.replace(/]/g, '');
        str = str.replace(/{/g, '');
        str = str.replace(/}/g, '');
        str = str.replace(/”/g, '');
        str = str.replace(/|/g, '');
        str = str.replace(/,/g, '');
        str = str.replace(/</g, '');
        str = str.replace(/€/g, '');
        str = str.replace(/≠/g, '');
        str = str.replace(/–/g, '');
        str = str.replace(/æ/g, '');
        str = str.replace(/²/g, '');
        str = str.replace(/Ç/g, '');
        str = str.replace(/ü/g, '');
        str = str.replace(/é/g, '');
        str = str.replace(/â/g, '');
        str = str.replace(/ä/g, '');
        str = str.replace(/à/g, '');
        str = str.replace(/å/g, '');
        str = str.replace(/ç/g, '');
        str = str.replace(/ê/g, '');
        str = str.replace(/ƒ/g, '');
        str = str.replace(/½/g, '');
        str = str.replace(/¼/g, '');
        str = str.replace(/÷/g, '');
        str = str.replace(/©/g, '');
        str = str.replace(/®/g, '');
        str = str.replace(/¹/g, '');
        str = str.replace(/¾/g, '');
        str = str.replace(/³/g, '');
        str = str.replace(/‘/g, '');
        str = str.replace(/…/g, '');
        str = str.replace(/Æ/g, '');
        str = str.replace(/«/g, '');
        str = str.replace(/≤/g, '');
        str = str.replace(/≥/g, '');
        str = str.replace(/÷/g, '');
        str = str.replace(/¿/g, '');
        str = str.replace(/˘/g, '');
        str = str.replace(/¯/g, '');
        str = str.replace(/»/g, '');
        str = str.replace(/Ú/g, '');
        str = str.replace(/±/g, '');
        str = str.replace(/·/g, '');
        str = str.replace(/°/g, '');
        str = str.replace(/‡/g, '');
        str = str.replace(/ﬂ/g, '');
        str = str.replace(/Ÿ/g, '');
        str = str.replace(/~/g, '');
        str = str.replace(/±/g, '');
        str = str.replace(/§/g, '');
        str = str.replace(/\?/g, '');
        str = str.replace(/\+/g, '');
        str = str.replace(/=/g, '');
        str = str.replace(/_/g, '');
        str = str.replace(/\//g, '');
        str = str.replace(/\\/g, '');
        str = str.replace(/#/g, '');
        str = str.replace(/\./g, '');
        str = str.replace(/\^/g, '');
        str = str.replace(/\*/g, '');
        str = str.replace(/\`/g, '');
        str = str.replace(/:/g, '');
        str = str.replace(/!/g, '');
        str = str.replace(/\(/g, '');
        str = str.replace(/\)/g, '');
        str = str.replace(/£/g, '');
        str = str.replace(/\$/g, '');
        // sets new value inside the text box
        textArea.value = str
    }    

    return (<button onClick={handleClick}><img style={{height:'1.15em'}} className="TextOperations__ButtonIcon" src={ButtonIcon} /> | Remove Special Characters</button>)
    
}

export default RemoveSpecialCharacters