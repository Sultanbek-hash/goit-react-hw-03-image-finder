import Searchbar from "SearchBar";
import { Component } from "react";
import {ToastContainer} from 'react-toastify';
// code API 36713739-10096fbc35ee82e827459eaa7

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    per_page: 12,
  }

handleSubmit = query =>{
  this.setState({query});
}
  render(){
    const {query} = this.state;
    return(
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ToastContainer autoClose={3000} />
      </div>
    )
  }
}