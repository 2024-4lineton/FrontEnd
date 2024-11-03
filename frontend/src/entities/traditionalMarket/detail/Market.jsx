import styled from 'styled-components';

export default function Market({ img, name, isSelected }) {
    return (
        <Wrapper isSelected={isSelected}>
            <Img src={img} isSelected={isSelected}/>
            <Name isSelected={isSelected}>{name}</Name>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 6.25rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: ${({ isSelected }) => (isSelected ? '0.0625rem solid black' : '0.0625rem solid #C2C2C2')};
    padding-bottom: 0.5rem;
`;

const Img = styled.img`
    border-radius: 4rem;
    border: 1px solid #EEE;
    height: 4rem;
    width: 4rem;
    object-fit: cover;
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)}
`;

const Name = styled.div`
    color: ${({ isSelected }) => (isSelected ? '#2D2F2D' : '#C2C2C2;')}
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 600;
`;