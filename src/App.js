import { Provider } from 'react-redux/es';
import Input from './componets/Input';
import Router from './Routes';
import { store } from './Redux/store';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Router />
      </Provider>
    </Fragment>
  );
}

export default App;
