import {ImSearch} from 'react-icons/im';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from "react";

export default class Searchbar extends Component{
    state = {
        query: '',
    }

    handleChange = event =>{
        this.setState({ query: event.currentTarget.value });
    }

    handleSubmit = event => {
        const {query} = this.state;
        event.preventDefault();
        if(query.trim() === ''){
            toast.error('Введите название картинки');
            return;
        }
        this.props.onSubmit(query);
        this.setState({query: ''});
    }
    render(){
        const {query} = this.state;
        return(
    <header className="Searchbar">
    <form className="SearchForm" onSubmit={this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
        <ImSearch style={{marginRight: 8}} />
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      name="query"
      autoComplete='off'
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
      value={query}
    />
  </form>
    </header>
        );
    }
}

