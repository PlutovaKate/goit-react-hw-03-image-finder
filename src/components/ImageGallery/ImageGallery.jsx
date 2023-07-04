import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.imageGallery}>
        <li>
          <ImageGalleryItem />
        </li>
      </ul>
    );
  }
}

export default ImageGallery;
