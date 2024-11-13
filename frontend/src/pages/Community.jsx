import Header from "../shared/components/CommunityHeader";
import styled from "styled-components";
import Free from "../entities/community/Free";
import Company from "../entities/community/Company";
import Nav from "../shared/components/Nav";
import floating from '../assets/Community/floating.svg';
import { useState } from "react";
import { hoverGrow } from "../shared/animation/hoverGrow";

export default function Community(){

    const [selectedBoard, setSelectedBoard] = useState("자유");

    return(
        <div style={{position: "relative", width:"100%", position:"relative"}}>
        <Header/>
        <NavContainer>
            <Button 
                    onClick={() => setSelectedBoard("자유")}
                    active={selectedBoard === "자유"}
                >
                    자유
                </Button>
                <Button 
                    onClick={() => setSelectedBoard("기업")}
                    active={selectedBoard === "기업"}
                >
                    기업
                </Button>
        </NavContainer>

            {selectedBoard === "자유" && <Free />}
            {selectedBoard === "기업" && <Company />}
            <FloatingWrap style={{maxWidth:"440px"}}><Img src={floating}/></FloatingWrap>
        <Nav/>
        </div>
    );
}

const NavContainer = styled.div`
display: flex;
height: 4.44rem;
align-items: center;
background: #FFF;
padding: 1.69rem 0 1.25rem 1rem;
gap: 2.25rem;
`

const Button = styled.div`
color: ${(props) => (props.active ? "#577D58" : "#C2C2C2")};
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
`

const Img = styled.img`
cursor: pointer;
z-index: 100;
width: 4rem;
height: 4rem;
${hoverGrow}
`

const FloatingWrap = styled.div`
  position: fixed;
  bottom: 5rem;
  right: calc((100vw - 440px) / 2 + 1rem);
  display: flex;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 3rem;
  transition: transform 0.3s ease;
  z-index:100;

  @media (max-width: 440px) {
    right: 2rem; /* 모바일에서는 기본 위치 */
  }
`;

