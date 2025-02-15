import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Svg, { Path } from 'react-native-svg';

const Header = ({ onBackPress }) => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [items, setItems] = useState([
    { label: 'English', value: 'English' },
    { label: 'हिन्दी (Hindi)', value: 'Hindi' },
    { label: 'ગુજરાતી (Gujarati)', value: 'Gujarati' },
  ]);

  return (
    <View style={styles.header}>
      {/* Back Button */}
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Svg width="24" height="24" viewBox="0 0 24 24">
          <Path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </TouchableOpacity>

      {/* Language Dropdown */}
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={open}
          value={language}
          items={items}
          setOpen={setOpen}
          setValue={setLanguage}
          setItems={setItems}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownBox}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  backButton: {
    padding: 10,
  },
  dropdownContainer: {
    width: 150, // Ensures a good dropdown width
  },
  dropdown: {
    backgroundColor: '#F5F5F5',
    borderWidth: 0,
    borderRadius: 20,
  },
  dropdownBox: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default Header;
