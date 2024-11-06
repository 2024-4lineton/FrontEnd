import styled from "styled-components";
import Header from "../shared/components/Header";
import Nav from "../shared/components/Nav";
import Title from "../entities/streetMarket/Title";
import { useState } from "react";
import MarketDetailContent from "../entities/traditionalMarket/detail/MarketDetailContent";

export default function StreetMarket(){

    const [selected, setSelected] = useState("가까운순");

    const handleClick = (buttonName) => {
        setSelected(buttonName);
    };

    return(
        <Wrapper>
        <Header/>
        <Title />
        <NavContainer>
            <NavButton
                onClick={() => handleClick("할인순")}
                isSelected={selected === "할인순"}
            >
                할인순
            </NavButton>
            <NavButton
                onClick={() => handleClick("가까운순")}
                isSelected={selected === "가까운순"}
            >
                가까운순
            </NavButton>
            <NavButton
                onClick={() => handleClick("업로드순")}
                isSelected={selected === "업로드순"}
            >
                업로드순
            </NavButton>
            </NavContainer>

            <ContentContainer>
                <MarketDetailContent />
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

const NavBar = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
`;

const NavContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    padding: 0 1rem;
    gap: 0.75rem;
`;

const NavButton = styled.div`
    border-radius: 1.25rem;
    background: ${({ isSelected }) => (isSelected ? "#2D2F2D" : "#EEEEEE")};
    width: 6.4375rem;
    padding: 0.25rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ isSelected }) => (isSelected ? "white" : "#999")};
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
`;

const ContentContainer = styled.div`
    margin-top: 1rem;
    padding-bottom: 4.375rem;
    overflow-y: auto;
    height: calc(100vh - 7rem - 4.375rem );
    &::-webkit-scrollbar {
        display: none;
    }
`;