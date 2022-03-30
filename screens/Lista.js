import React, { useEffect, useCallback } from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";

const baseUrl = 'http://b9db-164-163-158-46.ngrok.io/';

import Item from '../components/Item';

const Lista = ({ navigation }) => {
  const [lista, setLista] = React.useState([]);
  const isFocused = useIsFocused();

  const getAtividades = useCallback(
    async () => {
      try {
        const url = `${baseUrl}api/list/atividade`;
        const response = await axios.get(url);
        setLista(response.data.response);
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

  const handleVideoNavigation = () => {
    navigation.navigate("Video");
  }

  return (
    <>
      <SafeAreaView>
        <Button
          onPress={handleVideoNavigation}
          title="Mostrar Vídeo"
          color="#841584"
          style={styles.showVideoButton}
        />

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
  title: {
    fontSize: 32,
  },
  list: {
    height: 700,
  },
  newCadastroButton: {
    height: 50,
    width: 50,
    marginBottom: 20,
  },
  showVideoButton: {
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
