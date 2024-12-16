import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpEmptyState from './app/index'; // Import your signup screen
import LoginEmptyState from './app/login'; // Import your login screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="index" component={SignUpEmptyState} />
        <Stack.Screen name="login" component={LoginEmptyState} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


