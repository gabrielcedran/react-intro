import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  // when we want exactly one piece of state inside a component, we need to use refs
  const elRef = useRef(null); // enables components to survive past renders until the modal is disposed all together.
  if (!elRef.current) {
    console.log("created elRef for modal");
    // if it has not been initialised yet, create it with one div. We don't want to keep re-rendering this component cuz it is expensive.
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    console.log("Rendered modal");
    modalRoot.appendChild(elRef.current);
    return () => {
      console.log("cleaned up modal");
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
