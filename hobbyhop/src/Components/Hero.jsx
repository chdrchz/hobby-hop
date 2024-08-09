import React from 'react';

import "../Styles/Hero.css";
import Button from "./Button";
import CustomModal from "./CustomModal";
import CreateAccount from './CreateAccount';
import VerticalCarousel from './VerticalCarousel';

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
      <div className="div">
        <VerticalCarousel />
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
