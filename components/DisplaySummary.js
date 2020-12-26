import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplaySummary = () => {
    return (
        <View style={style.container}>
            <Text style={ style.white } >SALDO</Text>
            <Text style={ style.balance }>R$</Text>
            <Text style={ style.white } >0%</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems:'center',
        width: 350,
        marginTop: 20,
        marginBottom: 20
    },
    balance: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F1F6F9',
        marginVertical: 5
    },
    white: {
        color: '#F1F6F9'
    }
})

export default DisplaySummary;