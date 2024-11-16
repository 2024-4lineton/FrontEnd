import styled from "styled-components";
import Header from "../shared/components/Header";
import Nav from "../shared/components/Nav";
import Title from "../entities/streetMarket/Title";
import { useEffect, useState } from "react";
import MarketDetailContent from "../entities/traditionalMarket/detail/MarketDetailContent";
import { useRecoilValue } from "recoil";
import { userToken } from "../shared/state/token";
import { getProductList } from "../apis/api/productList";

export default function Brand() {
  const [selected, setSelected] = useState("단거리");
  const [market, setMarket] = useState([]);
  const token = useRecoilValue(userToken);

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
        const response = await getProductList({
          token: token,
          shopType: 2,
          sort: filter,
        });

        console.log(response);

        if (response.status === 200) {
          setMarket(response.data.productInList);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getMarketHandler();
  }, [selected, token]);

  return (
    <>
      <Wrapper>
        <Header />
        <MarketName>브랜드</MarketName>
        <NavContainer>
          <NavButton
            onClick={() => handleClick("단거리")}
            isSelected={selected === "단거리"}
          >
            할인순
          </NavButton>
          <NavButton
            onClick={() => handleClick("최저가")}
            isSelected={selected === "최저가"}
          >
            가까운순
          </NavButton>
          <NavButton
            onClick={() => handleClick("최고할인")}
            isSelected={selected === "최고할인"}
          >
            업로드순
          </NavButton>
        </NavContainer>

        <ContentContainer>
          <MarketDetailContent market={market} />
        </ContentContainer>

        {/* <NavBar>
                <Nav />
            </NavBar> */}
      </Wrapper>
      <Nav />
    </>
  );
}

const MarketName = styled.div`
  color: #333;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 1.5rem 0 0 1rem;
`;

const Wrapper = styled.div`
  position: relative;
  width: 440px;
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
