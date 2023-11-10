import styled from "styled-components";
import { menuData } from "../utils/MenuData";

const RecommendResult = ({ resultCombination, setStep }) => {
  const resultMenu =
    menuData[resultCombination[0]][resultCombination[1]][resultCombination[2]]
      .menu;
  const resultMenuImg =
    menuData[resultCombination[0]][resultCombination[1]][resultCombination[2]]
      .img;

  const handleClickResetButton = () => {
    setStep(-1);
  };

  return (
    <RecommendOptionWrapper>
      <RecommendResultHeader>
        <h1>오늘의 추천 음식은 바로!!</h1>
      </RecommendResultHeader>
      <RecommendResultImageWrapper>
        <MenuImg src={resultMenuImg} alt="추천 메뉴 이미지" />
      </RecommendResultImageWrapper>
      <RecommendResultMenu>{resultMenu}</RecommendResultMenu>
      <ResetButton onClick={handleClickResetButton}>다시하기</ResetButton>
    </RecommendOptionWrapper>
  );
};

export default RecommendResult;

const RecommendOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 59.375rem;
  height: 31.25rem;

  border-radius: 0.7rem;
  background-color: var(--pastelPink-color);
`;

const RecommendResultHeader = styled.header`
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

const RecommendResultImageWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  margin-top: 2rem;
`;

const RecommendResultMenu = styled.div`
  padding: 0.5rem;
  margin-top: 1rem;

  border-top: 2px solid brown;
  border-bottom: 2px solid brown;
  background-color: white;

  font-size: 2rem;
  font-weight: 600;
`;

const ResetButton = styled.button`
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

const MenuImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
