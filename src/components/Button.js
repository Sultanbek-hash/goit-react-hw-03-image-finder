// import PropTypes from 'prop-types';

// export default function Button({ onClick }) {
//     return (
//         <div>
//       <button type="button" className="button" onClick={onClick}>
//         Load more
//       </button>
//       </div>
//     );
//   }
  
//   Button.propTypes = {
//     onClick: PropTypes.func.isRequired,
//   };


import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <button type="button" className="button" onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};