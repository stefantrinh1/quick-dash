import React from 'react'
import logo from './media/logos/logo.png';
import './App.css';
import EasyToUse from './media/icons/thumbsup.png';
import FastToUse from './media/icons/lighting.png';
import ImproveWorkflow from './media/icons/keyboard.png';
import WordCharacterCount from "./components/WordCharacterCount"
import TextArea from "./components/TextArea.js"
import DashSpaces from "./components/DashSpaces.js"
import RemoveSpecialCharacters from './components/RemoveSpecialCharacters';
import Uppercase from './components/Uppercase';
import Lowercase from './components/Lowercase';
import Capitalize from "./components/Capitalize"
import TitleCase from './components/TitleCase';
import Clear from "./components/Clear";
import CopyToClipboard from './components/CopyToClipboard';
import SentenceCase from './components/SentenceCase';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="Header__Logo" alt="QuickDash" />

        <p>Welcome to Quick Dash, improving your work flow.</p>

      </header>

      <section className="Introduction">
        <h2>
          Introduction
        </h2>

        <p>
          Welcome to quick dash, our aim is to help you improve your typing workflow. Our primary function is to insert dashes inbetween spaces in a title/sentence. Great for long URLs. We have also added additional features which helps journalists, content editors, copywriters and authors with their workflow.
        </p>
      </section>

      <section className="TextOperations">
        <div className="TextOperations__Container">
          <CopyToClipboard />
          <Clear />
          <WordCharacterCount />
          <TextArea />
          <DashSpaces />
          <RemoveSpecialCharacters />
          <TitleCase />
          <Uppercase />
          <Lowercase />
          <Capitalize />
          <SentenceCase />
        </div>
      </section>

      <section className="Benefits">
        <div className="Benefits__ContentBox">

          <img src={EasyToUse} alt="" />
          <h5>
            Easy To Use
          </h5>
          <p>
            Simple and clear user-friendly interface
          </p>
        </div>

        <div className="Benefits__ContentBox">

          <img src={FastToUse} alt="" />
          <h5>
            Fast to Use
          </h5>
          <p>
            Instant response, No download required.
          </p>
        </div>
        <div className="Benefits__ContentBox">

          <img src={ImproveWorkflow} alt="" />
          <h5>
            Improves Workflow.
          </h5>
          <p>
            Speeds up workflow, reducing typing.
          </p>
        </div>

      </section>


      <section className="Footer">
        <p>© QuickDash 2019</p>
        <p>An Application By Stefan Trinh | <a href="https://www.stefantrinh.com">stefantrinh.com</a></p>
      </section>


    </div>
  );
}

export default App;
