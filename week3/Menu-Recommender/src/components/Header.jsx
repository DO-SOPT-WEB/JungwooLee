import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>🍚 오늘의 점메추 🍚</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4rem;

  background-color: var(--pastelPink-color);
`;

const HeaderTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;
