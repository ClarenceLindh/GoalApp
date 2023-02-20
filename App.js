import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);

    function addGoalHandler(enteredGoalText) {
        setGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    }

    function removeGoalHandler(goalId) {
        console.log("delete goal: " + goalId);
        setGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== goalId);
        });
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalList}>
                <FlatList
                    data={goals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                onDeleteItem={removeGoalHandler.bind(
                                    this,
                                    itemData.item.id
                                )}
                            />
                        );
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
    goalList: {
        flex: 5,
        paddingTop: 16,
    },
});
