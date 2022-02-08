import * as React from 'react'
import {Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar} from 'react-native'
import MeuEstilo from './MeuEstilo'

export default class App extends React.Component{
  state={
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0
  }

  atualizaValor1=(number)=>{
    this.setState({valor1:number})
  }

  atualizaValor2=(number)=>{
    this.setState({valor2:number})
  }

  soma(){
    this.state.resultado=parseFloat(this.state.valor1) + 
    parseFloat(this.state.valor2)
    alert (this.state.resultado)
  }

  render(){
    return(
      <View style={MeuEstilo.container}>
        <StatusBar backgroundColor="black"/>
        <TextInput style={MeuEstilo.input}
         underlineColorAndroid="transparent"
         placeholder="Digite o Valor 1"
         autoCapitalize="none"
         onChangeText={this.atualizaValor1}
         keyboardType="numeric"/>

        <StatusBar backgroundColor="black"/>
        <TextInput style={MeuEstilo.input}
         underlineColorAndroid="transparent"
         placeholder="Digite o Valor 2"
         autoCapitalize="none"
         onChangeText={this.atualizaValor2}
         keyboardType="numeric"/>
         <TouchableOpacity style={MeuEstilo.submitButton}
         onPress={()=>this.soma(this.state.valor1, this.state.valor2, this.state.resultado)}>
           <Text style={MeuEstilo.submitButtonText}>Somar</Text>
         </TouchableOpacity>
      </View>
    )
  }
}