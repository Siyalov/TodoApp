import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Main from './src/Screens/Main';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default App;
