import React from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#__next'); // Required for accessibility

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode; // Add this line
}

const MyModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="My Modal"
    >
      {children}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default MyModal;
