import React, { useEffect, useCallback } from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";

const baseUrl = 'https://crudcrud.com/api/42c14c674eaf4554b49adfed73b25dea/';

import Item from '../components/Item';

const Lista = ({ navigation }) => {
  const [lista, setLista] = React.useState([]);
  const isFocused = useIsFocused();

  const getAtividades = useCallback(
    async () => {
      try {
        console.log('chegou aqui')
        const url = `${baseUrl}atividade`;
        const response = await axios.get(url);
        setLista(response.data);
      } catch (error) {
        console.log(error);
      }
    }, []
  )

  useEffect(() => {
    if (isFocused) {
      getAtividades();
    }
  }, [isFocused])

  const handleCadastroNavigation = () => {
    navigation.navigate("Cadastro");
  }

  return (
    <>
      <SafeAreaView>
        <Button
          onPress={handleCadastroNavigation}
          title="Nova Atividade"
          color="#841584"
          style={styles.newCadastroButton}
        />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {
            lista.map((item) => (
              <Item atividade={item} />
            ))
          }
          <View style={styles.whiteSpace}>
          </View>
        </ScrollView>
      </ SafeAreaView>
    </>

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
  },
  whiteSpace: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginBottom: 30,
    marginHorizontal: 16,
  },
});

export default Lista;
