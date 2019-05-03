import React, { Component} from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height:"50%",
    width:"50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};


export default class WinModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }


  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <h1 className="text-bold justify-center leading-loose ml-auto font-lg text-blue-light">
            Congratulations!
          </h1>
          <h3>You Won!</h3>
          <hr />
          <h4 className="leading-loose">
            It took you {this.props.attempts} attempts.
          </h4>
          <button
            onClick={this.closeModal}
            className="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </Modal>
      </div>
    );
  }
}
