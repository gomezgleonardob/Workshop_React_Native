import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Alert,TextInput} from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      nombre:''
    }

  }


  render(){
    return (
      <View style={styles.container}>
        <Text>Workshop React Native: Leonardo Gomez</Text>
        <TextInput 
          placeholder="Ejemplo"        
          value={this.state.nombre}
          onchangeText={(txt)=>{this.setState({nombre:txt})}}
        />
        <Button title="Bienvenido"
           onPress={()=>{Alert.alert("HOLA"+this.state.nombre)}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
