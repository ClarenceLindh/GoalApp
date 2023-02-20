import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Button from "./components/Button";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    function addGoalHandler(enteredGoalText) {
        setGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        toggleModal();
    }

    function removeGoalHandler(goalId) {
        console.log("delete goal: " + goalId);
        setGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== goalId);
        });
    }

    function toggleModal() {
        setModalVisible(!modalVisible);
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    onPress={toggleModal}
                />
                <GoalInput
                    onAddGoal={addGoalHandler}
                    visible={modalVisible}
                    toggleModal={toggleModal}
                />
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
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: "#102a61",
        height: "100%",
        padding: 50,
        paddingHorizontal: 16,
    },
    goalList: {
        paddingTop: 20,
    },
});
