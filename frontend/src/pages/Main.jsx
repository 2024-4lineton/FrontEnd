import Header from "../shared/components/Header"
import MainComponent from "../entities/main/MainComponent"
import { useEffect } from "react";

export default function Main(){
  useEffect(() => {
    const urlParmas = new URLSearchParams(window.location.search);
    const authorizationCode = urlParmas.get("code");

    if(authorizationCode) {
      window.history.replaceState({}, document.title, "");
    }
  })
    return(
    <>
        <Header/>
        <MainComponent/>
    </>
    );
    
}