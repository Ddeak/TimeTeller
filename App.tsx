import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-native-paper';

import { HomeScreen } from './features';
import { materialTheme } from './styles';

const AppNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  public render() {
    return (
      <Provider theme={materialTheme}>
        <AppContainer />
      </Provider>
    );
  }
}
