// import ImageGalleryItem from "components/ImageGalleryItem";
// import getImages from "components/api";
// import { Component } from "react";
// import PropTypes from 'prop-types';
// import Loader from "./Loader";
// import Button from "./Button";

// export default class ImageGallery extends Component{
//     static propTypes = {
//         onClick: PropTypes.func.isRequired,
//         query: PropTypes.string.isRequired,
//       };

//       state ={
//         images: [],
//         status: 'idle',
//       }

//       componentDidUpdate(prevProps, prevState) {
//         const prevName = prevProps.query;
//         const nextName = this.props.query;
//         const prevPage = prevProps.page;
//         const nextPage = this.props.page;
//         if(prevName !== nextName){
//             this.fetchLoad();
//         }
//         if(prevPage !== nextPage && nextPage > 1){
//             this.fetchLoadMore();
//         }
//       }

//       fetchLoad = () => {
//         const {query, page} = this.state;
//         getImages(query, page)
//         .then(response => {
//             this.setState({
//                 images: response.hits,
//                 status: 'resolve',
//             });
//         })
//         .catch(error => this.setState({status: 'rejected'}))
//     }

//     fetchLoadMore = () => {
//         const {query, page} = this.state;
//         getImages(query, page)
//         .then (response => {
//             this.setState(prevState => ({
//                 images: [...prevState.images, ...response.hits],
//                 status: 'resolve',
//             }));
//         })
//         .catch(error => this.setState({status: 'rejected'}))
//     }

// render(){
//     const {images, status} = this.state;

//     if(status === 'pending'){
//         return <Loader />
//     }

//     if(status === 'resolve'){
//         return(
//             <>
//             <ul className="gallery">
//                 {images.map(({id, largeImageURL, tags}) => (
//                     <ImageGalleryItem 
//                         key={id}
//                         url={largeImageURL}
//                         tags={tags}
//                         onClick={this.props.onClick}
//                     />
//                 ))}
//             </ul>
//             {images.length !== 0 ? (
//                 <Button onClick={this.props.loadMoreBtn} />
//             ) : (
//                 alert('No result')
//             )}
//         </>
//         );
//         } 
//     }  
// }

import { Component } from 'react';
import PropTypes from 'prop-types';
import getImages from './api';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';

export default class ImageGallery extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
  };

  state = {
    images: [],
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputValue !== this.props.inputValue) {
      this.fetchLoad();
    }
    if (prevProps.page !== this.props.page && this.props.page > 1) {
      this.fetchLoadMore();
    }
  }

  fetchLoad = () => {
    const { inputValue, page } = this.props;
    getImages(inputValue, page)
      .then(response => {
        this.setState({
          images: response.hits,
          status: 'resolve',
        });
      })
      .catch(error => this.setState({ status: 'rejected' }));
  };

  fetchLoadMore = () => {
    const { inputValue, page } = this.props;

    getImages(inputValue, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          status: 'resolve',
        }));
      })
      .catch(error => this.setState({ status: 'rejected' }));
  };

  render() {
    const { images, status } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolve') {
      return (
        <>
          <ul className="gallery">
            {images.map(({ id, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                url={largeImageURL}
                tags={tags}
                onClick={this.props.onClick}
              />
            ))}
          </ul>
          {images.length !== 0 ? (
            <Button onClick={this.props.loadMoreBtn} />
          ) : (
            alert('No results')
          )}
        </>
      );
    }
  }
}