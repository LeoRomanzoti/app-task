import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    label: {
        width: "90%",
        marginTop: 20,
        marginLeft: 15,
        fontSize: 16,
        color: "#00246B",
    },

    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#00246B",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f5f5f5cf",
        borderRadius: 8,
    },

    buttonNewTask: {
        display: "flex",
        position: "absolute",
        width: 250,
        height: 50,
        bottom: 40,
        backgroundColor: "#00246B",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },

    iconButton: {
        color: "#ffffff",
        fontSize: 17,
        fontWeight: "bold",
    },
});

export default styles;
