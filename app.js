import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpEmptyState from './app/signup'; // Import your signup screen
import LoginEmptyState from './app/login'; // Import your login screen
import ForgetEmptyState from './app/forgot.js'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="signup" component={SignUpEmptyState} />
        <Stack.Screen name="login" component={LoginEmptyState} />
        <Stack.Screen name="home" component={SignUpEmptyState} />
        <Stack.Screen name="forgot" component={ForgetEmptyState} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


