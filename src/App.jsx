import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Priceoption from "./Navbar/Priceoption";
import LiveChart from "./Navbar/LiveChart";
import Phone from "./Navbar/Phone";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Priceoption></Priceoption>
      <LiveChart></LiveChart>
      <Phone></Phone>
    </>
  );
}

export default App;
