import styled from "styled-components";

const RecommendOption = ({ setOptionType, optionType, setStep }) => {
  const handleClickStartButton = () => {
    setStep(0);
  };

  return (
    <RecommendOptionWrapper>
      <RecommendOptionHeader>
        <h1>원하는 추천 방식을 골라줘!</h1>
      </RecommendOptionHeader>
      <RecommendOptionButtonWrapper>
        {optionType === 1 ? (
          <SelectResultBox>
            <h2>
              취향대로
              <br />
              추천
            </h2>
          </SelectResultBox>
        ) : optionType === 2 ? (
          <SelectResultBox>
            <h2>
              랜덤
              <br />
              추천
            </h2>
          </SelectResultBox>
        ) : (
          <>
            <RecommendOptionButton onClick={() => setOptionType(1)}>
              <h2>
                취향대로
                <br />
                추천
              </h2>
            </RecommendOptionButton>
            <RecommendOptionButton onClick={() => setOptionType(2)}>
              <h2>
                랜덤
                <br />
                추천
              </h2>
            </RecommendOptionButton>
          </>
        )}
      </RecommendOptionButtonWrapper>
      {optionType !== -1 ? (
        <StartButton onClick={handleClickStartButton}>시작하기</StartButton>
      ) : (
        <></>
      )}
    </RecommendOptionWrapper>
  );
};

export default RecommendOption;

const RecommendOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 59.375rem;
  height: 31.25rem;

  border-radius: 0.7rem;
  background-color: var(--pastelPink-color);
`;

const RecommendOptionHeader = styled.header`
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

const RecommendOptionButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 60%;
  margin-top: 4rem;
`;

const RecommendOptionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 17rem;
  height: 17rem;

  border: 1px solid lightgray;
  border-radius: 1rem;
  background-color: var(--seaShell-color);

  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 2rem;

  &:hover {
    background-color: var(--redBrown-color);

    color: white;

    cursor: pointer;
  }
`;

const SelectResultBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 17rem;

  border: 1px solid lightgray;
  border-radius: 1rem;
  background-color: var(--seaShell-color);

  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 2rem;
`;

const StartButton = styled.button`
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
