import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header'; // Adjust the relative path as needed


const MobileNumberScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');

  const handleContinue = () => {
    if (phone.length !== 10 || isNaN(phone)) {
      Alert.alert('Invalid Number', 'Please enter a valid 10-digit mobile number.');
      return;
    }
    // Navigate to OTP screen with the entered phone number
    navigation.navigate('OtpVerification', { phoneNumber: `+91 ${phone}` });
  };

  return (
    <View style={styles.container}>
      {/* ✅ Your Custom Header */}
      <Header onBackPress={() => navigation.goBack()} />

      {/* 📌 Title */}
      <Text style={styles.title}>Welcome to Maharaj</Text>
      <Text style={styles.subtitle}>We'll send you a verification code</Text>

      {/* 📌 Mobile Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>🇮🇳 +91</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          keyboardType="phone-pad"
          maxLength={10}
          onChangeText={setPhone}
          value={phone}
        />
      </View>

      {/* 📌 Info Text */}
      <Text style={styles.infoText}>
        You will receive an SMS verification that may apply message and data rates.
      </Text>

      {/* 📌 Continue Button */}
      <TouchableOpacity 
        onPress={handleContinue} 
        style={[styles.button, phone.length === 10 ? styles.buttonActive : styles.buttonDisabled]}
        disabled={phone.length !== 10}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* 📌 Terms & Privacy Policy */}
      <Text style={styles.termsText}>
        You agree to our <Text style={styles.linkText}>Terms of Service</Text> & <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  infoText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 10,
    width: '100%',
  },
  buttonActive: {
    backgroundColor: 'darkred',
  },
  buttonDisabled: {
    backgroundColor: '#D3D3D3',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
  linkText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default MobileNumberScreen;
