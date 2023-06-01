import React, { Component } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import Modal from "../Modal/Modal";
import Searchbar from "../SearchBar/SearchBar";
import {ToastContainer} from 'react-toastify';
import getImages from "components/Servise/Api";

class App extends Component {  

  state = {
    query: '',
    modalImg: '',
    showModal: false,
    showBtn: false,
    page: 1,
    images: [],
    error: null,
  }

  componentDidUpdate(_, prevState) {
    const prevName = prevState.query;
    const nextName = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if(prevName !== nextName || prevPage !== nextPage){
        this.fetchLoadMore();
    }
  }

  fetchLoadMore = () => {
    const {query, page} = this.state;
    getImages(query, page)
    .then (response => {
      const {totalHits} = response;
        this.setState(prevState => ({
            images: [...prevState.images, ...response.hits ],
            showBtn: page < Math.ceil(totalHits/12),
            status: 'resolve',
        }));
    })
    .catch(error => this.setState({error: error.message, status: 'rejected'}))
}
  
  handleSubmit = handleValue => {
    this.setState({ query: handleValue, page: 1, images: [], showBtn: false});
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
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
    const { query, modalImg, showModal, page} = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ToastContainer 
          autoClose={3000}
        />  
        <ImageGallery query={query} onClick={this.getLargeImg} loadMoreBtn={this.loadMoreBtn} page={page}/>
        {showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
      </>
    )
  }
}

export default App;