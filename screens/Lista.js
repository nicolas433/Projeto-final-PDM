import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const baseUrl = 'https://crudcrud.com/api/42c14c674eaf4554b49adfed73b25dea/';

import Item from '../components/Item';

const Lista = ({ navigation }) => {
  const [lista, setLista] = React.useState([]);

  const getAtividades = async () => {
    try {
      const url = `${baseUrl}atividade`;
      const response = await axios.get(url);
      setLista(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAtividades();
    console.log('chegou aqui')
  }, [])

  const handleCadastroNavigation = () => {
    navigation.navigate("Cadastro");
  }

  return (
    <SafeAreaView>
      <Button
        onPress={handleCadastroNavigation}
        title="Nova Atividade"
        color="#841584"
        style={styles.newCadastroButton}
      />
      <ScrollView >
        {
          lista.map((item) => (
            <Item atividade={item} />
          ))
        }
      </ScrollView>

    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  list: {
    height: 700,
  },
  newCadastroButton: {
    height: 50,
    width: 50,
  }
});

export default Lista;
