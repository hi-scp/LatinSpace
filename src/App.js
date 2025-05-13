import React, { useState, useRef, useEffect } from "react";
import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
  SplitPaneThird,
  SplitPaneDict
} from "./SplitPane";
import "./App.css";


function App() {

  const [showThirdPane, setShowThirdPane] = useState(false);
  const toggleThirdPane = () => {
    setShowThirdPane((prevState) => !prevState);
  };

  const [showDict, setShowDict] = useState(false);
  const toggleDict = () => {
    setShowDict((prevState) => !prevState);
  };

  const [textToAdd, setTextToAdd] = useState("");
  const [showTextInput, setShowTextInput] = useState(false);

  const handleTextInput = () => setShowTextInput(true);
  const handleTextSubmit = (text) => {
    setTextToAdd(text);
    setShowTextInput(false);
  };

  const handleClose = () => {
    setShowTextInput(false); // close without submitting
  };


  return (
    <div className="App">
      <SplitPane className="split-pane-col">
        <SplitPaneTop onTogglePane={toggleThirdPane} onToggleDict={toggleDict} onTextInput={handleTextInput}/>
        {showTextInput && (
        <div className="modal">

        <textarea
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleTextSubmit(e.target.value);
            } else if (e.key === "Escape") {
              handleClose(); // This function should close or hide the input
            }
          }}
          placeholder = "shift+enter for newline, escape to close"
          style={{ width: "35vw" }}
          autoFocus
        />
        </div>
      )} 

        <Divider className="separator-row" />
        <SplitPaneBottom showThirdPane={showThirdPane}>
          <SplitPane className="split-pane-row">
            {showDict && (<SplitPaneDict/>)}
            <SplitPaneLeft textToAdd={textToAdd}/>
            <Divider className="separator-col" />
            <SplitPaneRight/>
            {showThirdPane && (<SplitPaneThird/>)}
          </SplitPane>
        </SplitPaneBottom>
      </SplitPane>
    </div>
  );
}

export default App