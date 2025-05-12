// import React, {
//     createRef,
//     useContext,
//     useEffect,
//     useRef,
//     useState,
// } from "react";
// import SplitPaneContext from "./SplitPaneContext";

// import Canvas from "./Canvas";
// import { useWindowSize } from "./hooks";
// import { MODES } from "./constants"; 

// const SplitPane = ({ children, showThirdPanel, ...props }) => {
// const [clientHeight, setClientHeight] = useState(null);
// const [clientWidth, setClientWidth] = useState(null);
// const yDividerPos = useRef(null);
// const xDividerPos = useRef(null);
// // const [leftText, setLeftText] = useState("Hello, Left!");
// // const [rightText, setRightText] = useState("Hello, Right!");

// const onMouseHoldDown = (e) => {
//     yDividerPos.current = e.clientY;
//     xDividerPos.current = e.clientX;
// };

// const onMouseHoldUp = () => {
//     yDividerPos.current = null;
//     xDividerPos.current = null;
// };

// const onMouseHoldMove = (e) => {
//     if (!yDividerPos.current && !xDividerPos.current) {
//         return;
//     }

//     setClientHeight(clientHeight + e.clientY - yDividerPos.current);
//     setClientWidth(clientWidth + e.clientX - xDividerPos.current);

//     yDividerPos.current = e.clientY;
//     xDividerPos.current = e.clientX;
// };

// useEffect(() => {
//     document.addEventListener("mouseup", onMouseHoldUp);
//     document.addEventListener("mousemove", onMouseHoldMove);

//     return () => {
//         document.removeEventListener("mouseup", onMouseHoldUp);
//         document.removeEventListener("mousemove", onMouseHoldMove);
//     };
// });

// return (
//     <div {...props}>
//         <SplitPaneContext.Provider
//         value={{
//             clientHeight,
//             setClientHeight,
//             clientWidth,
//             setClientWidth,
//             onMouseHoldDown,
//         }}
//         >
//             {children}
//         </SplitPaneContext.Provider>
//     </div>
//     );
// };


// export const Divider = (props) => {
//     const { onMouseHoldDown } = useContext(SplitPaneContext);

//     return <div {...props} onMouseDown={onMouseHoldDown} />;
// };


// export const SplitPaneLeft = (text, ... props) => {
//     const topRef = createRef();
//     const { clientWidth, setClientWidth } = useContext(SplitPaneContext);
//     // const [leftText, setLeftText] = useState("Hello, Left!");
    
//     const settings = useRef({
//       stroke: 3,
//       color: "#000",
//       mode: MODES.PEN,
//     });
  
//     const size = useWindowSize();
  
//     useEffect(() => {
//       if (!clientWidth) {
//         const initial = window.innerWidth * 0.5;
//         setClientWidth(initial);
//         return;
//       }
//       topRef.current.style.minWidth = clientWidth + "px";
//       topRef.current.style.maxWidth = clientWidth + "px";
//     }, [clientWidth]);
  
//     console.log(clientWidth, text, "from left pane")
//     return (
//       <div {...props} className="split-pane-left" ref={topRef}>
//         <div className="canvas-container">
//           <Canvas {...size} settings={settings} text={text}/>
//         </div>
//       </div>
//     );
//   };

// export const SplitPaneRight = (rightText,... props) => {
//     const settings = useRef({
//       stroke: 3,
//       color: "#000",
//       mode: MODES.PEN,
//     });
  
//     const size = useWindowSize();
//     // const [leftText, setLeftText] = useState("Hello, Left!");
//     // const [rightText, setRightText] = useState("Hello, Right!");
  
//     return (
//       <div {...props} className="split-pane-right">
//         <div className="canvas-container">
//           <Canvas {...size} settings={settings} text={rightText}/>
//         </div>
//       </div>
//     );
//   };


// // export const SplitPaneTop = ({ onTogglePanel, ...props }) => {

// //   return (
// //     <div {...props} className="split-pane-top">
// //       <button onClick={onTogglePanel}>Translation notes</button>
// //     </div>
// //   );
// // };

// export const SplitPaneTop = ({ onTogglePanel, onSaveText, ...props }) => {
//   const [showInput, setShowInput] = useState(false);
//   const [text, setText] = useState("");

//   const handleSave = () => {
//     if (onSaveText) onSaveText(text); // send text to parent
//     setShowInput(false);
//   };

//   return (
//     <div {...props} className="split-pane-top">
//       <button onClick={onTogglePanel}>Toggle Third Panel</button>

//       {!showInput && (
//         <button onClick={() => setShowInput(true)}>Add Text</button>
//       )}

//       {showInput && (
//         <div>
//           <textarea
//             rows={4}
//             cols={50}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Type your text here..."
//             style={{ whiteSpace: "pre-wrap", display: "block", marginTop: "0.5rem" }}
//           />
//           <button onClick={handleSave} style={{ marginTop: "0.5rem" }}>
//             Save Text
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export const SplitPaneBottom = ({ showThirdPanel, children, ...props }) => {
//   return (
//     <div {...props} className="split-pane-bottom">
//       {children}
//       {/* content here */}
//     </div>
//   );
// };


// export const SplitPaneThird = ({ width, onMouseDown }) => {
//   return (
//     <div
//       className="split-pane-third"
//       style={{
//         width: width + "px",
//         transition: "width 0.2s ease", // Smooth transition for resizing
//       }}
//     >
//       <iframe
//         src="https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman"
//         height="100%"
//         width="100%"
//         title="Greco-Roman Collection"
//         allowtransparency="true"
//         style={{
//           border: "none",
//           height: "100%",
//           width: "100%",
//           objectFit: "cover", // Maintain aspect ratio
//         }}
//       />
//       <Divider className="separator-col" onMouseDown={onMouseDown} />
//     </div>
//   );
// };


// export default SplitPane;


























// // export const SplitPaneBottom = (props) => {
// //         // const topRef = createRef();
    
// //         return (
// //             <div {...props} className="split-pane-bottom">
// //                 {/* content here */}
// //             </div>
// //             );
// //     };


// // export const SplitPaneRight = ({ showThirdPanel }) => {
// //   const size = useWindowSize();
// //   const canvasSettings = useRef({
// //     stroke: 3,
// //     color: "#000",
// //     mode: MODES.PEN,
// //   });

// //   const [rightWidth, setRightWidth] = useState(window.innerWidth / 2);
// //   const isResizing = useRef(false);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       if (!isResizing.current) return;

// //       // Calculate new width for right panel
// //       const newWidth = e.clientX;
// //       const min = 100;
// //       const max = window.innerWidth - 200;
// //       if (newWidth > min && newWidth < max) {
// //         setRightWidth(newWidth);
// //       }
// //     };

// //     const handleMouseUp = () => {
// //       isResizing.current = false;
// //     };

// //     window.addEventListener("mousemove", handleMouseMove);
// //     window.addEventListener("mouseup", handleMouseUp);
// //     return () => {
// //       window.removeEventListener("mousemove", handleMouseMove);
// //       window.removeEventListener("mouseup", handleMouseUp);
// //     };
// //   }, []);

// //   return (
// //     <div style={{ display: "flex", width: "100%", height: "100%" }}>
// //       {/* Right panel with resizable width */}
// //       <div
// //         className="split-pane-right"
// //         style={{
// //           width: showThirdPanel ? `${rightWidth}px` : "100%",
// //           backgroundColor: "#195498",
// //           overflow: "hidden",
// //         }}
// //       >
// //         <div className="canvas-container">
// //           <Canvas {...size} settings={canvasSettings} />
// //         </div>
// //       </div>

// //       {showThirdPanel && (
// //         <>
// //           {/* Divider */}
// //           <div
// //             className="separator-col"
// //             style={{ width: "5px", backgroundColor: "black", cursor: "col-resize" }}
// //             onMouseDown={() => {
// //               isResizing.current = true;
// //             }}
// //           />

// //           {/* Third panel */}
// //           <div
// //             className="split-pane-third"
// //             style={{
// //               flex: 1,
// //               backgroundColor: "#ff9900",
// //               padding: "1rem",
// //               overflow: "auto",
// //             }}
// //           >
// //             <h3>Third Panel</h3>
// //             <p>This panel appears and resizes the right panel.</p>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export const SplitPaneRight = ({ showThirdPanel, ...props }) => {
// //   const settings = useRef({
// //     stroke: 3,
// //     color: "#000",
// //     mode: MODES.PEN,
// //   });

// //   const size = useWindowSize();

// //   return (
// //     <div style={{ display: "flex", flex: 1, overflow: "hidden" }} {...props}>
// //       <div className="split-pane-right" style={{ flex: showThirdPanel ? 1 : 1 }}>
// //         <div className="canvas-container">
// //           <Canvas {...size} settings={settings} />
// //         </div>
// //       </div>
// //       {showThirdPanel && (
// //         <div className="split-pane-third" style={{ flex: 1, backgroundColor: "#00000", overflow: "auto", padding: "1rem" }}>
// //                   <iframe src="https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman" 
// //             height="500" width="500" title="description" allowtransparency="true"> </iframe>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export const SplitPaneTop = (props) => {
// //         return (
// //         <div {...props} className="split-pane-top">
// //             {/*content here*/}
// //         </div>
// //         );
// //     };

// // export const SplitPaneTop = ({ onTogglePanel, ...props }) => {
// //   return (
// //     <div {...props} className="split-pane-top">
// //       <button onClick={onTogglePanel}>Toggle Third Panel</button>
// //     </div>
// //   );
// // };