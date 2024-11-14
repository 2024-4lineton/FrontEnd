import styled from "styled-components";
import RecommendContainer from "./RecommendContainer";
import { useEffect, useState } from "react";
import { defaultApi } from "../../apis/utils/Instance";
import { useRecoilValue } from "recoil";
import {dummyToken} from "../../shared/state/token.js";

export default function Recommend() {
  const token = useRecoilValue(dummyToken);
  const [recommendItem, setRecommendItem] = useState([]);

  useEffect(() => {
    const getRecommendedItemHandler = async () => {
      try {
        const response = await defaultApi.get(`/api/product/recommand`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);
        if(response.status === 200) {
          setRecommendItem(response.data);
        }
      } catch(e) {
        console.error(e);
      }
    }

    getRecommendedItemHandler();
  }, []);

  return (
    <>
      <Title>오늘의 헬푸미 추천템 🛒</Title>
      <Container>
        {recommendItem.map((item, index) => {
          return (
            <RecommendContainer item={item} key={index} />
          )
        })}
      </Container>
    </>
  );
}

const Title = styled.div`
  color: #333;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1.75rem;
  margin-left: 1rem;
`;

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  overflow-x: auto;
  padding-right: 0.75rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;
