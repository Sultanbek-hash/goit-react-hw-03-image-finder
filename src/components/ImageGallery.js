import { Component } from "react";
import PropTypes from 'prop-types';
import getImages from "components/api";
import ImageGalleryItem from "components/ImageGalleryItem";
import Loader from "./Loader";
import Button from "./Button";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ImageGallery extends Component{
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        query: PropTypes.string.isRequired,
      };

      state ={
        images: [],
        status: 'idle',
      }

      componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.query;
        const nextName = this.props.query;
        const prevPage = prevProps.page;
        const nextPage = this.props.page;

        if(prevName !== nextName){
            this.fetchLoad();
        }
        if(prevPage !== nextPage && nextPage > 1){
                this.fetchLoadMore();
        }
      }

    fetchLoad = () => {
        const {query, page} = this.props;
        getImages(query, page)
        .then(response => {
            this.setState({
                images: response.hits,
                status: 'resolve',
            });
        })
        .catch(error => this.setState({status: 'rejected'}))
    }

    fetchLoadMore = () => {
        const {query, page} = this.props;
        getImages(query, page)
        .then (response => {
            this.setState(prevState => ({
                images: [...prevState.images, ...response.hits],
                status: 'resolve',
            }));
        })
        .catch(error => this.setState({status: 'rejected'}))
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