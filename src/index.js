import ReactDOM from 'react-dom/client';
import { Movimiento } from './movimiento/Movimiento';

const App = () => {
  return(<Movimiento/>);

}
const JSX= (<App/>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(JSX)