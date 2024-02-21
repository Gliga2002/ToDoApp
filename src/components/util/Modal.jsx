import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";


const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
  const dialog=useRef();

  useImperativeHandle(ref, () => {
    return {
      open: function() {
        dialog.current.showModal();
      }
    }
  })
  return createPortal(<dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
    {children}
    <form className="flex justify-end" method="dialog">
      <Button>{btnCaption}</Button>
    </form>
  </dialog>,
  document.getElementById('modal-root'));
})

export default Modal;
