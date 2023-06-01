import { Component } from "react";
import PropTypes from 'prop-types';

export default class Modal extends Component{
    static propTypes = {
        url: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    };
    componentDidMount() {
        window.addEventListener('keydown', this.clickEsc);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.clickEsc);
    }

    clickBackDrop = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    }

    clickEsc = evt => {
        if(evt.code === 'Escape') {
            this.props.onClose();
        }
    }

    render(){
        return(
            <div className="Overlay" onClick={this.clickBackDrop} >
                <div className="Modal">
                    <img src={this.props.url} alt="" />
                </div>
            </div>
        )
    }
}
