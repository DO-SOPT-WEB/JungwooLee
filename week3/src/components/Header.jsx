import styled from "styled-components";
import "../styles/Header.scss";

const Header = () => {
  return (
    <HeaderWrapper>
      <p className="header_title">🍚 오늘의 점메추 🍚</p>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 4rem;
  background-color: var(--lightPink-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;
