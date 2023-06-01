import { Component } from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ImageGallery extends Component{
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        query: PropTypes.string.isRequired,
      };     
      state ={
        images: [], 
        modalImg: '',
      }
      
render(){
    const {images, status} = this.state;

    if(status === 'pending'){
        return <Loader />
    }

    if(status === 'resolve'){
        return(
            <>
            <ul className="ImageGallery">
                {images.map(({id, largeImageURL, tags}) => (
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
                toast.error('No result')
            )}
        </>
        );
        } 
    }  
}