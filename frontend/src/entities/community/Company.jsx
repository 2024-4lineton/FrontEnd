import styled from "styled-components";
import { hoverGrow } from "../../shared/animation/hoverGrow";
import { useState } from "react";
import Purchase from "./Purchase";
import Sell from "./Sell";
import NewPurchase from "./business/NewPurchase";

export default function Company(){

    const [selectedBoard, setSelectedBoard] = useState("구해요");

    return(
        <>
        <Container>
        <Button
        onClick={() => setSelectedBoard("구해요")}
        active={selectedBoard === "구해요"}
        >구해요</Button>
        <Button
        onClick={() => setSelectedBoard("팔아요")}
        active={selectedBoard === "팔아요"}
        >팔아요</Button>
        </Container>

        {selectedBoard === "구해요" && <Purchase />}
        {selectedBoard === "팔아요" && <Sell />}
        </>
    );
}

const Container = styled.div`
display: flex;
gap: 1rem;
padding: 1rem 0 0 1rem;
`

const Button = styled.div`
display: flex;
width: 6.4375rem;
height: 2rem;
padding: 0.25rem 1rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
border-radius: 1.25rem;
background: #EEE;
cursor: pointer;
color: ${(props) => (props.active ? "#FFF" : "#999")};
background: ${(props) => (props.active ? "#2D2F2D" : "#EEE")};
${hoverGrow}
`