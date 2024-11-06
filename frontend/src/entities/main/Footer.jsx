import styled from "styled-components";

export default function Footer(){
    return(
    <Wrapper>
        <TopContainer>헬푸미 사업자 정보</TopContainer>
        <BottomContainer>
            <Container style={{marginBottom:"1rem"}}>
                <Name>대표자</Name>
                <Content>한동서성서성</Content>
            </Container>

            <Container style={{marginBottom:"1rem"}}>
                <Name>주소</Name>
                <Content>서울특별시 성북구 삼선교로16길 116</Content>
            </Container>

            <Container>
                <Name>입점문의</Name>
                <Content>likelion4@helfoome.com</Content>
            </Container>

            <div style={{display:"flex", gap:"1.62rem", marginTop:"2.5rem"}}>
            <Copyright>Copyright</Copyright>
            <Copyright>HelFooMe. All rights reserved</Copyright>
            </div>
        </BottomContainer>
    </Wrapper>
    );
}

const Wrapper = styled.div`
width: 100%;

`

const TopContainer = styled.div`
background: #EEE;
height: 3.63rem;
padding-left: 1rem;
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
justify-content: flex-start;
align-items: center;
border-bottom: solid 0.0625rem white;
`

const BottomContainer = styled.div`
height: 11.3rem;
background: #EEE;
padding: 1.25rem 0 0 1rem;
`

const Container = styled.div`
display: flex;
gap: 0.5rem;
`

const Name = styled.div`
color: #999;
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Content = styled(Name)`
color: #333;

`

const Copyright = styled(Name)`
font-weight: 600;
`