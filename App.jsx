import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MobileNumberScreen from './src/screens/MobileNumberScreen'; // Import Mobile Number Screen
import OtpVerificationScreen from './src/screens/OtpVerificationScreen'; // Import OTP Verification Screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MobileNumber">
        {/* Mobile Number Screen */}
        <Stack.Screen
          name="MobileNumber"
          component={MobileNumberScreen}
          options={{ headerShown: false }} // Hide the header for this screen
        />
        
        {/* OTP Verification Screen */}
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerificationScreen}
          options={{ headerShown: false }} // Hide the header for this screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
