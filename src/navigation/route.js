import {createAppContainer} from 'react-navigation';
import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
import {createStackNavigator} from 'react-navigation-stack';

const HomePage = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({}) => ({
      header: null,
    }),
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({}) => ({
      title: 'Dashboard',

      headerStyle: {
        backgroundColor: 'rgb(255,217,25)',
      },
    }),
  },
});

const AppContainer = createAppContainer(HomePage);
export default AppContainer;
