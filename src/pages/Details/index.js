import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { database } from "../../config/firebaseconfig";
import { doc, updateDoc } from "firebase/firestore";

export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescriptionEdit] = useState(
        route.params.description
    );
    const idTask = route.params.id;

    function editTask(description, id) {
        const taskRef = doc(database, "Tasks", id);
        updateDoc(taskRef, { description: descriptionEdit });
        navigation.navigate("Task");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Edite sua tarefa</Text>
            <TextInput
                style={styles.input}
                placeholder="Tarefa a ser realizada"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {
                    editTask(descriptionEdit, idTask);
                }}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
