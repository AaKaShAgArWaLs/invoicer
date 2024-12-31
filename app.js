import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SignUpEmptyState from './app/signup'; // Import your signup screen
import LoginEmptyState from './app/login'; // Import your login screen
import ForgetEmptyState from './app/forgot.js'
import DataEntry from './app/data.js';
import OTPVerification from './app/otp.js'
import NewPassword from './app/new.js'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="signup" component={SignUpEmptyState} />
        <Stack.Screen name="login" component={LoginEmptyState} />
        <Stack.Screen name="home" component={SignUpEmptyState} />
        <Stack.Screen name="forgot" component={ForgetEmptyState} />
        <Stack.Screen name="data" component={DataEntry} />
        <Stack.Screen name="otp" component={OTPVerification} />
        <Stack.Screen name="new" component={NewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


