import styled from "styled-components";
import Header from "../shared/components/Header3";
import menu from '../assets/TraditionalMarket/menu.svg';
import heartIcon from '../assets/Community/heart.svg';
import { useState } from "react";
import { hoverGrow } from "../shared/animation/hoverGrow";
import SellReservationModal from "../entities/sell/SellReservationModal";

export default function SellDetail(){

    const [title, setTItle]= useState("CJ e&m 방송 촬영 후 남은 김치 팔아요");
    const [content, setContent] = useState("안녕하세요, 김장 콘텐츠 촬영을 통해 정성껏 준비한 김치가 예상보다 많이 남아서 필요하신 분들께 제공하려 합니다. 다양한 음식점, 단체, 혹은 기관에서 함께 나눌 수 있도록 대용량으로 준비되어 있습니다. 믿을 수 있는 재료로 신선하게 담근 김치, 함께 나누고 싶은 분들께 제공드리니 관심 있으신 분들은 편하게 문의 주세요. 현재 필요 인원은 200명 정도로 생각하고 있습니다. 우선 선착순으로 신청해주시고 이외에는 아래 메일로 연락주시길 바랍니다. 문의 메일 : bangsong@cjenm.or.kr");
    const [heart, setHeart] = useState("36");
    const [date, setDate] = useState("24.11.16");
    const [auth, setAuth] = useState("cj제일제당식품관리팀");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return(
    <Wrapper>
        <Header/>
        <Title>팔아요</Title>
        <Img src={menu}/>
        <ContentTitle>{title}</ContentTitle>
        <Content>{content}</Content>

        <Info>
            
            <div style={{display: "flex", gap:"0.25rem"}}><Icon src={heartIcon}/><div>{heart}</div></div>
            <div style={{display:"flex", gap:"0.5rem"}}><div>{date}</div><div>{auth}</div></div>

        </Info>

        <Line/>
        <div style={{width: "100%", padding: "2.5rem 1rem"}}><Button onClick={openModal}>신청하기</Button></div>

        {isModalOpen && <SellReservationModal onClose={closeModal} />}

    </Wrapper>
    );
}

const Wrapper = styled.div`
width: 100%;
`

const Title = styled.div`
width: 100%;
height: 1.5rem;
margin: 0.5rem 0;
text-align: center;
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Img = styled.img`
    width: 100%;
    height: 27.5rem;
    object-fit: cover;
`

const ContentTitle = styled.div`
width: 100%;
padding: 1rem;
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Content = styled.div`
padding:1rem;
width: 100%;
`

const Info = styled.div`
color: #999;
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
display: flex;
padding: 0 1rem;
margin: 1.28rem 0;
justify-content: space-between;
`

const Icon = styled.img`
width: 1.125rem;
height: 1.125rem;
color: #999999;
`

const Line = styled.div`
height: 0.25rem;
background: #EEE;
`

const Button = styled.div`
border-radius: 0.5rem;
background: #577D58;
height: 2.75rem;
color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
${hoverGrow}
`