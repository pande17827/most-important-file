import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

const LocationSelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Open-Source Map Image with Red Pin */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/OpenStreetMap_logo.svg' }}
          style={styles.mapImage}
        />
        <View style={styles.pinContainer}>
          <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 2C8.13 2 5 5.13 5 9C5 12.75 8.6 17.27 11.2 20.19C11.7 20.74 12.3 20.74 12.8 20.19C15.4 17.27 19 12.75 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
              fill="red"
            />
          </Svg>
        </View>
      </View>

      {/* Address Section */}
      <View style={styles.addressContainer}>
        <Text style={styles.title}>Select Location</Text>
        <Text style={styles.subtitle}>Your Location</Text>
        <Text style={styles.address}>2972 Vandematram Road, Gota, Gujarat 85486</Text>
      </View>

      {/* Save As Options */}
      <View style={styles.saveAsContainer}>
        <TouchableOpacity style={styles.saveAsButton}>
          <Text style={styles.saveAsText}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveAsButton}>
          <Text style={styles.saveAsText}>🏢 Office</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveAsButton}>
          <Text style={styles.saveAsText}>📍 Others</Text>
        </TouchableOpacity>
      </View>

      {/* Footer - Update Address Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update address</Text>
      </TouchableOpacity>
      
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'space-between',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    width: 35,
    height: 35,
    backgroundColor: '#7D0C0C',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    color: '#FFF',
    fontSize: 18,
  },
  imageContainer: {
    width: '100%',
    height: 500,
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pinContainer: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: [{ translateX: -15 }, { translateY: -30 }],
  },
  addressContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  address: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  saveAsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 30,  // Increased spacing from the footer
  },
  saveAsButton: {
    padding: 12,
    backgroundColor: '#EEE',
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
  },
  saveAsText: {
    fontSize: 16,
    fontWeight: '500',
  },
  updateButton: {
    backgroundColor: '#7D0C0C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 40, // Increased spacing at the bottom
  },
  updateButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocationSelectionScreen;


// App.jsx
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LocationSelectionScreen from './components/LocationSelectionScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="LocationSelection" component={LocationSelectionScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
