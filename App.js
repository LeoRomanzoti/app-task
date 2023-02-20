import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Task from "./src/pages/Task";
import NewTask from "./src/pages/NewTask";
import Details from "./src/pages/Details";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Task"
                screenOptions={{
                    headerStyle: { backgroundColor: "#8AB6F9" },
                    headerTintColor: "#00246B",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 23,
                    },
                    cardStyle: {
                        backgroundColor: "#fff",
                    },
                }}
            >
                <Stack.Screen
                    name="Task"
                    component={Task}
                    options={{
                        headerTitle: "Tarefas",
                    }}
                />
                <Stack.Screen
                    name="NewTask"
                    component={NewTask}
                    options={{
                        headerTitle: "Nova Tarefa",
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerTitle: "Editar Tarefa",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
