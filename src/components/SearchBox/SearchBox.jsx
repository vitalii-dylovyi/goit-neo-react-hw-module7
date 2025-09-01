import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../ui/input';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleUpdateNameFilter = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className='gap-1 flex flex-col'>
      <p className='m-0'>Find contacts by name</p>
      <Input
        type='text'
        className='min-w-80'
        value={nameFilter}
        onChange={(e) => handleUpdateNameFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
