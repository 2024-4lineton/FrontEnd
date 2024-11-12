import styled from "styled-components";
import BusinessContent from "./BusinessContent";
import { hoverGrow } from "../../../shared/animation/hoverGrow";

export default function PopularSell(){
    return(
    <>
            <Header>
                <Title>지금 인기있는 팔아요</Title>
                <More>더보기 &gt;</More>
            </Header>
            <Content>  
                <BusinessContent/>
                <BusinessContent/>
                <BusinessContent/>
            </Content>
    </>);
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 1.75rem 1rem 0 1rem;
`;

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

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

const More = styled.div`
color: #999;
text-align: center;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;
`