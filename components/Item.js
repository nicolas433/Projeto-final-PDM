import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Item = ({ atividade }) => (
    <View key={atividade._id} style={styles.item}>
        <Text style={styles.title}>{atividade.titulo}</Text>
        <Text style={styles.paragraph}>{atividade.descricao}</Text>
        <Text style={styles.paragraph}>{atividade.tarefa}</Text>
        <Text style={styles.paragraph}>{atividade.data}</Text>
    </View>
)

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        marginBottom: 15,
        marginTop: 15,
        marginHorizontal: 16,
        borderRadius: 5,
    },
    title: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        color: 'white'
    },
});

export default Item;