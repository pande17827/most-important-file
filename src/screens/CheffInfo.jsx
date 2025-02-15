import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Platform 
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

const PersonalInfoScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState(""); // String format
  const [degree, setDegree] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Handle Date Selection
  const onChangeDate = (event, selected) => {
    setShowPicker(false);
    if (selected) {
      setSelectedDate(selected);
      setDob(selected.toLocaleDateString()); // Convert date to string
    }
  };

  const handleConfirm = () => {
    console.log({ username, gender, dob, degree });
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.header}>Personal Information</Text>

      {/* Progress Indicator */}
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>

      {/* Username Field */}
      <Text style={styles.label}>Username</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your username" 
        value={username} 
        onChangeText={setUsername} 
      />

      {/* Gender Selection */}
      <Text style={styles.label}>Gender</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setGender("Male")} style={styles.radioButton}>
          <Text style={gender === "Male" ? styles.radioSelected : styles.radioUnselected}>○</Text>
          <Text> Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender("Female")} style={styles.radioButton}>
          <Text style={gender === "Female" ? styles.radioSelected : styles.radioUnselected}>○</Text>
          <Text> Female</Text>
        </TouchableOpacity>
      </View>

      {/* Date of Birth */}
      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity style={styles.input} onPress={() => setShowPicker(true)}>
        <Text>{dob || "Select Date"}</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker 
          value={selectedDate} 
          mode="date" 
          display={Platform.OS === "ios" ? "spinner" : "default"} 
          onChange={onChangeDate} 
        />
      )}

      {/* Degree */}
      <Text style={styles.label}>Do you have any degree?</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter degree..." 
        value={degree} 
        onChangeText={setDegree} 
      />

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  backButton: { position: "absolute", top: 20, left: 10, padding: 10 },
  backText: { fontSize: 20, color: "#A00000" },
  header: { fontSize: 20, fontWeight: "bold", marginTop: 50, marginBottom: 10 },
  progressBar: { 
    height: 5, backgroundColor: "#E0E0E0", borderRadius: 3, overflow: "hidden", marginBottom: 20 
  },
  progressFill: { width: "30%", height: "100%", backgroundColor: "#A00000" },
  label: { fontSize: 14, fontWeight: "600", marginTop: 10 },
  input: { 
    borderWidth: 1, borderColor: "#A00000", padding: 10, borderRadius: 5, marginTop: 5 
  },
  radioContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  radioButton: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  radioUnselected: { fontSize: 30, color: "#A00000" },
  radioSelected: { fontSize: 30, color: "#A00000", fontWeight: "bold" },
  confirmButton: { 
    backgroundColor: "#A00000", padding: 15, alignItems: "center", borderRadius: 10, marginTop: 350
  },
  confirmText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default PersonalInfoScreen;


// App.jsx
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import PersonalInfoScreen from "./components/PersonalInfoScreen";

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


