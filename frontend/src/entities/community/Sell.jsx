import styled from "styled-components";
import PopularSell from './business/PopularSell';
import NewSell from "./business/NewSell";
import Footer from "../main/Footer";

export default function Sell(){
    return(<>
    <Wrapper>
        <NewSell/>
        <Line/>
        <PopularSell/>
        <Footer/>
    </Wrapper>
    </>);
}

const Wrapper = styled.div`
padding-bottom : 4.375rem;
`

const Line = styled.div`
height: 0.25rem;
background: #EEE;
width: 100%;
`