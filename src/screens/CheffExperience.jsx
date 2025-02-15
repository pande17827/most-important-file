import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
// Make sure to install @expo/vector-icons if using Expo

const PersonalInfoScreen = () => {
  const navigation = useNavigation();
  const [selectedWorkplace, setSelectedWorkplace] = useState(null);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedFoodType, setSelectedFoodType] = useState(null);
  const [city, setCity] = useState("");

  const handleSelectWorkplace = (option) => {
    setSelectedWorkplace(option);
  };

  const handleSelectCuisine = (cuisine) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]
    );
  };

  const handleSelectFoodType = (type) => {
    setSelectedFoodType(type);
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Personal information</Text>

      {/* Progress Indicator */}
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>

      {/* Where have you worked before? */}
      <Text style={styles.label}>Where have you worked before as a cook?</Text>
      <View style={styles.optionsRow}>
        {["Cafe", "Restaurant", "Other"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.option, selectedWorkplace === option && styles.selectedOption]}
            onPress={() => handleSelectWorkplace(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* City Input */}
      <Text style={styles.label}>Which cities would you prefer to work in?</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.- Ahmedabad"
        value={city}
        onChangeText={setCity}
      />

      {/* Cuisines Selection */}
      <Text style={styles.label}>Choose the cuisines you cook</Text>
      <View style={styles.optionsGrid}>
        {["Gujrati", "North Indian", "South Indian", "Chinese", "Multi-Cuisine", "Other"].map((cuisine) => (
          <TouchableOpacity
            key={cuisine}
            style={[styles.option, selectedCuisines.includes(cuisine) && styles.selectedOption]}
            onPress={() => handleSelectCuisine(cuisine)}
          >
            <Text style={styles.optionText}>{cuisine}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Food Type Selection */}
      <Text style={styles.label}>Choose the cuisines you cook</Text>
      <View style={styles.optionsRow}>
        {["Veg", "Non veg", "Both"].map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.option, selectedFoodType === type && styles.selectedOption]}
            onPress={() => handleSelectFoodType(type)}
          >
            <Text style={styles.optionText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#ddd",
    borderRadius: 2,
    marginBottom: 20,
  },
  progressFill: {
    width: "30%", // Example progress
    height: "100%",
    backgroundColor: "#800000",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#800000",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  optionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  option: {
    borderWidth: 1,
    borderColor: "#800000",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "#800000",
  },
  optionText: {
    color: "#800000",
    fontWeight: "bold",
  },
  confirmButton: {
    backgroundColor: "#800000",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PersonalInfoScreen;


// App.jsx
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import PersonalInfoScreen from "./components/PersonalInfoScreen"; // Import the screen

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
