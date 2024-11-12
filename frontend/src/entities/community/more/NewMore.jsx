import styled from "styled-components";
import back from '../../../assets/TraditionalMarket/arrow.svg';
import CommunityContent from "../CommunityContent";
import { useNavigate } from "react-router-dom";

export default function NewMore(){

    const navigate = useNavigate("");
    return(
    <div style={{marginBottom:"4.375rem"}}>
        <Title onClick={()=> navigate(-1)}>
            <img src={back}/>
            <div>최신글 더보기</div>
        </Title>

        <Wrapper>
            <CommunityContent/>
            <CommunityContent/>
            <CommunityContent/>
            <CommunityContent/>
            <CommunityContent/>
            <CommunityContent/>
            <CommunityContent/>
        </Wrapper>


    </div>
    );
}

const Title = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
margin: 1.5rem 0 0 1rem;
align-items: center;
cursor: pointer;
`

const Wrapper = styled.div`
margin-top: 1rem;
    padding: 0 1rem 4.375rem 1rem;
    gap: 0.75rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100vh - 3.75rem - 3.975rem - 2.5rem);

    &::-webkit-scrollbar {
        display: none; /* 웹킷 브라우저에서 스크롤바 숨기기 */
      }
`