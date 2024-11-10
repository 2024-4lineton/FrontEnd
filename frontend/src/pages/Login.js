import styled from "styled-components"
import TitleBigLogo from "../assets/Login/HelFooMeBigLogo.svg";
import { TItleText } from "../entities/Login/LoginCss";
import kakaoLogo from "../assets/Login/kakao.svg";
import naverLogo from "../assets/Login/naver.svg";
import googleLogo from "../assets/Login/google.svg";
import potatoLogo from "../assets/Login/potato.svg";
import LoginButton from "../entities/Login/LoginButton";
import TermsAgreeText from "../entities/Login/TermsAgreeText";

const LoginButtons = [
  {method: "카카오", image: kakaoLogo, color: "#3C1E1E", backgroundColor: "#FAE300"},
  {method: "네이버", image: naverLogo, color: "#FFF", backgroundColor: "#03C75A"},
  {method: "구글", image: googleLogo, color: "#333", backgroundColor: "#FFF"},
];

export default function Login() {
  return (
    <LoginPage>
      <Title>
        <img src={TitleBigLogo} alt="logoImg" />
        <TItleText style={{fontSize: "1rem"}}>헬푸미와 함께 지구를 지켜봐요!</TItleText>
      </Title>
      <img src={potatoLogo} alt="potatoImg" style={{marginTop: "8rem"}} />
      <ButtonsContainer>
        {LoginButtons.map((item, index) => {
          return (
            <LoginButton methodImg={item.image} method={item.method} color={item.color} backgroundColor={item.backgroundColor} key={index} />
          )
        })}
      </ButtonsContainer>
      <TermsAgreeText />
    </LoginPage>
  )
}

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  padding-top: 7rem;
  gap: 1.25rem;
`

const ButtonsContainer = styled.div`
  margin-top: 3rem;
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`