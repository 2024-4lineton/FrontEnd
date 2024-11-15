import styled from "styled-components";
import List from "./List";
import PrevList from "./PrevList";
import { useState } from "react";

export default function Noti() {
    const [noti, setNoti] = useState([
        { notiTitle: "오늘 하루 헬푸미 성공 💛", content: "가게 사장님이 핀번호 입력을 완료하였어요!", content2: "헬푸미 구매 횟수가 1회 증가하였어요.", date: "24.11.10" },
        { notiTitle: "예약이 수락되었어요 🍀", content: "늦기 전에 가게를 방문해 상품 구매를 완료해주세요.", content2: "핀번호 : 4561", date: "24.11.10" },
    ]);

    return (
        <Wrapper>
            <List />
            {noti.map((item, index) => (
                <PrevList
                    key={index}
                    notiTitle={item.notiTitle}
                    content={item.content}
                    content2={item.content2}
                    date={item.date}
                />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 100%;
`