import stamp0 from '../../assets/Helfoome/stamp0.svg';
import stamp1 from '../../assets/Helfoome/stamp1.svg';
import stamp2 from '../../assets/Helfoome/stamp2.svg';
import stamp3 from '../../assets/Helfoome/stamp3.svg';
import stamp4 from '../../assets/Helfoome/stamp4.svg';
import stamp5 from '../../assets/Helfoome/stamp5.svg';
import stamp6 from '../../assets/Helfoome/stamp6.svg';
import stamp7 from '../../assets/Helfoome/stamp7.svg';
import styled from 'styled-components';
import { useState } from 'react';

export default function Stamp(){

    const stamp = [stamp0,stamp1,stamp2,stamp3,stamp4,stamp5,stamp6,stamp7]
    const [cnt, setCnt] = useState(4);

    return(
        <Wrapper>
            <StampImg src={stamp[cnt]}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 29rem;
    margin-top: 1rem;
    objcet-fit: cover;
`

const StampImg = styled.img`
height: auto;
max-width: 100%;
`