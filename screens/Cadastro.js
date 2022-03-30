import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import DatePicker from 'react-native-datepicker';
import axios from 'axios';

const baseUrl = 'http://b9db-164-163-158-46.ngrok.io/';

const Cadastro = ({ navigation }) => {
    const [titulo, onChangeTitulo] = React.useState('');
    const [descricao, onChangeDescricao] = React.useState('');
    const [tarefa, onChangeTarefa] = React.useState('');
    const [data, onChangeData] = React.useState('')

    const handleCadastro = async () => {
        try {
            const url = `${baseUrl}api/create/atividade`;
            const response = await axios.post(url, {
                "titulo": titulo,
                "descricao": descricao,
                "tarefa": tarefa,
                "data": data,
            });

            if (navigation.canGoBack()) {
                navigation.goBack();
            }
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
            <DatePicker
            style={ styles.data }
            date={data}
            format="DD-MM-YYYY HH:mm:SS"
            minDate="29-03-2022"
            maxDate="31-08-2099"
            onDateChange={onChangeData}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeTarefa}
                value={tarefa}
                placeholder="Tarefa"
            />
            <Button
                onPress={handleCadastro}
                title="Cadastrar"
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
        width: 370,
    },
    confirmButton: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default Cadastro;