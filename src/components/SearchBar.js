// import {ImSearch} from 'react-icons/im';
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Component } from "react";

// export default class Searchbar extends Component{
//     state = {
//         query: '',
//     }

//     handleChange = event =>{
//         this.setState({query: event.currentTarget.value.toLowerCase()});
//     }

//     handleSubmit = event => {
//         const {query} = this.state;
//         event.preventDefault();
//         if(query.trim() === ''){
//             toast.error('Введите название картинки');
//             return;
//         }
//         this.props.onSubmit(query);
//         this.setState({query: ''});
//     }
//     render(){
//         const {query} = this.state;
//         return(
//             <>
//     <header className="searchbar">
//     <form className="form" onSubmit={this.handleSubmit}>
//     <button type="submit" className="button">
//         <ImSearch style={{marginRight: 8}} />
//       <span className="button-label">Search</span>
//     </button>

//     <input
//       className="input"
//       type="text"
//       autoComplete='off'
//      autoFocus
//       placeholder="Search images and photos"
//       onChange={this.handleChange}
//       value={query}
//     />
//   </form>
//     </header>
//             </>
//         )
//     }
// }

import { Component } from 'react';
export default class Searchbar extends Component {
  state = {
    input: '',
  };

  search = e => {
    e.preventDefault();
    this.props.getInputValue(this.state.input);
    this.setState({ input: '' });
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.search}>
          <button type="submit" className="button">
            <span className="label">Search</span>
          </button>

          <input
            name="input"
            type="text"
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.input}
            autoFocus
            placeholder="Search images and photos"
            className="input"
          />
        </form>
      </header>
    );
  }
}