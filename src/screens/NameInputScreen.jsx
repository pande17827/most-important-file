import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet } from 'react-native';

const NameInputScreen = () => {
    const [name, setName] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            {/* Progress Indicator */}
            <View style={styles.progressBar}>
                <View style={styles.progress} />
            </View>
            
            {/* Input Field */}
            <Text style={styles.label}>What's your name?</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
            />
            
            {/* Checkbox */}
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isChecked}
                    onValueChange={setIsChecked}
                />
                <Text style={styles.checkboxLabel}>Send WhatsApp updates</Text>
            </View>
            
            {/* Confirm Button */}
            <TouchableOpacity
                style={[styles.button, !name && styles.buttonDisabled]}
                disabled={!name}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            
            {/* Terms & Privacy */}
            <Text style={styles.footerText}>
                You agree to our <Text style={styles.link}>Terms of Service</Text> & <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    progressBar: {
        height: 5,
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 20,
    },
    progress: {
        width: '20%',
        height: '100%',
        backgroundColor: '#800000',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#800000',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxLabel: {
        marginLeft: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#800000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#CCC',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerText: {
        marginTop: 20,
        fontSize: 12,
        textAlign: 'center',
        color: '#666',
    },
    link: {
        color: '#800000',
        fontWeight: 'bold',
    },
});

export default NameInputScreen;
