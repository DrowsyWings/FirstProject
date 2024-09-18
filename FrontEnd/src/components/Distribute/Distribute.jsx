import React, { useRef } from "react";
import Subscribe from "./Subscribe";
import ComponentD1 from "./ComponentD1";
import HeaderNav from "../Header/HeaderNav";

function Distribute() {
  return (
    <div className=" bg-gradient-to-r from-blue-50 via-blue-100 to-sky-200 relative px-6 sm:px-10 md:px-0 pb-20 md:pb-40 flex justify-center flex-col items-center gap-6 lg:gap-24">
      <HeaderNav></HeaderNav>
      <ComponentD1></ComponentD1>
      <Subscribe></Subscribe>
    </div>
  );
}

export default Distribute;
