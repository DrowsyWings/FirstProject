import React, { useRef } from "react";
import Subscribe from "./Subscribe";
import ComponentD1 from "./ComponentD1";

function Distribute() {
  const formRef = useRef(null);
  const handleScrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <ComponentD1 handleScrollToForm={handleScrollToForm}></ComponentD1>
      <Subscribe formRef={formRef}></Subscribe>
    </div>
  );
}

export default Distribute;
