// import PropTypes from 'prop-types';

// export default function ImageGalleryItem({url,  tags, onClick }){
//     return(
//         <>
//             <li className='gallery-item'> 
//                 <img src={url} alt={tags} onClick={() => onClick(url)} />
//             </li>
//         </>
//     );
// }

// ImageGalleryItem.propTypes = {
//     url: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
//   };

import PropTypes from 'prop-types';

export default function ImageGalleryItem({ url, tags, onClick }) {
  return (
    <>
      <li className="item">
        <img src={url} alt={tags} onClick={() => onClick(url)} />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};