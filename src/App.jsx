import "./App.css";
import Chart from "./Components/Chart/Chart";
import Navbar from "./Components/Navbar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {


  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <Chart></Chart>
    </>
  );
}

export default App;
