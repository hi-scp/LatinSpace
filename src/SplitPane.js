//react imports
import React, {
    createRef,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import SplitPaneContext from "./SplitPaneContext";

//canvas imports
import Canvas from "./Canvas";
import { useWindowSize } from "./hooks";
import { MODES } from "./constants"; 

const SplitPane = ({ children, ...props }) => {
  const [clientHeight, setClientHeight] = useState(null);
  const [clientWidth, setClientWidth] = useState(null);
  const yDividerPos = useRef(null);
  const xDividerPos = useRef(null);

  const onMouseHoldDown = (e) => {
    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  const onMouseHoldUp = () => {
    yDividerPos.current = null;
    xDividerPos.current = null;
  };

  const onMouseHoldMove = (e) => {
    if (!yDividerPos.current && !xDividerPos.current) {
      return;
    }

    setClientHeight(clientHeight + e.clientY - yDividerPos.current);
    setClientWidth(clientWidth + e.clientX - xDividerPos.current);

    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseHoldUp);
    document.addEventListener("mousemove", onMouseHoldMove);

    return () => {
      document.removeEventListener("mouseup", onMouseHoldUp);
      document.removeEventListener("mousemove", onMouseHoldMove);
    };
  });

  return (
    <div {...props}>
      <SplitPaneContext.Provider
        value={{
          clientHeight,
          setClientHeight,
          clientWidth,
          setClientWidth,
          onMouseHoldDown,
        }}
      >
        {children}
      </SplitPaneContext.Provider>
    </div>
  );
};


export const Divider = (props) => {
    const { onMouseHoldDown } = useContext(SplitPaneContext);

    return <div {...props} onMouseDown={onMouseHoldDown} />;
};


export const SplitPaneLeft = (textToAdd, props) => {
    //panel resize setup
    const topRef = createRef();
    const { clientWidth, setClientWidth } = useContext(SplitPaneContext);
    
    //canvas settings
    const settings = useRef({
      stroke: 3,
      color: "#000",
      mode: MODES.PEN,
    });
    const size = useWindowSize();

    //resizing panel
    useEffect(() => {
      if (!clientWidth) {
        const initial = window.innerWidth * 0.5;
        setClientWidth(initial);
        return;
      }
      topRef.current.style.minWidth = clientWidth + "px";
      topRef.current.style.maxWidth = clientWidth + "px";
    }, [clientWidth]);
  
    return (
      <div {...props} className="split-pane-left" ref={topRef}>
        <div className="canvas-container">
          <Canvas {...size} settings={settings} textToAdd={textToAdd}/>
        </div>
      </div>
    );
  };

export const SplitPaneRight = (props) => {
     //canvas settings
     const settings = useRef({
      stroke: 3,
      color: "#000",
      mode: MODES.PEN,
    });
    const size = useWindowSize();

  return (
    <div {...props} className="split-pane-right">
      <div className="canvas-container">
        <Canvas {...size} settings={settings} textToAdd={{"textToAdd": ""}}/>
      </div>
    </div>
  ); 
};

export const SplitPaneTop = ({ onTogglePane, onToggleDict, onTextInput, ...props }) => {
  return (
    <div {...props} className="split-pane-top">
      <button className="split-button" onClick={onToggleDict}>Dictionary</button>
      <button className="split-button" onClick={onTogglePane}>See Translation Notes</button>
      <button className="split-button" onClick={onTextInput}>Input Text</button>
    </div>
  );
};


export const SplitPaneBottom = ({ showThirdPanel, children, ...props }) => {
  return (
    <div {...props} className="split-pane-bottom">
      {children}
    </div>
  );
};

export const SplitPaneThird = () => {
  return (
    <div className="split-pane-third">
      <iframe
        src="https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman"
        height="100%"
        width="100%"
        title="Greco-Roman Collection"
        allowtransparency="true"
        style={{
          border: "none",
          objectFit: "cover", // Maintain aspect ratio
        }}
      />
    </div>
  );
};

export const SplitPaneDict = () => {
  return (
    <div className="split-pane-dict">
      <iframe
        src = "https://www.latin-dictionary.net/"
        height="100%"
        width="100%"
        title="Greco-Roman Collection"
        allowtransparency="true"
        style={{
          border: "none",
          objectFit: "cover", // Maintain aspect ratio
        }}
      />
    </div>
  );
};


export default SplitPane;