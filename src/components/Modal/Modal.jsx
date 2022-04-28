import css from './Modal.module.css';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    imgUrl: PropTypes.string,
    imgTags: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={this.props.imgUrl} alt={this.props.imgTags} />
        </div>
      </div>
    );
  }
}

export default Modal;
