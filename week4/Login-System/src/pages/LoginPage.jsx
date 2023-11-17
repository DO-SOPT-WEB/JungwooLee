import styled from "styled-components";
import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  InputBox,
  InputOptionText,
  InputWrapper,
  ModalContainer,
  ModalTitle,
  PageWrapper,
} from "../styles/index";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");

  const navigate = useNavigate();

  const handleChangeIdInput = (e) => {
    setId(e.target.value);
  };

  const handleChangePasswdInput = (e) => {
    setPasswd(e.target.value);
  };

  const handleClickLoginButton = () => {
    if (id === "") {
      alert("아이디를 입력해 주세요!!");
    } else if (passwd === "") {
      alert("비밀번호를 입력해 주세요!!");
    } else {
      axios({
        method: "post",
        url: `${import.meta.env.VITE_BASE_URL}/api/v1/members/sign-in`,
        data: {
          username: id,
          password: passwd,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            navigate(`/mypage/${response.data.id}`);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleClickSignUpButton = () => {
    navigate("/signup");
  };

  return (
    <PageWrapper>
      <ModalContainer>
        <ModalTitle>Login</ModalTitle>
        <InputWrapper>
          <InputOptionText>ID</InputOptionText>
          <InputBox
            type="text"
            name=""
            id=""
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={handleChangeIdInput}
          />
        </InputWrapper>
        <InputWrapper>
          <InputOptionText>비밀번호</InputOptionText>
          <InputBox
            type="text"
            name=""
            id=""
            placeholder="비밀번호를 입력해주세요"
            value={passwd}
            onChange={handleChangePasswdInput}
          />
        </InputWrapper>
        <Button onClick={handleClickLoginButton}>로그인</Button>
        <SignUpButton onClick={handleClickSignUpButton}>회원가입</SignUpButton>
      </ModalContainer>
    </PageWrapper>
  );
};

export default LoginPage;

const SignUpButton = styled.button`
  display: inline-block;

  margin-top: 1rem;

  border: none;
  background-color: transparent;

  font-size: 0.8rem;

  &:hover {
    text-decoration: underline;

    cursor: pointer;
  }
`;
