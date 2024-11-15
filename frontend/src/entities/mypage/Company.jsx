import styled from "styled-components";
import Header from '../../shared/components/Header3'
import profile from '../../assets/MyPage/profile.svg';
import pen from '../../assets/MyPage/pen.svg';
import arrow from '../../assets/MyPage/arrow.svg';
import Nav from "../../shared/components/Nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Company(){

    const [profileImg, setProfileImg] = useState(profile);
    const [name, setName] = useState("음치킨");
    const [category, setCategory] = useState("골목시장");
    const navigate = useNavigate('');

    return(
        <>
    <Wrapper>
        <Header/>

        <div style={{display:"flex", justifyContent:"center", width:"100%",height: "auto"}}>
        <Container>
            <div style={{position: "relative", height:"7.5rem"}}>
            <Img src={profileImg} style={{position:"absolute", bottom:"0", right:"0"}}/>
            <Icon src={pen}/>
            </div>
            <Font style={{margin:"1rem 0", textAlign:"center"}}>{name}</Font>
            <Category style={{textAlign: "center"}}>{category}</Category>
        </Container>
        </div>
        
        <NavContainer>

            <NavTitle>정보</NavTitle>
            <NavContent style={{marginBottom:"1.5rem"}}>
                <div style={{display:"flex", justifyContent:"space-between", cursor:"pointer"}}>
                <Font>사업자 정보 수정하기</Font>
                <img src={arrow}/>
                </div>
            </NavContent>
            <NavContent style={{marginBottom:"1.5rem"}}>
                <div style={{display:"flex", justifyContent:"space-between", cursor:"pointer"}}>
                <Font>가게 정보 수정하기</Font>
                <img src={arrow}/>
                </div>
            </NavContent>

            <NavTitle>판매</NavTitle>
            <NavContent style={{marginBottom:"1.5rem"}}>
                <div style={{display:"flex", justifyContent:"space-between", cursor:"pointer"}}
                    onClick={()=>navigate('/sell')}>
                <Font>판매글 작성하기</Font>
                <img src={arrow}/>
                </div>
            </NavContent>
            <NavContent style={{marginBottom:"1.5rem"}}>
                <div style={{display:"flex", justifyContent:"space-between", cursor:"pointer"}}
                    onClick={()=>navigate('/sell-list')}>
                <Font>판매 내역 보러가기</Font>
                <img src={arrow}/>
                </div>
            </NavContent>

            <NavTitle>커뮤니티</NavTitle>
            <NavContent style={{marginBottom:"1.5rem"}}>
                <div style={{display:"flex", justifyContent:"space-between", cursor:"pointer"}}>
                <Font>작성한 글 보러가기</Font>
                <img src={arrow}/>
                </div>
            </NavContent>
            <NavContent style={{marginBottom:"2rem"}}>
                <div style={{display:"flex", justifyContent:"space-between", cursor:"pointer"}}>
                <Font>좋아요 내역 보러가기</Font>
                <img src={arrow}/>
                </div>
            </NavContent>
        </NavContainer>

        <Line/>
        <div style={{padding: "1.25rem 0 0 1rem", marginBottom: "4.375rem", cursor:"pointer"}}>
        <Font style={{marginBottom:"1.25rem"}}>서비스 설정</Font>
            <Content>로그아웃</Content>
            <Content>자주 묻는 질문</Content>
            <Content>고객센터</Content>
            <Content>제작자</Content>
        </div>
        <Nav/>
    </Wrapper>
    
    
</>
    );
}

const Wrapper = styled.div`
width: 100%;
height: calc(100vh + 4.375rem);
`
const Container = styled.div`
  width: 7.5rem;
  position: relative;
  margin-top: 1.5rem;
  cursor: pointer;
  height: auto; /* Allow height to adjust based on content */
  min-height: 7.5rem; /* Ensure a minimum height */
`;

const Img = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  
`;

const Icon = styled.img`
width: 2.1875rem;
height: 2.1875rem;
position: absolute;
bottom:0;
right:0;
`

const Font = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Category = styled(Font)`
font-weight: 400;
font-size: 1rem;
margin-top: 0.5rem;
`

const NavContainer = styled.div`
width: 100%;
padding: 0 1rem;
`;

const NavTitle = styled.div`
color: #999;
font-weight: 400;
margin-bottom: 0.5rem;
`;

const NavContent = styled.div`

`;

const Line = styled.div`
background: #EEE;
height: 0.0625rem;
`

const Content = styled(Font)`
font-size: 1rem;
font-weight: 400;
margin-bottom: 1rem;
cursor: pointer;
`