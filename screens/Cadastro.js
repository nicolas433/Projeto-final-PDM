import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import axios from 'axios';

const baseUrl = 'https://crudcrud.com/api/42c14c674eaf4554b49adfed73b25dea/';

const Cadastro = ({ navigation }) => {
    const [titulo, onChangeTitulo] = React.useState('');
    const [descricao, onChangeDescricao] = React.useState('');
    const [tarefa, onChangeTarefa] = React.useState('');
    const [data, onChangeData] = React.useState('')

    const handleCadastro = async () => {
        try {
            const url = `${baseUrl}atividade`;
            const response = await axios.post(url, {
                "titulo": titulo,
                "descricao": descricao,
                "tarefa": tarefa,
                "data": data,
            });
            navigation.navigate("Lista");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeTitulo}
                value={titulo}
                placeholder="Titulo"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeDescricao}
                value={descricao}
                placeholder="Descrição"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeData}
                value={data}
                placeholder="Data"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeTarefa}
                value={tarefa}
                placeholder="Tarefa"
            />
            <Button
                onPress={handleCadastro}
                title="Nova Atividade"
                color="#841584"
                style={styles.confirmButton}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    data: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    confirmButton: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default Cadastro;