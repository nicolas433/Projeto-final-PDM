import React from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Secofdghfghnd Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const handleCadastroNavigation = () => {
    navigation.navigate("Cadastro");
  }

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <Button
        onPress={handleCadastroNavigation}
        title="Nova Atividade"
        color="#841584"
        style={styles.button}
        accessibilityLabel="Learn more about this purple button"
      />
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
  button: {
    height: 50,
    width: 50,
  }
});

export default App;
