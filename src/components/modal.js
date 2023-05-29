import { Component } from "react";
import PropTypes from 'prop-types';

export default class Modal extends Component{
    static propTypes = {
        url: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    state = {}

    componentDidMount() {
        window.addEventListener('keydown', this.clickEsc);
    }

    componentWillUnmount() {
        window.addEventListener('keydown', this.clickEsc);
    }

    clickBackDrop = event => {
        if(event.target === event.currentTaregt){
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
            <div className="overlay" onClick={this.clickBackdrop}>
                <div className="modal">
                    <img src={this.props.url} alt="" />
                </div>
            </div>
        )
    }
}
