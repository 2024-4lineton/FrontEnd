import Noti from "../entities/notification/Noti";
import Header from "../shared/components/Header";
import Nav from "../shared/components/Nav";
import styled from "styled-components";

export default function Notification(){
    return(
    <div>
        <Header/>
        <NotiContainer>
            <Noti/>
        </NotiContainer>
        <Nav/>
    </div>);
}

const NotiContainer = styled.div`
width : 100%;
height: calc(100vh - 4.375rem - 3.875rem);
padding: 1rem;
`