import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, VirtualizedList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DisplaySummary from './DisplaySummary';
import Pot from './Pot';
import ConstantsPot from '../constants/Pots';

const IPot = {
    nome: '',
    value: 0,
    percent: 0,
};

const InputCalculator = () => {
    const [valueTotal, setValueTotal] = useState(0);
    const [pots, setPots] = useState([]);

    function calculate() {
        let array = ConstantsPot.map((item) => {
            item.value = (item.percentual * Number.parseFloat(+valueTotal)) / 100;
            return item;
        }).join('');
        setPots(array);
        console.log(pots);
    }

    return (
        <View style={style.container}>
            <Text style={style.labelInput}>Informe o valor:</Text>
            <View style={style.InputButton}>
                <TextInput
                    style={style.input}
                    keyboardType="decimal-pad"
                    onChangeText={value => setValueTotal(+value)}
                    value={valueTotal}
                />
                <TouchableOpacity onPress={() => { calculate() }}>
                    <Text style={style.buttonCalculator}>Calcular</Text>
                </TouchableOpacity>
            </View>
            <DisplaySummary />
            
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