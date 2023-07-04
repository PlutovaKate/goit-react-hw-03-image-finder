import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  render() {
    return (
      <div>
        <li className={css.imageGalleryItem}>
          <img src="" alt="" />
        </li>
        <Modal />
      </div>
    );
  }
}

export default ImageGalleryItem;
