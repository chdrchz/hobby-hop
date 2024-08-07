import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function CustomModal({ isOpen, onAfterOpen, onRequestClose, contentLabel, children }) {
  let subtitle;

  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={() => {
        if (onAfterOpen) onAfterOpen();
        subtitle.style.color = '#f00';
      }}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={contentLabel}
    >
      {children}
      <button onClick={onRequestClose}>close</button>
    </ReactModal>
  );
}

export default CustomModal;