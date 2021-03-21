import React from 'react';

import { Provider } from 'mobx-react';
import LayoutsRoute from './layouts/Router';
import RootStore from './stores/RootStore';

const App = () => (
  <Provider {...RootStore}>
    <LayoutsRoute />
  </Provider>
);

export default App;
