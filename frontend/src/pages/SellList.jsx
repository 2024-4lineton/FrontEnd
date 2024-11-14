import styled from 'styled-components';
import Header from '../shared/components/Header3'
import Nav from '../shared/components/Nav';
import floating from '../assets/MyPage/floating.svg';
import { hoverGrow } from '../shared/animation/hoverGrow';
import { useState } from 'react';
import Now from '../entities/mypage/Now';
import Prev from '../entities/mypage/Prev';

export default function SellList(){

    const [selectedOption, setSelectedOption] = useState("현재 판매 내역");

    return(
    <>
    <Header/>
    <OptionWrapper>
        <Option 
            onClick={() => setSelectedOption("현재 판매 내역")}
            isSelected={selectedOption === "현재 판매 내역"}
        >
            현재 판매 내역
        </Option>
        <Option 
            onClick={() => setSelectedOption("이전 판매 내역")}
            isSelected={selectedOption === "이전 판매 내역"}
        >
            이전 판매 내역
        </Option>
    </OptionWrapper>
    <Container>
            {selectedOption === "현재 판매 내역" && <Now />}
            {selectedOption === "이전 판매 내역" && <Prev />}
    </Container>
    <FloatingWrap style={{maxWidth:"440px"}}><Img src={floating}/></FloatingWrap>
    <Nav/>
    </>
    );
}


const OptionWrapper=styled.div`
    display: flex;
    height: 3.5rem;

`

const Option = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-bottom: ${(props) => (props.isSelected ? "2px solid #2D2F2D" : "none")};
    margin: 0 1rem;
    color: ${(props) => (props.isSelected? "#2DF2D" : "#999")};
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
`

const Container = styled.div`
width: 100%;
height: calc(100vh - 13rem);
padding: 1rem 1rem 0 1rem;
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
  bottom: 7rem;
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
    right: 2rem; 
  }
`;
