import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>To continue to Youtube</SubTitle>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="password" />
        <Button>Sign In</Button>

        <Title>or</Title>
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="password" />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(US)
        <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 65vh;
  width: 22vw;
  background-color: ${({ theme }) => theme.menuBg};
  padding: 30px 50px;
  border-radius: 3px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
    font-size: 16px;
`;
const SubTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;
const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.soft};   
  border-radius: 3px;
  padding: 10px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    color: ${({ theme }) => theme.textSoft};
    background-color: ${({ theme }) => theme.soft};
    cursor: pointer;
`;

const More = styled.div`
    display: flex;
    justify-content: space-between;
    width: 22vw;
    margin-top: 5px;
    color: ${({ theme }) => theme.textSoft};
    padding: 0px 5px;
`;
const Links = styled.p`
    display: flex;
    gap: 10px;
`;
const Link = styled.p`
    cursor: pointer;
`;