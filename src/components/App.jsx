import React, { Component } from "react";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal";
import Searchbar from "./SearchBar";
import {ToastContainer} from 'react-toastify';
import getImages from "components/Api";

class App extends Component {

  state = {
    query: '',
    modalImg: '',
    showModal: false,
    showBtn: false,
    page: 1,
    images: [],
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.query;
    const nextName = this.props.query;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if(prevName !== nextName || prevPage !== nextPage > 1){
        this.fetchLoadMore();
    }
  }

  fetchLoadMore = () => {
    const {query, page} = this.props;
    getImages(query, page)
    .then (response => {
        const { hits, totalHits } = response.data;
        this.setState(prevState => ({
            images: [...hits, ...prevState.images ],
            showBtn: this.state.page < Math.ceil(totalHits/12),
            status: 'resolve',
        }));
    })
    .catch(error => this.setState({ status: 'rejected'}))
}
  
  handleSubmit = handleValue => {
    this.setState({ query: handleValue, page: 1, images: [] })
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
    const { query, modalImg, showModal, page} = this.state;

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