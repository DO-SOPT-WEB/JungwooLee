import { useEffect, useState } from "react";
import { ModalContainer, ModalTitle, PageWrapper } from "../styles/index";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";

import profileImage from "../assets/images/짱구.jpg";

const MyPage = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

  let { userId } = useParams();

  const navigate = useNavigate();

  const handleClickLogoutButton = () => {
    navigate("/login");
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_BASE_URL}/api/v1/members/${userId}`,
    }).then((response) => {
      setUsername(response.data.username);
      setNickname(response.data.nickname);
    });
  }, []);

  return (
    <PageWrapper>
      <ModalContainer>
        <ModalTitle>MY PAGE</ModalTitle>
        <UserInfoContainer>
          <ProfileImage src={profileImage} alt="프로필 이미지" />
          <UserInfo>
            <UserInfoText>ID: {username}</UserInfoText>
            <UserInfoText>닉네임: {nickname}</UserInfoText>
          </UserInfo>
        </UserInfoContainer>
        <LogoutButton onClick={handleClickLogoutButton}>로그아웃</LogoutButton>
      </ModalContainer>
    </PageWrapper>
  );
};

export default MyPage;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2rem;

  margin-top: 1rem;
`;

const ProfileImage = styled.img`
  width: 7rem;
  height: 7rem;

  object-fit: cover;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;

  width: 10rem;
`;

const UserInfoText = styled.p`
  padding: 0.3rem 0.8rem;

  background-color: #ecd5e3;

  font-size: 1.2rem;
  font-weight: 700;
`;

const LogoutButton = styled.button`
  padding: 0.3rem 0.7rem;
  margin-top: 2rem;

  border: none;
  border-radius: 0.3rem;
  background-color: lightgray;

  color: white;
  font-weight: 600;

  &:hover {
    background-color: black;

    cursor: pointer;
  }
`;
