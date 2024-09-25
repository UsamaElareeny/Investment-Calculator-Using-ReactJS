import { useState } from "react";
import Results from "./components/Results";
import Input from "./components/Input";
import {calculateInvestmentResults} from "./util/investment.js";
function App() {
  const[initialInvestment, setInitialInvestment] = useState(null);
  const[annualInvestment, setAnnualInvestment] = useState(null);
  const[expectedReturn, setExpectedReturn] = useState(null);
  const[duration, setDuration] = useState(null);
  const[populateTable, setPopulateTable] = useState(null);

  function investmentData(label, value){
    switch(label){
      case "INITIAL INVESTMENT":
        setInitialInvestment(Number(value));
        break;
      case "ANNUAL INVESTMENT":
        setAnnualInvestment(Number(value));
        break;
      case "EXPECTED RETURN":
        setExpectedReturn(Number(value));
        break;
      case "DURATION":
        setDuration(Number(value));
        break;
      default:
        break;
    }
    if(initialInvestment && annualInvestment && expectedReturn && duration){
      const results = calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration});
      setPopulateTable(results);
    }
  }
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <Input type="number" onChange={investmentData}>INITIAL INVESTMENT</Input>
          <Input type="number" onChange={investmentData}>ANNUAL INVESTMENT</Input>
        </div>
        <div className="input-group">
          <Input type="number" onChange={investmentData}>EXPECTED RETURN</Input>
          <Input type="number" onChange={investmentData}>DURATION</Input>
        </div>
      </section>
      {populateTable && <Results populateData={populateTable}/>}
    </>
  );
}

export default App
