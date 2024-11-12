import { useRecoilValue } from "recoil";
import { articleState } from '../../shared/state/Community';
import { useState,useEffect } from "react";
import styled from "styled-components";
import heart from '../../assets/Community/heartIcon.svg';
import message from '../../assets/Community/messageIcon.svg';
import arrow from '../../assets/Community/arrow.svg';

export default function ArticleSlider() {
    const articles = useRecoilValue(articleState);
    const [idx, setIdx] = useState(0);
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    useEffect(() => {
        setTriggerAnimation(true);
        const timer = setTimeout(() => {
            setTriggerAnimation(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [idx]);

    function setPage() {
        if (idx === 2) setIdx(0);
        else setIdx(idx + 1);
    }

    return (
        <>
        <Wrapper>
            <Background
                backgroundImage={articles[idx].img}
                animateKey={triggerAnimation}
            />
            <InfoContainer>
                <div style={{ display: "flex", marginBottom: "0.75rem" }}>
                    <Icon src={heart} />
                    <Font style={{ marginRight: "0.5rem" }}>{articles[idx].heart}</Font>

                    <Icon src={message} />
                    <Font style={{ marginRight: "0.75rem" }}>{articles[idx].chat}</Font>
                    <Font style={{ marginRight: "0.5rem" }}>{articles[idx].date}</Font>
                    <Font>{articles[idx].auth}</Font>
                </div>

                <Title>{articles[idx].name}</Title>
                <Button onClick={() => setPage()}>
                    {idx + 1}/3
                    <img src={arrow} />
                </Button>
            </InfoContainer>
        </Wrapper>
        <DotContainer>
            {articles.map((_, index) => (
                <Dot key={index} isActive={index === idx} />
            ))}
        </DotContainer>
    </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 27.5625rem;
    position: relative;
    overflow: hidden;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.backgroundImage})`};
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: ${(props) => (props.animateKey ? 0 : 1)};
    animation: ${(props) =>
        props.animateKey ? "fadeIn 0.5s ease-in-out forwards" : "none"};

    @keyframes fadeIn {
        0% {
            opacity: 0; 
        }
        100% {
            opacity: 1;
        }
    }
`;


const InfoContainer = styled.div`
    padding: 0 1.25rem 1.25rem 1rem;
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 2;
`;

const Title = styled.div`
    color: #FFF;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const Icon = styled.img`
width: 0.84375rem;
height: 0.84375rem;
margin-right: 0.12rem;

`

const Font = styled.div`
color: #EEE;
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Button = styled.div`
display: inline-flex;
padding: 0.25rem 0.5rem;
align-items: center;
gap: 0.25rem;
border-radius: 1.375rem;
border: 1px solid #FFF;
background: rgba(255, 255, 255, 0.50);
color: #FFF;
font-family: Pretendard;
font-size: 0.875rem;
font-style: normal;
font-weight: 600;
line-height: normal;
position: absolute;
bottom: 1.25rem;
right: 1.25rem;
cursor: pointer;
`

const Dot = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    background: ${(props) => (props.isActive ? '#2D2F2D' : '#C2C2C2')};
    border-radius: 50%;
    transition: background 0.3s ease-in-out;
`;


const DotContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
gap: 4px;
margin-top: 0.75rem;
`