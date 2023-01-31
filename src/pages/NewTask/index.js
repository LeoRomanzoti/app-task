import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { database } from "../../config/firebaseconfig";
import styles from "./style";
import { collection, addDoc } from "firebase/firestore";

export default function NewTask({ navigation }) {
    const [description, setDescription] = useState(null);
    const db = collection(database, "Tasks");

    function addTask() {
        const taskRef = addDoc(db, {
            description: description,
            status: false,
        });
        navigation.navigate("Task");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descreva a tarefa</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: lavar a louça"
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {
                    addTask();
                }}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
