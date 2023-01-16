import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const anchors = ["firstPage", "secondPage", "thirdPage"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#c2b280","#8a9a5b","#4f7942" ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <About/>
          <Projects/>
          <Contact/>
        </div>
      );
    }}
  />
);
export default App;
