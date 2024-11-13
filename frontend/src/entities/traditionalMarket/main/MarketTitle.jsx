import styled from "styled-components";
import icon from '../../../assets/TraditionalMarket/dropdown.svg';
import check from "../../../assets/TraditionalMarket/check.svg";
import { useState } from 'react';

export default function MarketTitle(){
    const [option, setOption] = useState("가까운순");
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (selectedOption) => {
        setOption(selectedOption);
        setIsOpen(false);
    };
    return(
        <>
        <Title>전통시장</Title>
        <Subtitle>위치를 기반으로 5km 이내에 있는 시장들이에요.</Subtitle>
        <Dropdown onClick={() => setIsOpen(!isOpen)}>
                <Option>{option}</Option>
                <Icon src={icon} />
            </Dropdown>

            {isOpen && (
                <OptionsList>
                    <OptionItem onClick={() => handleOptionClick("가까운순")} style={{borderBottom:"0.0625rem solid #C2C2C2"}}>
                        <CheckIcon src={check} visible={option === "가까운순"} /> 가까운순
                    </OptionItem>
                    <OptionItem onClick={() => handleOptionClick("상품 많은 순")}>
                        <CheckIcon src={check} visible={option === "상품 많은 순"} /> 상품 많은 순
                    </OptionItem>
                </OptionsList>
            )}
        </>
        );
}

const Title = styled.div`
    color: #333;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-weight: 600;
`;

const Subtitle = styled(Title)`
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
`;


const Dropdown = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.5rem;
    color: #999;
    font-family: Pretendard;
    font-size: 0.875rem;
    cursor: pointer;
`;

const Option = styled.div``;

const Icon = styled.img`
    width: 0.6875rem;
    height: 0.375rem;
`;

const OptionsList = styled.div`
    position: absolute;
    padding: 0.5rem;
    margin-top: 0.13rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
    border-radius: 0.5rem;
    background: #FFF;
`;

const OptionItem = styled.div`
    color: #333;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1.5rem 0.5rem 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const CheckIcon = styled.img`
    width: 1.125rem;
    height: 1.125rem;
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;