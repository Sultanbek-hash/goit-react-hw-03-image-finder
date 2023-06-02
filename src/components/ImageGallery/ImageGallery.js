import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({images, onClick}){  
        return (
            <>
            <ul className="ImageGallery">
                {images.map(({id, largeImageURL, tags}) => (
                    <ImageGalleryItem 
                        key={id}
                        url={largeImageURL}
                        tags={tags}
                        onClick={onClick}
                    />
                ))}
            </ul>
            </>
        );
}

ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired,
}
