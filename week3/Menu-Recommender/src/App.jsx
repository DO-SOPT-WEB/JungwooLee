import React, { useState } from "react";
import Header from "./components/Header";
import RecommendOption from "./components/RecommendOption";
import SelectStep from "./components/SelectStep";
import RecommendResult from "./components/RecommendResult";
import RandomResult from "./components/RandomResult";

import styled from "styled-components";

function App() {
  const [step, setStep] = useState(-1);
  const [optionType, setOptionType] = useState(-1);
  const [resultCombination, setResultCombination] = useState(new Array(3));

  return (
    <React.Fragment>
      <Header />
      <ContentSwapWrapper>
        {step === -1 ? (
          <RecommendOption
            setOptionType={setOptionType}
            optionType={optionType}
            setStep={setStep}
          />
        ) : step === resultCombination.length ? (
          <RecommendResult
            resultCombination={resultCombination}
            setStep={setStep}
          />
        ) : optionType === 1 ? (
          <SelectStep
            step={step}
            setStep={setStep}
            resultCombination={resultCombination}
            setResultCombination={setResultCombination}
          />
        ) : (
          <RandomResult setStep={setStep} />
        )}
      </ContentSwapWrapper>
    </React.Fragment>
  );
}

export default App;

const ContentSwapWrapper = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;
