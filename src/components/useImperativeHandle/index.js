import { forwardRef, useRef, useImperativeHandle } from "react";

const useImperativeHandleFn = forwardRef((_, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current.value = "";
    },
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <>
      Input: <input ref={inputRef} />
    </>
  );
});

export default useImperativeHandleFn;
