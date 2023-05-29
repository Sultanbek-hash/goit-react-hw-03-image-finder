import PropTypes from 'prop-types';

export default function ImageGalleryItem({ url, tags, onClick }) {
  return (
    <>
      <li className="ImageGalleryItem">
        <img className="ImageGalleryItem-image" src={url} alt={tags} onClick={() => onClick(url)} />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};