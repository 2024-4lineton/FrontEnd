import styled from "styled-components";
import img from '../../assets/Main/oneday1.svg';

export default function OnedayclassContainer(){
    return(
        <Wrapper>   
            <Img src={img}/>
            <ContentContainer>
                <Title>남은 우유로 아이스크림 만들기</Title>
                <Info>
                    <Date>2024.10.26</Date>
                    <Name>아무개</Name>
                </Info>
            </ContentContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
width: 14.375rem;
height: 13.25rem;
border-radius: 0.5rem;
position: relative;
margin-left: 0.75rem;
`

const Img = styled.img`
width: 14.375rem;
height: 13.25rem;
border-radius: 0.5rem;
object-fit: cover;
`

const ContentContainer = styled.div`
position:absolute;
width: 100%;
height: 4rem;
border-radius: 0rem 0rem 0.5rem 0.5rem;
background: rgba(255, 255, 255, 0.84);
z-index:1;
bottom: 0;
`

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 1rem;
margin-bottom: 0.5rem;
margin-top: 0.56rem;
`

const Info = styled(Title)`
display: flex;
gap:1.5rem;
`

const Date = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Name = styled(Date)``