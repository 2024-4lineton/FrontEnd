import styled from "styled-components";
import back from "../../../assets/TraditionalMarket/arrow.svg";
import { useNavigate } from "react-router-dom";

export default function Title(){

    const navigate = useNavigate("");

    return(
        <>
            <Container onClick={()=>navigate('/traditional-market')}>
                <Icon src={back}/>
                <Name>전통시장</Name>
            </Container>
        </>
    );
}

const Name = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Container = styled.div`
margin: 1.5rem 0 0 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;

`

const Icon = styled.img`
    width: 1.5rem;
    height: 1.25rem;
`