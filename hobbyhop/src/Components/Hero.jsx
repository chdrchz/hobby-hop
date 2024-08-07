import React from 'react';

import "../Styles/Hero.css";
import Button from "./Button";
import CustomModal from "./CustomModal";
import CreateAccount from './CreateAccount';

const Hero = () => {

  // set state for opening and closing the modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true); // true is open
  }

  function closeModal() {
    setIsOpen(false); // false is close
  }

  return (
    <div className="hero">
      <div className="frame">
        <img className="humaaans-study" alt="Humaaans study" src="images/Humaaans.jpg" />
      </div>
      <div className="div">
        <p className="HOP-INTO-WHAT-YOU">
          <span className="text-wrapper">HOP</span>
          <span className="span"> INTO WHAT YOU </span>
          <span className="text-wrapper">LOVE</span>
        </p>
        <div className="text-wrapper-2">with</div>
        <div className="friends-family-wrapper">
          <p className="friends-family">
            friends, family, roommates, strangers,(this could be a carousel that rotates)
          </p>
        </div>
        <Button onClick={openModal} id="create-account" color="gray">Create Account</Button>
        <CustomModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Create Account Modal"
        >
          <CreateAccount />
        </CustomModal>
      </div>
    </div>
  );
};

export default Hero;
