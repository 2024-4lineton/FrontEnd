import styled from "styled-components"
import TitleBigLogo from "../../assets/Login/HelFooMeBigLogo.svg";

export default function Login() {
  return (
    <>
      <Title>
        <image stc={TitleBigLogo} alt="logoImg" />
      </Title>
    </>
  )
}

const Title = styled.div`
  marginTop: 7rem;
  display: flex;
  // flexDirection: 
`