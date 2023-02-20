import React, { useState } from "react";
import {
    Button,
    StyleSheet,
    TextInput,
    View,
    FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState("");
    const [goals, setGoals] = useState([]);

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText.nativeEvent.text);
    }

    function addGoalHandler() {
        setGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            {text: enteredGoal, id: Math.random().toString()},
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your goal!"
                    onChange={goalInputHandler}
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalList}>
                <FlatList
                    data={goals}
                    renderItem={(itemData) => {
                        return <GoalItem text={itemData.item.text}/>;
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        height: "100%",
        padding: 50,
        paddingHorizontal: 16,
    },
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
    goalList: {
        flex: 5,
        paddingTop: 16,
    },
});
