import styled from "styled-components"
import { hoverGrow } from "../../shared/animation/hoverGrow"
import { kakaoLogin } from "../../apis/api/login.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginButton({methodImg, method, color, backgroundColor}) {
  const isGoogle = method === "구글";
  const navigate = useNavigate();

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
  //   script.async = true;
  //   script.onload = () => {
  //     console.log('Kakao SDK loaded');
  //   };
  //   document.body.appendChild(script);
  // }, []);

  const login = () => {
    if(method === "카카오") {
      // kakaoLogin();
      window.location.href = "https://metalog.store/oauth2/authorization/kakao";
    } else if(method === "네이버") {
      window.location.href = "https://metalog.store/oauth2/authorization/naver";
    } else if(method === "구글") {
      window.location.href = "https://metalog.store/oauth2/authorization/google";
    }
  }

  return (
    <ButtonContainer backgroundColor={backgroundColor} isGoogle={isGoogle} onClick={login}>
        <img src={methodImg} alt="methodImg" />
        <LoginText color={color}>{method}로 시작하기</LoginText>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  width: 90%;
  padding-left: 4.7rem;
  padding-right: 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 1rem;
  ${hoverGrow};
  border: ${({isGoogle}) => (isGoogle ? "1px solid #EEE" : "none")};
`

const ButtonInnerContainer = styled.div`
  // display: flex;
  // justify-content: space-between;
  // gap: 1.7rem;
`

const LoginText = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({color}) => color};
  margin: 0;
`
