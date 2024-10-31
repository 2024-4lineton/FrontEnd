import styled from "styled-components";
import LastChanceContainer from "./LastChanceContainer";
import menu1 from "../../assets/Main/menu1.svg";
import menu2 from "../../assets/Main/menu2.svg";

export default function LastChance(){


    return(
        
        <>
            <Title>라스트 찬스⚡️</Title>
            <Container>
                <LastChanceContainer/>
                <LastChanceContainer/>
                <LastChanceContainer/>
                <LastChanceContainer/>
                <LastChanceContainer/>
            </Container>
            
        </>
    );
}

const Title = styled.div`
    margin-left: 1rem;
    color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 1.75rem;
margin-bottom: 1rem;
`

const Container=styled.div`
    display: flex;
    overflow-x: auto;
    padding-right: 0.75rem;

    &::-webkit-scrollbar {
        display: none;
    }
`