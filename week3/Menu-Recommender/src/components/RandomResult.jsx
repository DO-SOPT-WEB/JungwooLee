import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { menuData } from "../utils/MenuData";

const RandomResult = ({ setStep }) => {
  const randomFirstIndex = Math.floor(Math.random() * menuData.length);
  const randomSecondIndex = Math.floor(
    Math.random() * menuData[randomFirstIndex].length
  );
  const randomThirdIndex = Math.floor(
    Math.random() * menuData[randomFirstIndex][randomSecondIndex].length
  );

  const randomFood =
    menuData[randomFirstIndex][randomSecondIndex][randomThirdIndex];

  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count === 0) {
        clearInterval(timer);
      } else {
        setCount(count - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  const resultMenu = randomFood.menu;
  const resultMenuImg = randomFood.img;

  const handleClickResetButton = () => {
    setStep(-1);
  };

  return (
    <RandomResultWrapper>
      {count > 0 ? (
        <CounterWrapper>
          <h1>{count}</h1>
        </CounterWrapper>
      ) : (
        <React.Fragment>
          <RandomResultHeader>
            <h1>오늘의 추천 음식은 바로!!</h1>
          </RandomResultHeader>
          <RandomResultImageWrapper>
            <MenuImg src={resultMenuImg} alt="추천 메뉴 이미지" />
          </RandomResultImageWrapper>
          <RandomResultMenu>{resultMenu}</RandomResultMenu>
          <ResetButton onClick={handleClickResetButton}>다시하기</ResetButton>
        </React.Fragment>
      )}
    </RandomResultWrapper>
  );
};

export default RandomResult;

const RandomResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 59.375rem;
  height: 31.25rem;

  border-radius: 0.7rem;
  background-color: var(--pastelPink-color);
`;

const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 4rem;
`;

const RandomResultHeader = styled.header`
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

const RandomResultImageWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  margin-top: 2rem;
`;

const RandomResultMenu = styled.div`
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
