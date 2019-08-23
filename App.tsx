import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-native-paper';

import { OperationScreen, CompareDatesScreen } from './features';
import { materialTheme } from './styles';

const AppNavigator = createBottomTabNavigator({
  Operation: OperationScreen,
  Compare: CompareDatesScreen,
});

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
