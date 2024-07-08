import React from "react";
import Component1 from "./Component1";
import Container from "./Container";
import HeaderNav from "../Header/HeaderNav";

function Home() {
  return (
    <div className="">
      <HeaderNav></HeaderNav>
      <Component1></Component1>
      <Container></Container>
    </div>
  );
}

export default Home;
