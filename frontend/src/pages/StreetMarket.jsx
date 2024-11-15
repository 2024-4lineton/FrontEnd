import styled from "styled-components";
import Header from "../shared/components/Header";
import Nav from "../shared/components/Nav";
import Title from "../entities/streetMarket/Title";
import { useEffect, useState } from "react";
import MarketDetailContent from "../entities/traditionalMarket/detail/MarketDetailContent";
import { defaultApi } from "../apis/utils/Instance";
import { useRecoilValue } from "recoil";
import { dummyToken } from "../shared/state/token";
import { getProductList } from "../apis/api/productList";

export default function StreetMarket() {
  const [selected, setSelected] = useState("단거리");
  const [market, setMarket] = useState([]);
  const token = useRecoilValue(dummyToken);

  const handleClick = (buttonName) => {
    setSelected(buttonName);
  };

  useEffect(() => {
    let filter;
    if (selected === "단거리") {
      filter = 0;
    } else if (selected === "최저가") {
      filter = 1;
    } else if (selected === "최고할인") {
      filter = 2;
    }
    const getMarketHandler = async () => {
      try {
        const response = await getProductList({token: token, shopType: 1, sort: filter});

        console.log(response);

        if(response.status === 200) {
          setMarket(response.data.productInList);
        }
      } catch(error) {
        console.error(error);
      }
    };

    getMarketHandler();
  }, [selected, token]);

  return (
    <>
      <Wrapper>
        <Header />
        <Title />
        <NavContainer>
          <NavButton
            onClick={() => handleClick("단거리")}
            isSelected={selected === "단거리"}
          >
            단거리
          </NavButton>
          <NavButton
            onClick={() => handleClick("최저가")}
            isSelected={selected === "최저가"}
          >
            최저가
          </NavButton>
          <NavButton
            onClick={() => handleClick("최고할인")}
            isSelected={selected === "최고할인"}
          >
            최고할인
          </NavButton>
        </NavContainer>

        <ContentContainer>
          <MarketDetailContent market={market}/>
        </ContentContainer>

        {/* <NavBar>
                <Nav />
            </NavBar> */}
      </Wrapper>
      <Nav />
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 440px;
  // margin: 0 auto;
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
  height: calc(100vh - 7rem - 4.375rem);
  &::-webkit-scrollbar {
    display: none;
  }
`;
