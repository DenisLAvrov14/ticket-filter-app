import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterStops } from '../../store/filterSlice';

const Filter: React.FC = () => {
    const dispatch = useDispatch();
  
    return (
      <div>
        <h4>Фильтр по количеству пересадок:</h4>
        <button onClick={() => dispatch(setFilterStops(null))}>Все</button>
        <button onClick={() => dispatch(setFilterStops(0))}>Без пересадок</button>
        <button onClick={() => dispatch(setFilterStops(1))}>1 пересадка</button>
        <button onClick={() => dispatch(setFilterStops(2))}>2 пересадки</button>
        <button onClick={() => dispatch(setFilterStops(3))}>3 пересадки</button>
      </div>
    );
  };
  

export default Filter;
