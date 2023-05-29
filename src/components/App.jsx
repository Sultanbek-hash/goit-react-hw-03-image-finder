import React, { Component } from "react";
import ImageGallery from "./ImageGallery";
import Modal from "./modal";
import Searchbar from "./SearchBar";
import {ToastContainer} from 'react-toastify';

class App extends Component {

  state = {
    query: '',
    modalImg: '',
    showModal: false,
    page: 1,
  }

  handleSubmit = handleValue => {
    this.setState({ query: handleValue, page: 1 })
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
    const { query, modalImg, showModal ,page} = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ToastContainer 
          autoClose={3000}
        />
        <ImageGallery query={query} onClick={this.getLargeImg} loadMoreBtn={this.loadMoreBtn} page={ page}/>
        {showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
      </>
    )
  }
}

export default App;