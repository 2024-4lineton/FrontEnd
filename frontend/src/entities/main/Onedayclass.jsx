import styled from "styled-components";
import OnedayclassContainer from "./OndeayclassContainer";
import { hoverGrow } from "../../shared/animation/hoverGrow";

export default function Onedayclass(){
    return(
        <>
        <Title>HOT🔥 인기 원데이클래스</Title>
        <Container>
            <OnedayclassContainer/>
            <OnedayclassContainer/>
            <OnedayclassContainer/>
            <OnedayclassContainer/>
        </Container>
        <div style={{width:"100%", padding:"0 1rem"}}><Button>원데이클래스 더 보러가기</Button></div>
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

const Container = styled.div`
display: flex;
margin-top: 1rem;
overflow-x: auto;
    padding-right: 0.75rem;
    &::-webkit-scrollbar {
        display: none;
    }
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
margin-top: 0.75rem;
${hoverGrow}
`