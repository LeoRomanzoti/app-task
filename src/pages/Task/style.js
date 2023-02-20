import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 33,
        fontWeight: "bold",
    },
    buttonNewTask: {
        position: "absolute",
        width: 60,
        height: 60,
        bottom: 30,
        right: 30,
        backgroundColor: "#00246B",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    tasks: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    deleteTask: {
        justifyContent: "center",
        paddingRight: 8,
    },
    descriptionTask: {
        width: "82%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5cf",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 3,
        color: "#282b2db5",
    },
    scratch: {
        textDecorationLine: "line-through",
        width: "82%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5cf",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 3,
        color: "#282b2db5",
    },
});

export default styles;
