import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import DatePicker from 'react-native-date-picker'

const Cadastro = () => {
    const [titulo, onChangeTitulo] = React.useState('');
    const [descricao, onChangeDescricao] = React.useState('');
    const [tarefa, onChangeTarefa] = React.useState('');
    const [date, onChangeDate] = React.useState(new Date())


    // (título, descrição e data da tarefa)

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
                onChangeText={onChangeDate}
                value={date}
                placeholder="Data"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeTarefa}
                value={tarefa}
                placeholder="Tarefa"
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
    date: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default Cadastro;