import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import FastImage from 'react-native-fast-image';

const MaharajSplashScreen = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../asseets/images/l1.jpeg')} // Adjusted path
        style={styles.logo}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B0000', // Dark red background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 400, // Adjust size as needed
  },
});

export default MaharajSplashScreen;



// App.jsx
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import MaharajSplashScreen from './components/MaharajSplashScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Splash" component={MaharajSplashScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

