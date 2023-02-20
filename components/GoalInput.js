import { useState } from "react";

import { View, TextInput, Button, StyleSheet } from "react-native";

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
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your goal!"
                onChange={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        borderColor: "#ccc",
        width: "70%",
    },
});