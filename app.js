import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginEmptyState from "./app/LoginEmptyState"; // Correct path to your component

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  // Assuming you want to hide splash screen after some delay
  React.useEffect(() => {
    const timer = setTimeout(() => setHideSplashScreen(false), 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {hideSplashScreen ? (
          <Stack.Screen
            name="LoginEmptyState"
            component={LoginEmptyState}
            options={{ headerShown: false }}
          />
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
