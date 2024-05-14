import { ModalW, Backdrop, CloseBtn } from './Modal.styled';
import { IconButton } from '../../components';
import { useEffect, useState } from 'react';

const ModalPortal = ({ isOpen, onClose, children }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setTimeout(onClose, 500);
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalW>
        <CloseBtn onClick={onClose}>
          <IconButton size="32px" icon="close" />
        </CloseBtn>
        <div className="modal-content">{children}</div>
      </ModalW>
    </Backdrop>
  );
};

export default ModalPortal;
