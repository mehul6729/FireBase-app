import React from "react";
import { createPortal } from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div style={{}} 
          className="relative  z-50 m-auto min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <IoIosCloseCircleOutline
                onClick={onClose}
                className="cursor-pointer self-end text-2xl"
              />
            </div>
            {children}
          </div>
          
          <div
              onClick={onClose}
              className="absolute  top-0 z-10 h-screen w-screen  backdrop-blur"
            ></div>
          
        </>
      )}
    </>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
