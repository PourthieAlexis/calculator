import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Input = ({ input, result }) => (
    <View style={styles.inputContainer}>
        <Text style={styles.input}>{result}</Text>
        <Text style={styles.input}>{input}</Text>
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
        flexDirection: 'row',
    },
    operation: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    input: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'right',
    },
});

export default Input;
