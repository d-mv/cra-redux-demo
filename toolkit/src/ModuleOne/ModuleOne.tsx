import { useDispatch } from 'react-redux';

import { setData } from '../store';
import classes from './ModuleOne.module.css';

export function ModuleOne() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setData(['button clicked']));
  }

  return (
    <div className={classes.container}>
      <button onClick={handleClick}>Send message</button>
    </div>
  );
}
