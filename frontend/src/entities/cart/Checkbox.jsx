import { useRecoilValue } from "recoil";
import { cartState } from "../../shared/state/Cart";
import styled from "styled-components";
import CartList from "./CartList";
import None from "./None";

export default function Checkbox(){

    const cart = useRecoilValue(cartState);

    return(
    <Wrapper>

    <div>
    {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <CartList key={index} item={item} />
                    ))
                ) : (
                    <None />
                )}
    </div>
    </Wrapper>
    );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
