import Header from "../shared/components/CommunityHeader";
import styled from "styled-components";
import Nav from "../shared/components/Nav";
import floating from '../assets/Community/floating.svg';
import { hoverGrow } from "../shared/animation/hoverGrow";
import PurchaseMore from "../entities/community/more/PurchaseMore";
export default function BusinessPurchaseMore(){

    return(
        <div style={{position: "relative", width:"100%", position:"relative"}}>
        <Header/>
            <PurchaseMore/>
            <FloatingWrap style={{maxWidth:"440px"}}><Img src={floating}/></FloatingWrap>
        <Nav/>
        </div>
    );

}



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

