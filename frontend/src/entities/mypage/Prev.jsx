import styled from "styled-components";
import star from '../../assets/MyPage/star.svg';
import PrevList from "./PrevList";
import { useState } from "react";

export default function Prev(){

    const [list,setList] = useState(["1","2"]);

    return(
    <Wrapper>

    {list.length === 0 ? (
        <NoneContainer>
          <Img src={star} />
          <Comment>이전 판매 내역이 없어요. <br />지금 바로 판매해보세요!</Comment>
        </NoneContainer>
      ) : (
        <ListContainer>
          {list.map((item, index) => (
            <PrevList key={index} />
          ))}
        </ListContainer>
      )}

    </Wrapper>
    );
}

const Wrapper = styled.div`
height: 100%;
overflow-y: scroll;
&::-webkit-scrollbar {
    display: none;
  }
`

const Img = styled.img`
width: 6.9375rem;
height: 6.9375rem;
`

const Comment = styled.div`
color: #999;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align:center;
`

const NoneContainer = styled.div`
display: flex; 
flex-direction:column;
justify-content:center;
align-items: center;
gap:1.25rem;
height: 100%;
`

const ListContainer = styled.div``