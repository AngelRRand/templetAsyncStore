import { StyleSheet, Text, View, StatusBar, Button, TextInput, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function App() {

  const [inputText, setInputText] = useState('');
  const [nombreStorage, setNombreStorage] = useState('');
  useEffect(() => {
    obtenerDatosStorage()
  }, []);

  const GuardarDatos = async () => {
    try {
      await AsyncStorage.setItem('nombre', inputText)
      setNombreStorage(inputText)
    } catch (error) {
      console.log(error)
    }
  }
  const obtenerDatosStorage = async () => {
    try {
      const nombre = await AsyncStorage.getItem('nombre')
      setNombreStorage(nombre)
    } catch (error) {
      console.log(error)
    }
  }
  const EliminarDatos = async () => {
    try {
      await AsyncStorage.removeItem('nombre')
      setNombreStorage('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>

      <StatusBar style="auto" />
      <View style={styles.container}>
        {
          nombreStorage.length === 0 ?
            <></> :
            <Text>{nombreStorage}</Text>
        }
        <TextInput
          placeholder='Escribe tu nombre'
          style={styles.input}
          onChangeText={text => setInputText(text)}
        />
        <Button
          title='guardar'
          color='#333'
          onPress={() => GuardarDatos()}
        />
        {
          nombreStorage ? (

            <TouchableHighlight
              onPress={() => EliminarDatos()}
              style={styles.btnEliminar}>
              <Text style={styles.textoEliminar}>Eliminar Nombre</Text>
            </TouchableHighlight>

          ) : null
        }
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
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
  },
  btnEliminar: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10,
  },
  textoEliminar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  }
});
