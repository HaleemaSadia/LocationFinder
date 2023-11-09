import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

import RootNavigator from './RootNavigator';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
