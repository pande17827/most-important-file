import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const FinalInfo = () => {
  const navigation = useNavigation();
  const [travelMode, setTravelMode] = useState('');
  const [experience, setExperience] = useState('');
  const [income, setIncome] = useState('');
  const [issues, setIssues] = useState('');

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 10 }}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Personal information</Text>
      <View style={{ height: 2, backgroundColor: '#800000', marginBottom: 20 }} />

      {/* Input Fields */}
      <Text style={styles.label}>How will you travel to work?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        placeholderTextColor="#999"
        value={travelMode}
        onChangeText={setTravelMode}
      />

      <Text style={styles.label}>How many years of cooking experience do you have?</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex. 0-1 year"
        placeholderTextColor="#999"
        value={experience}
        onChangeText={setExperience}
      />

      <Text style={styles.label}>How much money do you earn currently?</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex. 10,000/-"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={income}
        onChangeText={setIncome}
      />

      <Text style={styles.label}>Have you been faced any problem in past experience?</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex. Time Management"
        placeholderTextColor="#999"
        value={issues}
        onChangeText={setIssues}
      />

      {/* Confirm Button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Confirmed')}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#800000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#800000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default FinalInfo;


// App.jsx
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import FinalInfo from './components/FinalInfo'; // Adjust the path as needed

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="FinalInfo">
//         <Stack.Screen 
//           name="FinalInfo" 
//           component={FinalInfo} 
//           options={{ headerShown: false }} // Hide default header
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
