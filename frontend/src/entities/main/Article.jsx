import styled from "styled-components";
import Articlecontent from "./Articlecontent";
import { hoverGrow } from "../../shared/animation/hoverGrow";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { defaultApi } from "../../apis/utils/Instance";
import { useRecoilValue } from "recoil";
import { userToken } from "../../shared/state/token";

export default function Article() {
  const [selected, setSelected] = useState("아티클");
  const navigate = useNavigate("");
  const token = useRecoilValue(userToken);
  const [article, setArticle] = useState([]);

  const handleClick = (buttonName) => {
    setSelected(buttonName);
  };

  useEffect(() => {
    let postType;
    if (selected === "아티클") {
      postType = "article";
    } else if (selected === "자유") {
      postType = "community";
    } else if (selected === "구해요") {
      postType = "demand";
    } else if (selected === "팔아요") {
      postType = "supply";
    }
    const getHottestArticleHandler = async () => {
      console.log(postType);
      try {
        const response = await defaultApi.get(`/api/post/hottest/${postType}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);
        if(response.status === 200) {
          setArticle(response.data);
        }
      } catch(e) {
        console.error(e);
      }
    }

    getHottestArticleHandler();
  }, [selected]);

  return (
    <>
      <Title>실시간 인기글 👀</Title>
      <NavContainer>
        <NavButton
          onClick={() => handleClick("아티클")}
          isSelected={selected === "아티클"}
        >
          아티클
        </NavButton>
        <NavButton
          onClick={() => handleClick("자유")}
          isSelected={selected === "자유"}
        >
          자유
        </NavButton>
        <NavButton
          onClick={() => handleClick("구해요")}
          isSelected={selected === "구해요"}
        >
          구해요
        </NavButton>
        <NavButton
          onClick={() => handleClick("팔아요")}
          isSelected={selected === "팔아요"}
        >
          팔아요
        </NavButton>
      </NavContainer>

      <Content>
        {article.map((article, index) => {
          return (
            <Articlecontent article={article} key={index}/>
          )
        })}
      </Content>

      <div style={{ padding: "0 1rem", marginBottom: "2.5rem" }}>
        <Button onClick={() => navigate("/community")}>
          커뮤니티 글 더 보러가기
        </Button>
      </div>
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
  margin-left: 1rem;
  margin-top: 1.75rem;
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
  width: 100%;
  padding: 0.25rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isSelected }) => (isSelected ? "white" : "#999")};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0.75rem 0;
`;

const Button = styled.div`
  display: flex;
  width: 100%;
  height: 2.75rem;
  border-radius: 0.5rem;
  background: #577d58;
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${hoverGrow}
`;
