import styled from "styled-components";
import CommunityContent from "./CommunityContent";
import Footer from "../main/Footer";
import { useNavigate } from "react-router-dom";

export default function New(){

    const navigate = useNavigate('');
    
    return(
        <>
            <Header>
                <Title>최신글 💫</Title>
                <More onClick={()=>navigate('/community-new-more')}>더보기 &gt;</More>
            </Header>
            <Content>  
                <CommunityContent/>
                <CommunityContent/>
                <CommunityContent/>
            </Content>
            <Footer/>

        </>
    );
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 1.75rem 1rem 0 1rem;
`;

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Content = styled.div`
width: 100%;
padding: 0 1rem;
display: flex;
flex-direction: column;
gap: 0.75rem;
margin: 0.75rem 0 2.5rem 0;
`

const More = styled.div`
color: #999;
text-align: center;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;
`