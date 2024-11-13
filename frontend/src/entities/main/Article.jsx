import styled from "styled-components";
import Articlecontent from "./Articlecontent";
import { hoverGrow } from "../../shared/animation/hoverGrow";
import { useState } from "react";


export default function Article(){

    const [selected, setSelected] = useState("아티클");

    const handleClick = (buttonName) => {
        setSelected(buttonName);
    };

    return(
        <>
            <Title>실시간 인기글 👀</Title>
            <NavContainer>
            <NavButton
                onClick={() => handleClick("아티클")}
                isSelected={selected === "아티클"}
            >
                아티클
            </NavButton>
            <NavButton
                onClick={() => handleClick("자유")}
                isSelected={selected === "자유"}
            >
                자유
            </NavButton>
            <NavButton
                onClick={() => handleClick("구해요")}
                isSelected={selected === "구해요"}
            >
                구해요
            </NavButton>
            <NavButton
                onClick={() => handleClick("팔아요")}
                isSelected={selected === "팔아요"}
            >
                팔아요
            </NavButton>
            </NavContainer>

            <Content>  
                <Articlecontent/>
                <Articlecontent/>
                <Articlecontent/>
            </Content>

            <div style={{padding: "0 1rem", marginBottom:"2.5rem"}}><Button>커뮤니티 글 더 보러가기</Button></div>
        </>
    );
}

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 1rem;
margin-top: 1.75rem;
`

const NavContainer = styled.div`
margin-top: 1rem;
display: flex;
padding: 0 1rem;
gap: 0.75rem;
`

const NavButton = styled.div`
  border-radius: 1.25rem;
  background: ${({ isSelected }) => (isSelected ? "#2D2F2D" : "#EEEEEE")};
  width: 100%;
  padding: 0.25rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isSelected }) => (isSelected ? "white" : "#999")};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
`;

const Content = styled.div`
width: 100%;
padding: 0 1rem;
display: flex;
flex-direction: column;
gap: 0.75rem;
margin: 0.75rem 0;
`

const Button = styled.div`
display: flex;
width: 100%;
height: 2.75rem;
border-radius: 0.5rem;
background: #577D58;
color: #FFF;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
justify-content: center;
align-items: center;
cursor: pointer;
${hoverGrow}
`