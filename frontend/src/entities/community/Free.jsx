import styled from "styled-components";
import ArticleSlider from "./ArticleSlider";
import {hoverGrow} from '../../shared/animation/hoverGrow';
import Popular from "./Popular";
import New from "./New";

export default function Free(){

    return(
    <Wrapper>
        <Title>오늘의 추천 아티클</Title>
        <ArticleSlider/>
        <div style={{width:"100%", padding: "0 1rem"}}><Button>전체 아티클 보러가기</Button></div>
        <Popular/>
        <Line/>
        <New/>
    </Wrapper>
    );
}

const Wrapper = styled.div`
padding-bottom : 4.375rem;
`

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 1.5rem 0 1rem 1rem;

`

const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 0.5rem;
background: #577D58;
width: 25.5rem;
height: 2.75rem;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
margin-top: 2.3rem;
${hoverGrow}
`

const Line = styled.div`
height: 0.25rem;
background: #EEE;
width: 100%;
`