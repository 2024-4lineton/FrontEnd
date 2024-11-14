import styled from "styled-components";
import LastChanceContainer from "./LastChanceContainer";
import menu1 from "../../assets/Main/menu1.svg";
import menu2 from "../../assets/Main/menu2.svg";
import { useEffect, useState } from "react";
import { defaultApi } from "../../apis/utils/Instance";

export default function LastChance() {
  const [lastChanceItem, setLastChanceItem] = useState([]);

  useEffect(() => {
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    console.log(`${hour.toString().padStart(2, "0")}:${minutes.toString()}`);
    const getLastChanceItem = async () => {
      try {
        const response = await defaultApi.get(`/api/product/last-chance`,
          {
            params: {
              currentTime: `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
            }
          }
        )
        console.log(response.data);
        if(response.status === 200) {
          setLastChanceItem(response.data);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getLastChanceItem();
  }, []);

  return (
    <>
      <Title>라스트 찬스⚡️</Title>
      <Container>
        {/* <LastChanceContainer />
        <LastChanceContainer />
        <LastChanceContainer />
        <LastChanceContainer />
        <LastChanceContainer /> */}
        {lastChanceItem.map((item, index) => {
          return (
            <LastChanceContainer item={item} key={index} />
          )
        })}
      </Container>
    </>
  );
}

const Title = styled.div`
  margin-left: 1rem;
  color: #333;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1.75rem;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  padding-right: 0.75rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;
