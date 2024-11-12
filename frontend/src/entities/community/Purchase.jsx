import styled from "styled-components";
import NewPurchase from "./business/NewPurchase";
import PopularPurchase from "./business/PopularPurchase";
import Footer from '../main/Footer';

export default function Purchase(){
    return(<>
    <Wrapper>
        <NewPurchase/>
        <Line/>
        <PopularPurchase/>
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