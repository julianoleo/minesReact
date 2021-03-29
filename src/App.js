import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Field from './components/Field';
import params from './params';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Iniciando o Mines!</Text>
        <Text>
          Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    fontSize: 25
  }
})