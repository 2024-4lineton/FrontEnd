import styled from "styled-components";
import check from '../../assets/CompanyCertification/checkcircle.svg';
import { useState, useEffect } from "react";

export default function Calendar(){

    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const [date, setDate] = useState([]);

    useEffect(() => {
        // 오늘 날짜를 기준으로 이번 주 날짜를 계산
        const currentDate = new Date();
        const currentDay = currentDate.getDay();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        let week = [];

        // 이번 주의 날짜 계산
        for (let i = 0; i < 7; i++) {
            const newDate = new Date(currentYear, currentMonth, currentDate.getDate() - currentDay + i);
            week.push(newDate.getDate());
        }

        setDate(week);
    }, []);

    return(
    <Wrapper>
        <Container>

        {day.map((d, index) => (
            <DayContainer key={index}>
            <Day>{d}</Day>
            <DateText>{date[index]}</DateText>
            <Stamp src={check}/>
            </DayContainer>

        ))}
            
            
        </Container>
    </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    padding: 0 1rem;
    margin-bottom: 1rem;
`

const Container = styled.div`
    width: 100%;
    padding: 0.5rem 1.44rem 0.37rem 1.44rem;
    display: flex;
    justify-content: space-between;
`

const DayContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const Day = styled.div`
color: #333;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 0.75rem;
`

const DateText = styled(Day)`
font-weight: 400;
`

const Stamp = styled.img`
width: 1.5rem;
height: 1.5rem;
margin-top:1.25rem;
`