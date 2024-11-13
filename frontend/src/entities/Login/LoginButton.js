import styled from "styled-components"
import { hoverGrow } from "../../shared/animation/hoverGrow"
import { kakaoLogin } from "../../apis/api/login.js";

export default function LoginButton({methodImg, method, color, backgroundColor}) {
  const isGoogle = method === "구글";

  const login = () => {
    if(method === "카카오") {
      kakaoLogin();
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
