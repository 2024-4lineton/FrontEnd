import styled from "styled-components";
import menu from "../../../assets/TraditionalMarket/menu.svg";
import { useNavigate } from "react-router-dom";

export default function Menu({ item }) {
  const navigate = useNavigate("");
  
  return (
    <Wrapper>
      <Img src={item.imgUrl} />

      <Content
        onClick={() => navigate("/menu-detail", { state: { item: item } })}
      >
        <Name>{item.shop}</Name>
        <MenuName>{item.productName}</MenuName>

        <Container>
          <Sale>{item.discountPercent}%</Sale>
          <Price>{item.price}</Price>
        </Container>

        <Info>
          <Count>잔여수량 {item.quantity}개</Count>
          <Location>{item.distance}m 이내</Location>
        </Info>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  cursor: pointer;
  padding: 0.3rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ffffff;
  }
  border-radius: 0.5rem;
`;

const Img = styled.img`
  width: 6.9375rem;
  height: 6.75rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const Content = styled.div`
  width: 100%;
`;

const Name = styled.div`
  color: #333;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 0.25rem;
`;

const MenuName = styled.div`
  font-weight: 400;
  margin-top: 0.25rem;
`;

const Container = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.69rem;
`;

const Sale = styled.div`
  color: #d24c49;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Price = styled.div`
  color: #333;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
`;

const Count = styled.div`
  color: #999;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Location = styled(Count)``;
