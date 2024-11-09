import styled,{ keyframes } from "styled-components";
import potato from '../../assets/Helfoome/dancingpotato.svg';
import bubble from '../../assets/Helfoome/bubble.svg';

export default function ServiceInfo(){
    return(
    <Wrapper>
        <Title>About HelFooMe Service</Title>

        <Subtitle style={{marginBottom:"0.5rem"}}>" 음식을 보다 가치있게"</Subtitle>

        <Subtitle><Span>음식의 소비를 도모하여 식품의 낭비를 줄이고,</Span> 환경보호<Span>와</Span><br/>
        지속 가능한 소비<Span>를 촉진하는</Span> 환경 친화적 <Span>서비스입니다.</Span></Subtitle>

        <InfoContainer>
            <Info>
                <Icon>💎</Icon>
                <div style={{display:"flex",gap:"0.5rem", justifyContent:"center"}}>
                    <Category>전통시장</Category>
                    <Category>골목시장</Category>
                    <Category>브랜드</Category>
                </div>
                <Explain>
                유통기한이 임박한 식품을 저렴하게 판매 함으로써<br/> 음식폐기량을 줄이고,<br/> 시장과 골목 그리고 소상공인을 지원합니다.
                </Explain>
            </Info>

            <Info>
                <Icon>🔗</Icon>
                <div style={{display:"flex",gap:"0.5rem", justifyContent:"center"}}>
                    <Category>팔아요</Category>
                    <Category>구해요</Category>
                </div>
                <Explain>
                필요한 자원을 요청하거나 판매하여,<br/>서로에게 효율적으로<br/>식품 자원이 순환될수 있도록 합니다.
                </Explain>
            </Info>

            <Info>
                <Icon>💡</Icon>
                <div style={{display:"flex",gap:"0.5rem", justifyContent:"center"}}>
                    <Category>커뮤니티</Category>
                    <Category>아티클</Category>
                    <Category>자유</Category>
                </div>
                <Explain>
                음식과 관련된 친환경 소식과 정보를 제공하며,<br/>유익한 정보를 공유하고<br/>소통할 수 있는 공간을 마련합니다.
                </Explain>
            </Info>

        </InfoContainer>

        <Bubble src={bubble}/>
        <Img src={potato}/>
        <Explain style={{marginBottom:"1rem"}}>감자가 가장 적은 양의 온실가스를<br/>배출하는 것을 알고 계신가요?</Explain>
        <Explain style={{marginBottom: "2.56rem"}}>무엇보다 감자는 어디서든 잘 자란다는 특징을 가지고 있고,<br/>촙고 척박한 땅에서도 빠르게 수확할 수 있어요~!</Explain>
    </Wrapper>
    );
}

const dance = keyframes`
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    25% {
        transform: translateY(-5px) rotate(-10deg);
    }
    50% {
        transform: translateY(5px) rotate(10deg);
    }
    75% {
        transform: translateY(-5px) rotate(-10deg);
    }
`;


const Wrapper = styled.div`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5.38rem;
`

const Title = styled.div`
color: #FFF;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 1rem 0;
`

const Subtitle= styled.div`
color: #EBF6E6;
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Span = styled.span`
color: #577D58;
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const InfoContainer = styled.div`
width: 100%;
margin-top: 1.5rem;
gap: 0.5rem;
display: flex;
flex-direction: column;
`

const Info=styled.div`
border-radius: 1.25rem;
background: #EBF6E6;
height: 9.5rem;
width: 100%;
`

const Icon = styled.div`
font-size: 2.625rem;
text-align:center;
`

const Category = styled.div`
border-radius: 1.25rem;
border: 1px solid #FFF;
background: rgba(87, 125, 88, 0.50);
display: flex;
width: 4.0625rem;
padding: 0.25rem 0.5rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: normal;

`

const Explain = styled.div`
color: #333;
text-align: center;
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 0.25rem;
`

const Bubble = styled.img`
margin-top: 1.5rem;
margin-left: 50%;
`

const Img = styled.img`
margin-bottom: 1.25rem;
margin-top: 0.27rem;
width: 4.75rem;
height: 6.4375rem;
animation: ${dance} 2s infinite ease-in-out;
`