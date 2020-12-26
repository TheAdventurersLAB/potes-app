import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LandingPage = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Image
        style={style.imageLanding}
        source={require('../assets/images/landing.png')} />
      <Text style={style.textLanding}>O Potes ajuda a dividir suas finanças através de percentuais.</Text>
      <TouchableOpacity activeOpacity={0.75}>
        <Text
          style={style.textButtonLanding}
          onPress={() => navigation.navigate('Main', { initial: false })}>
          Vamos lá
            </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFF',
    height: '100%',
  },
  imageLanding: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
  textLanding: {
    paddingHorizontal: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14274E',
    textAlign: 'center'
  },
  textButtonLanding: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
    width: 200,
    backgroundColor: '#56A8F4',
    color: '#F1F6F9',
    borderRadius: 50,
    fontSize: 18
  },
  arrowRigth: {
    backgroundColor: '#fff'
  },
});

export default LandingPage;