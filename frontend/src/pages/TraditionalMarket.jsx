import Header from "../shared/components/Header";
import Nav from "../shared/components/Nav";
import MarketContent from "../entities/traditionalMarket/main/MarketContent";
import styled from "styled-components";

export default function TraditionalMarket() {
    return (
        <Wrapper>
            
            <Header />

            <ContentContainer>
                <MarketContent />
            </ContentContainer>

            <NavBar>
                <Nav />
            </NavBar>

        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    width: 440px;
    margin: 0 auto;
    height: 100vh;
`;

const ContentContainer = styled.div`
    padding-bottom:4.375rem;
    overflow-y: auto;
    height: calc(100vh - 4.375rem);
    &::-webkit-scrollbar {
        display: none;
    }
`

const NavBar = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
`;
