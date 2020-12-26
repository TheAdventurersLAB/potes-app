import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DisplaySummary from './DisplaySummary';
import Pot from './Pot';

const InputCalculator = (props) => {
    const [inputValue, setinputValue] = useState(0);
    const renderItem = ({ item }) => (
        <Pot
            description={item.description}
            value={item.value}
            percentual={item.percentual} />
    );
    return (
        <View style={style.container}>
            <Text style={style.labelInput}>Informe o valor:</Text>
            <View style={style.InputButton}>
                <TextInput
                    style={style.input}
                    keyboardType="decimal-pad"
                    onChangeText={value => setinputValue(value)}
                    value={inputValue}
                />
                <TouchableOpacity onPress={() => props.onHandleCalculate(inputValue)}>
                    <Text style={style.buttonCalculator}>Calcular</Text>
                </TouchableOpacity>
            </View>
            <DisplaySummary />
            <FlatList
                data={props.pots}
                renderItem={renderItem}
                keyExtractor={item => item.description}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 30,
    },
    labelInput: {
        color: '#F1F6F9',
        marginVertical: 5
    },
    input: {
        backgroundColor: '#F1F6F9',
        paddingHorizontal: 15,
        height: 40,
        width: 220,
        borderRadius: 5,
    },
    buttonCalculator: {
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        width: 100,
        backgroundColor: '#56A8F4',
        color: '#F1F6F9',
        borderRadius: 5,
        fontSize: 14
    },
    InputButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default InputCalculator;