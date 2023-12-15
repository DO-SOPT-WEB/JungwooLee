import styled from "styled-components";
import axios from "axios";

import { useEffect, useState } from "react";
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

const SignUpPage = () => {
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");
  const [checkPasswd, setCheckPasswd] = useState("");
  const [nickname, setNickname] = useState("");
  const [isExist, setIsExist] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsComplete(
      id !== "" &&
        isExist === 2 &&
        passwd !== "" &&
        passwd === checkPasswd &&
        nickname !== ""
    );
  }, [id, isExist, passwd, checkPasswd, nickname]);

  const navigate = useNavigate();

  const handleChangeIdInput = (e) => {
    setId(e.target.value);
    setIsExist(0);
  };

  const handleChangePasswdInput = (e) => {
    setPasswd(e.target.value);
  };

  const handleChangePasswdCheckInput = (e) => {
    setCheckPasswd(e.target.value);
  };

  const handleChangeNicknameInput = (e) => {
    setNickname(e.target.value);
  };

  const handleClickDuplicateButton = () => {
    if (id === "") {
      alert("아이디를 입력해 주세요!");
    } else {
      axios({
        method: "get",
        url: `${import.meta.env.VITE_BASE_URL}/api/v1/members/check`,
        params: {
          username: id,
        },
      })
        .then((response) => {
          console.log(response);
          setIsExist(response.data.isExist ? 1 : 2);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleClickCompleteSignUpButton = () => {
    axios({
      method: "post",
      url: `${import.meta.env.VITE_BASE_URL}/api/v1/members`,
      data: {
        username: id,
        nickname: nickname,
        password: passwd,
      },
    })
      .then((response) => {
        if (response.status === 201) {
          alert("회원가입이 완료되었습니다!!!");
          navigate("/login");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <PageWrapper>
      <ModalContainer>
        <ModalTitle>Sign Up</ModalTitle>
        <InputWrapper>
          <InputOptionText>ID</InputOptionText>
          <UserIdInputBox
            type="text"
            name=""
            id=""
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={handleChangeIdInput}
          />
          <DuplicateCheckButton
            onClick={handleClickDuplicateButton}
            isExist={isExist}
          >
            중복체크
          </DuplicateCheckButton>
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
        <InputWrapper>
          <InputOptionText>비밀번호 확인</InputOptionText>
          <InputBox
            type="text"
            name=""
            id=""
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            value={checkPasswd}
            onChange={handleChangePasswdCheckInput}
          />
        </InputWrapper>
        <InputWrapper>
          <InputOptionText>닉네임</InputOptionText>
          <InputBox
            type="text"
            name=""
            id=""
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={handleChangeNicknameInput}
          />
        </InputWrapper>
        <Button
          color="white"
          onClick={handleClickCompleteSignUpButton}
          disabled={!isComplete}
        >
          회원가입
        </Button>
      </ModalContainer>
    </PageWrapper>
  );
};

export default SignUpPage;

const UserIdInputBox = styled.input`
  width: 50%;
  height: 2.2rem;
`;

const DuplicateCheckButton = styled.button`
  display: inline-block;

  width: 20%;
  height: 2.2rem;
  margin-left: 5%;

  border: ${(props) => (props.isExist !== 0 ? "none" : "")};
  border-radius: 0.2rem;
  background-color: ${(props) =>
    props.isExist === 1 ? "red" : props.isExist === 2 ? "green" : "black"};

  color: white;
  font-size: 0.8rem;

  &:hover {
    cursor: ${(props) => (props.isExist === 0 ? "pointer" : "default")};
  }
`;
