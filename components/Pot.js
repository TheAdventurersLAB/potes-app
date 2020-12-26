import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Pot = (props) => {
    return (
        <View style={style.container}>
            <View style={style.potInfo} >
                <Text
                    style={style.potInfoLabel}> {props.description} |
                    <Text style={style.potInfoPercent}> {props.percentual}%</Text>
                </Text>
                <Text style={style.potInfoValue}>R$ {props.value}</Text>
            </View>
            <TouchableOpacity>
                <Image source={require('../assets/images/delete.png')} />
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 350,
        height: 60,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#F1F6F9',
        marginVertical: 5
    },
    potInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    },
    potInfoLabel: {
        color: '#14274E'
    },
    potInfoPercent: {
        color: '#9BA4B4'
    },
    potInfoValue: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageTrash: {
        width: 40,
        height: 40,
        backgroundColor: 'red'
    }
})

export default Pot;