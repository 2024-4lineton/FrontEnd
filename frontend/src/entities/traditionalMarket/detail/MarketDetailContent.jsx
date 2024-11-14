import styled from 'styled-components';
import Menu from './Menu';

export default function MarketDetailContent({market}){
    return(
    <Wrapper>
        {market.map((item, index) => {
          return <Menu key={index} item={item} />
        })}
    </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`