// 

import React, { Component } from "react";
import ImageGallery from "./ImageGallery";
import Modal from "./modal";
import Searchbar from "./SearchBar";

class App extends Component {

  state = {
    inputValue: '',
    modalImg: '',
    showModal: false,
    page: 1,
  }

  getInputValue = handleValue => {
    this.setState({ inputValue: handleValue, page: 1 })
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }

  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  }

  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    const { inputValue ,modalImg, showModal ,page} = this.state;

    return (
      <>
        <Searchbar getInputValue={this.getInputValue}/>
        <ImageGallery inputValue={inputValue} onClick={this.getLargeImg} loadMoreBtn={this.loadMoreBtn} page={ page}/>
        {showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
      </>
    )
  }
}

export default App;