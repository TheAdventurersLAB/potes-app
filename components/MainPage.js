import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import InputCalculator from './InputCalculator';
import ConstantPots from '../constants/ConstantPots';
import Pot from './Pot';

const MainPage = () => {
  // Calcule
  const [pots, setPots] = useState([]);

  function calculate(inputValue = 0) {
    let array = ConstantPots.map((item) => {
      item.value = (item.percentual * Number.parseFloat(+inputValue)) / 100;
      return item;
    });
    setPots(array);
  }

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={style.scrollview} >
        <View style={style.header}>
          <Text style={style.appName}>Meus Potes</Text>
          <Text style={style.welcome}>Olá, <Text style={style.user}>Jefferson</Text></Text>
        </View>
        <View style={style.cardContent} >
          <InputCalculator onHandleCalculate={calculate} pots={pots}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  scrollview: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#F1F6F9',
    minHeight: 660,
    alignItems: 'stretch'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  welcome: {
    fontSize: 18
  },
  user: {
    fontWeight: 'bold'
  },
  cardContent: {
    display: 'flex',
    backgroundColor: '#14274E',
    minHeight: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});

export default MainPage;