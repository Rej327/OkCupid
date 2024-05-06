import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ opened, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (opened) {
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    } else {
      setIsVisible(false);
    }
  }, [opened]);

  return (
    <>
      {opened && (
        <div className={`modalTransition ${isVisible ? "fade-in" : ""}`}>
          <div
            className="w-full h-full bg-black/50 absolute z-50 left-0 top-0"
            onClick={() => onClose()}
          ></div>
          <div className="w-full h-full absolute z-[51] left-0 -top-16 flex items-center justify-center">
            <div className="p-5 bg-white rounded-lg w-auto">
              <div className="flex justify-end">
                <IoCloseSharp
                  className="text-[2rem] text-[#2A2F35] hover:text-[#949BA7] cursor-pointer duration-150"
                  onClick={() => onClose()}
                />
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
