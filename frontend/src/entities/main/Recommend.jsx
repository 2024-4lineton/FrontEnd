import styled from "styled-components";
import RecommendContainer from "./RecommendContainer";

export default function Recommend(){
    return(
    <>
    <Title>오늘의 헬푸미 추천템 🛒</Title>
    <Container>
    <RecommendContainer/>
    <RecommendContainer/>
    <RecommendContainer/>
    <RecommendContainer/>
    </Container>
    </>);
}

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 1.75rem;
margin-left: 1rem;
`


const Container=styled.div`
    margin-top: 1rem;
    display: flex;
    overflow-x: auto;
    padding-right: 0.75rem;

    &::-webkit-scrollbar {
        display: none;
    }
`