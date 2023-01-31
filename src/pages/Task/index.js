import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";
import { database } from "../../config/firebaseconfig";
import {
    collection,
    onSnapshot,
    query,
    updateDoc,
    doc,
    deleteDoc,
} from "firebase/firestore";

export default function Task({ navigation }) {
    const [task, setTask] = useState([]);
    const db = collection(database, "Tasks");

    function favoriteTask(task) {
        const taskRef = doc(database, "Tasks", task.id);
        updateDoc(taskRef, { status: !task.status });
    }

    function deleteTask(task) {
        const taskRef = doc(database, "Tasks", task.id);
        deleteDoc(taskRef);
    }

    useEffect(() => {
        const values = query(db);
        onSnapshot(values, (snapshot) => {
            const list = [];
            snapshot.docs.map((doc) => {
                const newTask = { ...doc.data(), id: doc.id };
                list.push(newTask);
            });
            setTask(list);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.tasks}>
                            <Text
                                style={styles.descriptionTask}
                                onPress={() => {
                                    navigation.navigate("Details", {
                                        id: item.id,
                                        description: item.description,
                                    });
                                }}
                            >
                                {item.description}
                            </Text>
                            <TouchableOpacity
                                style={styles.deleteTask}
                                onPress={() => {
                                    favoriteTask(item);
                                }}
                            >
                                <FontAwesome
                                    name="star"
                                    size={23}
                                    color={
                                        item?.status ? "#00246B" : "lightgray"
                                    }
                                ></FontAwesome>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.deleteTask}
                                onPress={() => {
                                    deleteTask(item);
                                }}
                            >
                                <FontAwesome
                                    name="trash-o"
                                    size={23}
                                    color="lightgray"
                                ></FontAwesome>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("NewTask")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
