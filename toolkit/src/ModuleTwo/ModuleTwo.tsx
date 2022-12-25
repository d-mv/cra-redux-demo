import { useSelector } from 'react-redux';
import { getData } from '../store';
import classes from './ModuleTwo.module.css';

export function ModuleTwo() {
  const data = useSelector(getData);

  function renderData() {
    return (
      <p className='animate__animated animate__flipInX'>{data.join('. ')}</p>
    );
  }

  return (
    <div className={classes.container}>
      {Boolean(data.length) && renderData()}
    </div>
  );
}
