import React, { useState, useRef, useEffect } from "react";
import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
  SplitPaneThird,
} from "./SplitPane";
import "./App.css";

function App() {
  return(<p>hey</p>)
}

export default App


// import React, { useState, useRef, useEffect } from "react";
// import SplitPane, {
//   Divider,
//   SplitPaneBottom,
//   SplitPaneLeft,
//   SplitPaneRight,
//   SplitPaneTop,
//   SplitPaneThird,
// } from "./SplitPane";
// import "./App.css";

// function App() {
//   const [showThirdPanel, setShowThirdPanel] = useState(false);
//   const [leftText, setLeftText] = useState("Hello, Left!");
//   const [rightText, setrightText] = useState("");

//   const toggleThirdPanel = () => {
//     setShowThirdPanel((prevState) => !prevState);
//   };

//   return (
//     <div className="App">
//       <SplitPane className="split-pane-col" showThirdPanel={showThirdPanel} toggleThirdPanel={toggleThirdPanel}>
//         <SplitPaneTop onTogglePanel={toggleThirdPanel}  onSaveText={(text) => {
//     setLeftText(text); // or setRightText(text) based on context
//   }}/>
//         <Divider className="separator-row" />
//         <SplitPaneBottom showThirdPanel={showThirdPanel}>
//           <SplitPane className="split-pane-row">
//             <SplitPaneLeft  text={leftText} />
//             <Divider className="separator-col" />
//             <SplitPaneRight text={rightText} />
//             {showThirdPanel && (
//               <SplitPaneThird width="500" />
//             )}
//           </SplitPane>
//         </SplitPaneBottom>
//       </SplitPane>
//     </div>
//   );
// }

// export default App;




























// // import SplitPane, {
// //   Divider,
// //   SplitPaneBottom,
// //   SplitPaneLeft,
// //   SplitPaneRight,
// //   SplitPaneTop,
// // } from "./SplitPane";
// // import { useState } from "react";

// // import "./App.css";

// // // import { useRef } from "react";
// // // import { MODES } from "./constants";

// // function App() {

// //   const [showThirdPanel, setShowThirdPanel] = useState(false);

// //   const toggleThirdPanel = () => {
// //     setShowThirdPanel((prevState) => !prevState);
// //   };

// //   // const settings = useRef({
// //   //   stroke: 3,
// //   //   color: "#000",
// //   //   mode: MODES.PEN,
// //   // });

// //   return (
// //     <div className="App">
// //         <SplitPane className="split-pane-col">
// //         <SplitPaneTop onTogglePanel={toggleThirdPanel} />
// //           <Divider className="separator-row" />
// //           <SplitPaneBottom showThirdPanel={showThirdPanel}>
// //           <SplitPane className = "split-pane-row">
// //               <SplitPaneLeft />
// //               <Divider className="separator-col" />
// //               <SplitPaneRight/>
// //               {showThirdPanel && (
// //               <>
// //                 <Divider className="separator-col" />
// //                 <div className="split-pane-third">
// //                 <iframe
// //                     src="https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman"
// //                     height="100%"
// //                     width="100%"
// //                     title="Greco-Roman Collection"
// //                     allowtransparency="true"
// //                     style={{
// //                       border: "none", // Remove iframe border
// //                       height: "100%",
// //                       width: "100%",
// //                       objectFit: "cover", // Maintain aspect ratio of content
// //                     }}
// //                   />
// //                 </div>
// //               </>
// //             )}
// //               {/* <SplitPaneRight /> */}
// //             </SplitPane>
// //           </SplitPaneBottom>
// //         </SplitPane>
// //     </div>
// //   );
// // }

// // export default App;