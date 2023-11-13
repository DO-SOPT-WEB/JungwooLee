import styled from "styled-components";
import { selectStepTitle, selectStepOption } from "../utils/SelectStepData";
import { useState } from "react";

const SelectStep = ({
  step,
  setStep,
  resultCombination,
  setResultCombination,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const handleClickSelectStepButton = (idx) => {
    if (selectedIdx === idx) {
      setSelectedIdx(-1);
    } else {
      setSelectedIdx(idx);
    }
  };

  const handleClickBeforeButton = () => {
    let result = resultCombination;
    result[step] = undefined;
    setResultCombination(result);
    setSelectedIdx(-1);
    setStep(step - 1);
  };

  const handleClickNextButton = () => {
    let result = resultCombination;
    result[step] = selectedIdx;
    setResultCombination(result);
    setSelectedIdx(-1);
    setStep(step + 1);
  };

  return (
    <SelectStepWrapper>
      <SelectStepHeader>
        <h1>{selectStepTitle[step]}</h1>
      </SelectStepHeader>
      <StepCount>
        {step + 1} / {selectStepTitle.length}
      </StepCount>
      <SelectStepButtonWrapper>
        {selectStepOption[step].map((item, idx) => (
          <SelectStepButton
            key={idx}
            onClick={() => handleClickSelectStepButton(idx)}
            style={
              idx === selectedIdx
                ? {
                    backgroundColor: "var(--redBrown-color)",
                    color: "white",
                    border: "2px solid gray",
                  }
                : {}
            }
          >
            {item}
          </SelectStepButton>
        ))}
      </SelectStepButtonWrapper>
      <NextButtonWrapper>
        <BeforeButton onClick={handleClickBeforeButton}>이전으로</BeforeButton>
        <NextButton
          onClick={selectedIdx === -1 ? () => {} : handleClickNextButton}
          style={
            selectedIdx === -1
              ? {
                  backgroundColor: "lightgray",
                  color: "gray",
                }
              : {}
          }
        >
          {step === 2 ? "결과보기" : "다음으로"}
        </NextButton>
      </NextButtonWrapper>
    </SelectStepWrapper>
  );
};

export default SelectStep;

const SelectStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 59.375rem;
  height: 31.25rem;

  border-radius: 0.7rem;
  background-color: var(--pastelPink-color);
`;

const SelectStepHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 55%;
  height: 2.5rem;
  margin-top: 2rem;

  border-radius: 0.5rem;
  background-color: var(--seaShell-color);

  font-size: 1.5rem;
  font-weight: 600;
`;

const SelectStepButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  width: 60%;
  margin-top: 4rem;
`;

const SelectStepButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 10rem;

  border: 1px solid lightgray;
  border-radius: 1rem;
  background-color: var(--seaShell-color);

  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 2rem;

  &:hover {
    border: 2px solid gray;
    background-color: var(--redBrown-color);

    color: white;

    cursor: pointer;
  }
`;

const NextButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const BeforeButton = styled.button`
  width: 5rem;
  height: 2rem;
  margin-top: 1.7rem;

  border: none;
  border-radius: 0.5rem;
  background-color: skyblue;

  font-size: 0.9rem;
  font-weight: 600;

  &:hover {
    border: 1.5px solid gray;

    cursor: pointer;
  }
`;

const NextButton = styled.button`
  width: 5rem;
  height: 2rem;
  margin-top: 1.7rem;

  border: none;
  border-radius: 0.5rem;
  background-color: skyblue;

  font-size: 0.9rem;
  font-weight: 600;

  &:hover {
    border: 1.5px solid gray;

    cursor: pointer;
  }
`;

const StepCount = styled.p`
  display: flex;
  justify-content: flex-end;

  width: 55%;
  margin-top: 1.8rem;
`;
