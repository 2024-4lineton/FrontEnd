import styled from "styled-components";
import article from "../../assets/Main/article.svg";
import heart from "../../assets/Main/heart.svg";
import message from "../../assets/Main/message.svg";

export default function Articlecontent({ article }) {
  const date = new Date(article.createdAt);
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth()+1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return (
    <Wrapper>
      <Container>
        <Title>{article.title}</Title>

        <Contents>{article.content}</Contents>

        <Info>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginRight: "0.5rem",
            }}
          >
            <Icon src={heart}></Icon>
            <Cnt>{article.totalLikes}</Cnt>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginRight: "0.75rem",
            }}
          >
            <Icon src={message}></Icon>
            <Cnt>{article.totalComments}</Cnt>
          </div>
          <CreatedDate>{year}.{month}.{day}</CreatedDate>
          <Name>{article.nickname}</Name>
        </Info>
      </Container>

      <ArticleImg src={article.imageUrl} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  border-bottom: solid 0.0625rem #c2c2c2;
  padding-left: 0.5rem;
  display: flex;
  padding-right: 0.69rem;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 0.81rem;
`;

const Title = styled.div`
  // position: absolute;
  color: #333;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Contents = styled(Title)`
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Info = styled.div`
  display: flex;
`;

const Icon = styled.img`
  width: 0.84375rem;
  height: 0.84375rem;
`;
const Cnt = styled(Title)`
  font-weight: 400;
  color: #999;
  font-size: 0.75rem;
`;
const CreatedDate = styled(Cnt)`
  margin-right: 0.5rem;
`;
const Name = styled(Cnt)``;

const ArticleImg = styled.img`
  width: 5.5rem;
  height: 5.3125rem;
  border-radius: 0.25rem;
`;
