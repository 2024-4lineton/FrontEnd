import styled from "styled-components";
import {useRecoilValue, useRecoilState} from 'recoil';
import { tradMarketState, selectedTradMarketState } from "../../../shared/state/Market";
import Market from './Market';
import { useEffect, useRef } from "react";


export default function Slider() {
    const markets = useRecoilValue(tradMarketState);
    const [selectedMarketIndex, setSelectedMarketIndex] = useRecoilState(selectedTradMarketState);
    const sliderRef = useRef(null);

    const handleMarketClick = (index) => {
        setSelectedMarketIndex(index);
    };

    useEffect(() => {
        if (sliderRef.current) {
            const selectedMarketElement = sliderRef.current.children[selectedMarketIndex];
            if (selectedMarketElement) {
                selectedMarketElement.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
            }
        }
    }, [selectedMarketIndex]);

    return (
        <Wrapper>
            <Content ref={sliderRef}>
                {markets.map((market, index) => (
                    <div key={index} onClick={() => handleMarketClick(index)}>
                        <Market 
                            img={market.img} 
                            name={market.name} 
                            isSelected={index === selectedMarketIndex}
                        />
                    </div>
                ))}
            </Content>
        </Wrapper>
    );
}


const Wrapper = styled.div`
width: 100%;
height: auto;
padding: 0 1rem;
margin-top: 1rem;
::-webkit-scrollbar {
    display: none;
};
`

const Content = styled.div`
display: flex;
display: space-between;
overflow-x: auto;
white-space: nowrap; 
`
