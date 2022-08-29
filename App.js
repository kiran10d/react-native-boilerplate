import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AuthStack from './src/navigation/AuthStack';

import AppDrawer from './src/navigation/AppDrawer';

function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
}

export default App;
