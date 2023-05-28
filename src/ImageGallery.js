import { Component } from "react";
import axios from "axios";

axios.defaults.baseURL="https://pixabay.com/api/"
const URL_KEY = '36713739-10096fbc35ee82e827459eaa7';

export default class ImageGallery extends Component {
    state = {
        page: 1,
        query: '',
        per_page: 12,
    }
    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.query;
        const nextName = this.props.query;
        this.setState({page: 1, per_page: 12});

        fetch(``)
    }

}