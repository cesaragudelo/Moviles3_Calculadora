import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Banner from './components/Banner';
export default function App() {
  //Definir lñas variables de estado del componente
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');
  return (
    <View style={styles.container}>
      <View style={[styles.container,{flex:2,backgroundColor:'orange'}]}>
        <Banner name="calculadora" tittle="calcilator"></Banner>
      </View>
      <View style={[styles.container,{flex:5,backgroundColor:'yellowgreen'}]}>
        <Text style={{fontWeight:'bold'}}>Calculadora Basica</Text>

        <Text>Valor 1</Text>
        <TextInput
          placeholder='Ingrese valor 1'
          style={styles.inputs}
          onChangeText={valor1 => setValor1(valor1)}
          value={valor1}
        />
        <Text>Valor 2</Text>
        <TextInput
          placeholder='Ingrese valor 2'
          style={styles.inputs}
          onChangeText={valor2 => setValor2(valor2)}
          value={valor2}
        />
        <Text>Resultado</Text>
        <TextInput
          style={styles.inputs}
          value={resultado}
        />
      </View>

      <View style={[styles.container,{flex:1,backgroundColor:'gray'}]}>
        <Text >Pie</Text>
      </View>
      
    </View>
  );
}

// function Banner(props){
//   return(
//     <Image source={require(`./assets/images/${props.name}.png`)} style={{width:'100%',
//         height:'100%',resizeMode:'stretch'}}></Image>
//   )
// }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
 inputs:{
  color:'black', 
  borderRadius:10, padding:10,
  borderWidth:2,
  borderColor:'black',
  textAlign:'center'
 }
});
