import React, { useState } from 'react';

const useDisclous = () => {
    const [isOpen, setIsOpen] = useState(false);

  const onOpen = () =>{
    setIsOpen(true);
  }

  const onClose = () =>{
    setIsOpen(false);
  }
    return {onClose, onOpen, isOpen};
};

export default useDisclous;
