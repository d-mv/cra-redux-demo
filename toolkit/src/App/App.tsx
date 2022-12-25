import { BiChevronsRight } from 'react-icons/bi';

import { ModuleOne } from '../ModuleOne';
import { ModuleTwo } from '../ModuleTwo';
import classes from './App.module.css';

export function App() {
  return (
    <div className={classes.container}>
      <header>
        <h4>CRA+Redux Demo - toolkit mode</h4>
      </header>
      <main>
        <ModuleOne />
        <BiChevronsRight />
        <ModuleTwo />
      </main>
    </div>
  );
}
