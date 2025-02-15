import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Checkbox } from 'react-native-paper';

const NameInputScreen = () => {
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar} />
        <View style={styles.progressBackground} />
      </View>

      {/* Title */}
      <Text style={styles.title}>What's your name?</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#999"
      />

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
          color="#720000"
        />
        <Text style={styles.checkboxText}>Send WhatsApp updates</Text>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        You agree to our <Text style={styles.linkText}>Terms of Service</Text> &{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    height: 4,
    marginTop: 60,
    marginBottom: 20,
  },
  progressBar: {
    flex: 1,
    backgroundColor: '#720000',
  },
  progressBackground: {
    flex: 2,
    backgroundColor: '#e0e0e0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#720000',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#720000',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
  },
  linkText: {
    color: '#720000',
    fontWeight: 'bold',
  },
});

export default NameInputScreen;

// App.jsx
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import NameInputScreen from './components/NameInputScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="NameInput" component={NameInputScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
