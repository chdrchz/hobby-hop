import React from "react";
import CustomModal from "./CustomModal";
import CreateFeed from "./CreateFeed";

function Create() {
  return (
    <div className="create-feed-content-container">
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create Feed Content Modal"
      >
        <CreateFeed />
      </CustomModal>
    </div>
  );
}

export default Create;
