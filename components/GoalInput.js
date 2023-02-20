import { useState } from "react";

import { View, TextInput, StyleSheet, Modal, Image } from "react-native";

import Button from "./Button";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText.nativeEvent.text);
    }

    function addGoalHandler() {
        if (enteredGoalText.length === 0) {
            return;
        }
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your goal!"
                    onChange={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.toggleModal} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#102a61",
        padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderColor: "#a4dbf5",
        width: "100%",
        color: "#000000",
        backgroundColor: "#a4dbf5",
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
