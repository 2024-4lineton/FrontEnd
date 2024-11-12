import styled from "styled-components";
import article from "../../../assets/Main/article.svg";
import heart from "../../../assets/Main/heart.svg";
import message from "../../../assets/Main/message.svg";

export default function BusinessContent(){
    return(
    <Wrapper>

        <Container>
        <Title>모르는 게 상책 VS 모르는 개 산책</Title>

        <Contents>
            안녕하세요 여러분 세은입니다~~~~~ 모르는게 상책일까요? 모르는 개를 산책시킬까요?? 여러분이 골라주세요~~~
        </Contents>

        <Info>
        <div style={{display:"flex", justifyContent:"center", marginRight:"0.5rem"}}><Icon src={heart}></Icon><Cnt>36</Cnt></div>
        <Date>24.11.01</Date>
        <Name>야방어먹자세은아</Name>
        </Info>
        </Container>

        <ArticleImg src={article}/>

    </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    height: auto;
    border-bottom : solid 0.0625rem #C2C2C2;
    padding-left: 0.5rem;
    display: flex;
    padding-right: 0.69rem;
    gap: 1rem;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    flex-direction : column;
    gap: 0.75rem;
    padding-bottom: 0.81rem;
`

const Title = styled.div`
    position: absuolute;
    color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;

`

const Contents = styled(Title)`
font-weight: 400;
overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Info = styled.div`
display: flex;
`

const Icon = styled.img`
width: 0.84375rem;
height: 0.84375rem;
`
const Cnt = styled(Title)`
font-weight: 400;
color: #999;
font-size: 0.75rem;
`
const Date = styled(Cnt)`
margin-right: 0.5rem;
`
const Name = styled(Cnt)``

const ArticleImg = styled.img`
width: 5.5rem;
height: 5.3125rem;
border-radius: 0.25rem;
`