import styled from "styled-components";
import MarketTitle from "./MarketTitle";
import List from "./List";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedTradMarketState, tradMarketState } from "../../../shared/state/Market";
import { useNavigate } from "react-router-dom";

export default function MarketContent() {

    const markets = useRecoilValue(tradMarketState);
    const [_,setSelectedTradMarket] = useRecoilState(selectedTradMarketState);
    const navigate = useNavigate("");


    const handleMarketClick = (index) => {
        setSelectedTradMarket(index);
        navigate('/traditional-detail');
    };

    return (
        <Wrapper>       
            <MarketTitle/>
            <ListContainer>
                {markets.map((market, index) => (
                    <List key={index} name={market.name} img={market.img}
                    onClick={() => handleMarketClick(index)}
                    />
                ))}
            </ListContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 1.5rem 1rem;
`;


const ListContainer = styled.div`
margin-top: 1.25rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
`