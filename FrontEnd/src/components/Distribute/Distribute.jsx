import React, { useRef } from "react";
import Subscribe from "./Subscribe";
import ComponentD1 from "./ComponentD1";
import HeaderNav from "../ContactUs/ContactHeader";

function Distribute() {
  const formRef = useRef(null);
  const handleScrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <HeaderNav></HeaderNav>
      <ComponentD1 handleScrollToForm={handleScrollToForm}></ComponentD1>
      <Subscribe formRef={formRef}></Subscribe>
    </div>
  );
}

export default Distribute;
