import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from './Input';
import Button from './Button';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');

    const handleNumberClick = (number) => {
        setInput(prevInput => prevInput + number);
    };

    const handleOperationClick = (op) => {
        if (input !== '') {
            setOperation(op);
            setResult(input + op);
            setInput('');
        }
        if (result !== '') {
            setOperation(op);
            setResult(result + op);
        }
    };

    const handleEqualClick = () => {
        if (input !== '') {
            let finalResult;
            switch (operation) {
                case '+':
                    finalResult = parseFloat(result) + parseFloat(input);
                    break;
                case '-':
                    finalResult = parseFloat(result) - parseFloat(input);
                    break;
                case '*':
                    finalResult = parseFloat(result) * parseFloat(input);
                    break;
                case '/':
                    if (parseFloat(input) !== 0) {
                        finalResult = parseFloat(result) / parseFloat(input);
                    } else {
                        finalResult = 'Erreur: Division par zéro';
                    }
                    break;
                default:
                    return;
            }
            setResult(finalResult.toString());
            setInput('');
            setOperation('');
        }
    };

    const handleClearClick = () => {
        setInput('');
        setOperation('');
        setResult('');
    };

    return (
        <View style={styles.calculator}>
            <Input operation={operation} input={input} result={result} />
            <View style={styles.buttonsContainer}>
                <Button title="1" onPress={() => handleNumberClick('1')} />
                <Button title="2" onPress={() => handleNumberClick('2')} />
                <Button title="3" onPress={() => handleNumberClick('3')} />
                <Button title="+" onPress={() => handleOperationClick('+')} buttonStyle={styles.operationButton} />
                <Button title="4" onPress={() => handleNumberClick('4')} />
                <Button title="5" onPress={() => handleNumberClick('5')} />
                <Button title="6" onPress={() => handleNumberClick('6')} />
                <Button title="-" onPress={() => handleOperationClick('-')} buttonStyle={styles.operationButton} />
                <Button title="7" onPress={() => handleNumberClick('7')} />
                <Button title="8" onPress={() => handleNumberClick('8')} />
                <Button title="9" onPress={() => handleNumberClick('9')} />
                <Button title="*" onPress={() => handleOperationClick('*')} buttonStyle={styles.operationButton} />
                <Button title="0" onPress={() => handleNumberClick('0')} buttonStyle={styles.zeroButton} />
                <Button title="=" onPress={handleEqualClick} buttonStyle={styles.operationButton} />
                <Button title="/" onPress={() => handleOperationClick('/')} buttonStyle={styles.operationButton} />
                <Button title="C" onPress={handleClearClick} buttonStyle={styles.clearButton} textStyle={styles.clearButtonText} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    calculator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    input: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        margin: 5,
        borderRadius: 10,
    },
    zeroButton: {
        width: 165,
    },
    operationButton: {
        backgroundColor: '#ff9800',
    },
    buttonText: {
        fontSize: 30,
    },
    clearButton: {
        backgroundColor: '#f44336',
    },
    clearButtonText: {
        color: '#fff',
    },
});

export default Calculator;
