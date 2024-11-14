import styled from "styled-components";
import MarketTitle from "./MarketTitle";
import List from "./List";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  selectedTradMarketState,
  tradMarketState,
} from "../../../shared/state/Market";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { dummyToken } from "../../../shared/state/token";
import { defaultApi } from "../../../apis/utils/Instance";

export default function MarketContent() {
  const [_, setSelectedTradMarket] = useRecoilState(selectedTradMarketState);
  const navigate = useNavigate("");
  const [option, setOption] = useState("가까운순");
  const [isOpen, setIsOpen] = useState(false);
  const token = useRecoilValue(dummyToken);
  const [market, setMarket] = useState([]);

  const handleOptionClick = (selectedOption) => {
    setOption(selectedOption);
    setIsOpen(false);
  };

  useEffect(() => {
    let filter;
    if (option === "가까운순") {
      filter = 0;
    } else if (option === "상품 많은 순") {
      filter = 1;
    }

    const getTraditionalMarketHandler = async () => {
      console.log(filter);
      try {
        const response = await defaultApi.get(`/api/shop/traditional/sorted`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            sort: filter,
          },
        });
        console.log(response);
        if (response.status === 200) {
          setMarket(response.data.shopInList);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getTraditionalMarketHandler();
  }, [option]);

  const handleMarketClick = (index) => {
    setSelectedTradMarket(index);
    navigate("/traditional-detail");
  };

  return (
    <Wrapper>
      <MarketTitle option={option} isOpen={isOpen} setIsOpen={setIsOpen} handleOptionClick={handleOptionClick} />
      <ListContainer>
        {market.map((market, index) => (
          <List
            key={index}
            item={market}
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
`;
