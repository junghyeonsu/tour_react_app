import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'mobx-react';
import gameStore from './store/gameStore';
import stageStore from './store/stageStore';

const gamestore = new gameStore();
const stagestore = new stageStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider stageStore={stagestore} gameStore={gamestore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
