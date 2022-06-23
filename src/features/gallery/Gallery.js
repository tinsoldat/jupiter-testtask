import React, { useEffect } from 'react';
import './Gallery.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Filter } from '../filter/Filter';
import { load, selectPhotos, deleteSelected, selectPhoto } from './gallerySlice';
import { useDispatch } from 'react-redux';

export const Gallery = () => {
  const photos = useSelector(selectPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = (e) => e.key === 'Delete' && dispatch(deleteSelected());
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [dispatch]);

  return (
    <div className="gallery">
      <Filter />
      <div className="photos">
        {photos.map(photo => <Photo key={photo.title} photo={photo} />)}
      </div>
      <button className="gallery__load" onClick={() => dispatch(load())}>
        load more
      </button>
    </div>
  );
}

export const Photo = ({ photo }) => {
  const dispatch = useDispatch();
  const { title, img, category, isSelected } = photo;

  return (
    <div className="photo"
      style={{ backgroundImage: `url(images/${img}.jpg)` }}
      data-selected={isSelected || undefined}
      onClick={() => dispatch(selectPhoto(title))}
    >
      <div className="photo__items">
        <Filter.Button className='photo__category' category={category} />
        <div className="photo__title">{title}</div>
      </div>
    </div>
  );
}
