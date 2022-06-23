import React from 'react';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import './Filter.scss';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { selectFilter, selectCategories, setCategory } from './filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const selected = useSelector(selectFilter);

  return (
    <div className='filter'>
      <div className="filter__select">
        <div className="filter__select-text">{selected}</div>
        <div className="filter__select-arrow"><Arrow /></div>
        <select className="filter__select-native"
          value={selected}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          {categories.map(category =>
            <option key={category} className='filter__option' value={category}>{category}</option>
          )}
        </select>
      </div>
      <div className="filter__buttons">
        {categories.map(category =>
          <Button key={category} className='filter__btn' category={category} />
        )}
      </div>
    </div>
  );
}

const Button = ({ category, className }) => {
  const dispatch = useDispatch();
  const selected = useSelector(selectFilter);
  const isSelected = category === selected || undefined;

  return (
    <button className={"category__btn " + className}
      data-selected={isSelected}
      onClick={() => dispatch(setCategory(category))}
    >
      {category}
    </button>
  );
}

Filter.Button = Button;
export { Filter };