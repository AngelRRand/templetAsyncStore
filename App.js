import { StyleSheet, Text, View, StatusBar, Button, TextInput, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <>

      <StatusBar style="auto" />
      <View style={styles.container}>
        <TextInput
          placeholder='Escribe tu nombre'
          style={styles.input}
        />
        <Button
          title='guardar'
          color='#333'
        />
        <TouchableHighlight style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}>Eliminar Nombre</Text>
        </TouchableHighlight>
      </View>

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderColor:'#666',
    borderBottomWidth:1,
    width:300,
    height:40,
  },
  btnEliminar:{
    backgroundColor:'red',
    marginTop:20,
    padding:10,
  },
  textoEliminar:{
    color: 'white',
    fontWeight:'bold',
    textAlign:'center',
    textTransform:'uppercase',
    width: 300,
  }
});
