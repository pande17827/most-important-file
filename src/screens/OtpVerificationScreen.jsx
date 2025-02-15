import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const OtpVerificationScreen = ({ navigation, route }) => {
  const phoneNumber = route?.params?.phoneNumber || '+91 XXXXX XXXXX';
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input if filled
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }

    // Move to previous input if deleted
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      Alert.alert('OTP Submitted', `Your OTP: ${enteredOtp}`);
      // Proceed with OTP verification logic here
    } else {
      Alert.alert('Invalid OTP', 'Please enter a 4-digit OTP.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Svg width="24" height="24" viewBox="0 0 24 24">
          <Path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </TouchableOpacity>

      {/* Change Number */}
      <TouchableOpacity onPress={() => navigation.navigate('MobileNumber')} style={styles.changeNumber}>
        <Text style={styles.changeNumberText}>Change number</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Enter authentication code</Text>
      <Text style={styles.subtitle}>
        Enter the 4-digit that we have sent via the phone number <Text style={styles.phoneText}>{phoneNumber}</Text>
      </Text>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.button, otp.join('').length === 4 ? styles.buttonActive : styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={otp.join('').length !== 4}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* Resend Code */}
      <TouchableOpacity onPress={() => Alert.alert('OTP Resent', 'A new OTP has been sent!')}>
        <Text style={styles.resendText}>Resend code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    padding: 10,
  },
  changeNumber: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  changeNumberText: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginVertical: 10,
  },
  phoneText: {
    fontWeight: 'bold',
    color: 'black',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 5,
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#D3D3D3',
  },
  buttonActive: {
    backgroundColor: 'darkred',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    marginTop: 20,
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default OtpVerificationScreen;
