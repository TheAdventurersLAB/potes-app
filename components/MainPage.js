import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import InputCalculator from './InputCalculator';

const MainPage = () => {
  return (
    <SafeAreaView>
      <ScrollView  contentContainerStyle={style.scrollview} >
        <View style={ style.header }>
          <Text style={ style.appName }>Meus Potes</Text>
          <Text style={ style.welcome }>Olá, <Text style={ style.user }>Jefferson</Text></Text>
        </View>
        <SafeAreaView>
        <View style={ style.cardContent } >
          <InputCalculator />
        </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  scrollview:{
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
  welcome:{
    fontSize: 18
  },
  user:{
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