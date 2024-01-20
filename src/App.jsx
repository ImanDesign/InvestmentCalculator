import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result.jsx";

const INITIAL_INVESTMENT_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
};

function App() {
  const [investmentData, setInvestmentData] = useState(INITIAL_INVESTMENT_DATA);
  const investmentDataIsValid = investmentData.duration > 0;

  function handleInvestmentDataChange(inputId, value) {
    setInvestmentData(prevInvestmentData => {
      return {
        ...prevInvestmentData,
        [inputId]: +value
      }
    });    
  }

  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput
            inputId="initialInvestment"
            labelText="Initial Investment"
            initialValue={investmentData['initialInvestment']}
            onValueChange={handleInvestmentDataChange}
          />
          <UserInput
            inputId="annualInvestment"
            labelText="Annual Investment"
            initialValue={investmentData['annualInvestment']}
            onValueChange={handleInvestmentDataChange}
          />
        </div>
        <div className="input-group">
          <UserInput
            inputId="expectedReturn"
            labelText="Expected Return"
            initialValue={investmentData['expectedReturn']}
            onValueChange={handleInvestmentDataChange}
          />
          <UserInput
            inputId="duration"
            labelText="Duration"
            initialValue={investmentData['duration']}
            onValueChange={handleInvestmentDataChange}
          />
        </div>
      </section>
      {!investmentDataIsValid && <p className="center">Please enter a duration greater than 0.</p>}
      {investmentDataIsValid && <Result inputData={investmentData} />}
    </>
  );
}

export default App;
