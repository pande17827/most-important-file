import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const EmailInputScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsValid(/^\S+@\S+\.\S+$/.test(text)); // Simple email validation
  };

  return (
    <View style={styles.container}>

      {/* HEADER: Back Button & Skip Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* PROGRESS BAR */}
      <View style={styles.progressBar} />

      {/* MAIN CONTENT: Email Input */}
      <View style={styles.mainContent}>
        <Text style={styles.label}>What's your email address?</Text>
        <TextInput
          style={[styles.input, !isValid && styles.inputError]}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!isValid && <Text style={styles.errorText}>Invalid email format</Text>}
      </View>

      {/* FOOTER: Terms & Privacy */}
      <View style={styles.footer}>
        <Text style={styles.termsText}>
          You agree to our <Text style={styles.linkText}>Terms of Service</Text> & <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  backButton: {
    fontSize: 24,
    color: "#600",
  },
  skipButton: {
    fontSize: 16,
    color: "#900",
  },
  progressBar: {
    height: 3,
    backgroundColor: "#900",
    width: "100%",
    marginTop: 10,
  },
  mainContent: {
    marginTop: 40,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#900",
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  termsText: {
    fontSize: 12,
    textAlign: "center",
    color: "#666",
  },
  linkText: {
    color: "#900",
    fontWeight: "bold",
  },
});

export default EmailInputScreen;


// App.jsx
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import EmailInputScreen from "./components/EmailInputScreen"; // Import the email screen

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="EmailInput" component={EmailInputScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
