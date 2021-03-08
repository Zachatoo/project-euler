import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './index.css';

import { AppProvider } from './hoc/AppContext/AppContext';
import Layout from './components/Layout/Layout';
import ProjectEuler from './containers/ProjectEuler/ProjectEuler';

const iconList = Object
  .keys(Icons)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => Icons[icon]);
library.add(...iconList);

function App() {
  return (
    <AppProvider>
      <Layout>
        <ProjectEuler />
      </Layout>
    </AppProvider>
  );
}

export default App;
