import "./App.css";
import Navbar from "./navbar";
import Header from "./header";
import CustomeBar from "./cutomise-bar";
import ProjectScreen from "./projects_screen";
import Footer from "./footer";
import { useRef } from "react";

function App() {
  const projectRef = useRef(null);

  return (
    <>
      <Navbar />
      <Header projectRef={projectRef} />
      <CustomeBar />
      <ProjectScreen projectRef={projectRef} />
      <Footer />
    </>
  );
}

export default App;
