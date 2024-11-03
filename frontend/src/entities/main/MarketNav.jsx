import styled from "styled-components";
import icon from "../../assets/Main/location.svg";
import { useState } from "react";
import market1 from "../../assets/Main/traditional.svg";
import market2 from "../../assets/Main/street.svg";
import market3 from "../../assets/Main/brand.svg";
import { hoverGrow } from "../../shared/animation/hoverGrow";
import { useNavigate } from "react-router-dom";

export default function MarketNav(){

    const [location, setLocation] = useState('성북구 삼선동');
    const navigate = useNavigate("");

    return(
        <Wrapper>
            <LocationContainer>
            <Location>{location}</Location>
                <Icon src={icon}></Icon>
                
            </LocationContainer>
            <NavContainer>
                <NavIcon src={market1} onClick={()=>navigate('/traditional-market')}/>
                <NavIcon src={market2} onClick={()=>navigate('/street-market')}/>
                <NavIcon src={market3}/>
            </NavContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
 width: 100%;
 padding: 1.81rem 1rem 0 1rem;
`

const LocationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Location = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Icon = styled.img`
cursor:pointer;
width: 1.5rem;
height: 1.5rem;
cursor: pointer;
${hoverGrow}
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`

const NavIcon = styled.img`
    width: 7rem;
    height: 7rem;
    cursor:pointer;
    ${hoverGrow}
`