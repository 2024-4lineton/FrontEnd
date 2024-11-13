import styled from "styled-components";
import Header from '../shared/components/Header'
import pencil from '../assets/MyPage/pencil.svg';
import heart from '../assets/MyPage/heart.svg';
import card from '../assets/MyPage/card.svg';
import profile from '../assets/MyPage/profile.svg';
import arrow from '../assets/MyPage/arrow.svg';
import { useState } from "react";
import { hoverGrow } from "../shared/animation/hoverGrow";
import TotalHelfoome from "../entities/helfoome/TotalHelfoome";
import Nav from "../shared/components/Nav";

export default function MyPage(){

    const [userName, setUserName] = useState("세은");
    const [profileImg, setProfileImg] = useState(profile);

    return(
    <Wrapper>
        <DashboardWrapper>
        <Header/>
        <ColorDiv>
            <ProfileImg src={profileImg} style={{marginTop: "1.5rem"}}/>
            <UserName>
                <div style={{marginRight:"0.5rem"}}>{userName}</div>
                <img src={arrow} style={{width: "0.65625rem", height: "1.25006rem"}}/>
            </UserName>
            <TotalHelfoome/>
        </ColorDiv>

        <NavWrapper>
            <Container>
                <Img src={pencil}/>
                <div>작성한 글 내역</div>
            </Container>

            <Container>
                <Img src={heart}/>
                <div>좋아요 내역</div>
            </Container>

            <Container>
                <Img src={card} style={{width: "1.5rem", height: "1.25rem"}}/>
                <div>예약완료 내역</div>
            </Container>
        </NavWrapper>
        </DashboardWrapper>

        <CompanyContainer>
            <div>
            <Title>판매자이신가요?</Title>
            <Subtitle>* 판매자로 등록을 완료하고 판매글을 올려보세요.</Subtitle>
            </div>
            <Button>사업자 등록하기</Button>
        </CompanyContainer>
        <Line/>
        <div style={{padding: "1.25rem 0 0 1rem", marginBottom: "4.375rem"}}>
        <Title style={{marginBottom:"1.25rem"}}>서비스 설정</Title>
            <Content>로그아웃</Content>
            <Content>자주 묻는 질문</Content>
            <Content>고객센터</Content>
            <Content>제작자</Content>
        </div>

        <Nav/>
    </Wrapper>);
}

const Wrapper = styled.div`
height: calc(100vh + 4.375rem);
`

const DashboardWrapper = styled.div`
height: 32.75rem;
`

const ColorDiv = styled.div`
background: linear-gradient(0deg, #EBF6E6 0%, #F8F8F8 100%);
height: 21rem;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`

const NavWrapper = styled.div`
height: 7.0625rem;
display: flex;
background: #FFF;
padding: 0 3.75rem;
justify-content: space-between;
color: #333;
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Img = styled.img`
width: 1.5rem;
height: 1.5rem;
cursor: pointer;
${hoverGrow}
`

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
gap: 0.5rem;
`

const ProfileImg = styled.img`
border-radius: 50%;
width: 7.5rem;
height: 7.5rem;
cursor: pointer;
`

const UserName = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
cursor: pointer;
`

const CompanyContainer = styled.div`

display: flex;
padding: 0 1rem;
justify-content: space-between;
align-items: center;
margin: 1rem 0;
`

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 0.5rem;
`

const Subtitle = styled(Title)`
font-size: 0.75rem;
font-weight: 400;
`

const Button = styled.div`
color: #FFF;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
padding: 0 1rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 0.5rem;
background: #577D58;
cursor: pointer;
height: 2.18rem;
${hoverGrow}
`

const Line = styled.div`
height: 0.0625rem;
background: #EEE;
`

const Content = styled(Title)`
font-size: 1rem;
font-weight: 400;
margin-bottom: 1rem;
cursor: pointer;
`