import styled from "styled-components";

export default function Title(){
    return(
        <Wrapper>
        <MarketName>골목시장</MarketName>
    </Wrapper>);
}

const MarketName = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Wrapper = styled.div`
margin: 1.5rem 0 0 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;

`