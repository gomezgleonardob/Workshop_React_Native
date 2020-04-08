import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Alert,TextInput} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      val1:0,
      val2:0,
  }

  }
  Sum=()=>
  {
     var N1=parseInt(this.state.val1);
     var N2=parseInt(this.state.val2);
     var R=N1+N2;
     parseInt(R)
     alert("Suma "+ R)

  }


  render(){
    return (
      <View style={styles.container}>
        <Text>Calculadora</Text>
        <TextInput 
            style={styles.box}
            placeholder="Ingrese Número"
            onChangeText={val1=>{this.setState({val1})}}
        />
        <TextInput   
            style={styles.box}
            placeholder="Ingrese Número"
            onChangeText={val2=>{this.setState({val2})}}
        />
        <Button title="Sumar"
        onPress={
              this.Sum
            }
        />
        <Text>
            {this.state.res}
        </Text>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  box:{
    fontSize: 20,
    fontWeight: "bold"
  },
});
