import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#017779" }} // for Android
                onPress={props.onDeleteItem}
                style={({ pressed }) => [ // for iOs
                    {
                        backgroundColor: pressed ? "#017779" : "#09abad",
                    },
                ]}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        backgroundColor: "#09abad",
        borderRadius: 5,
    },
    goalText: {
        padding: 8,
        color: "#ffffff",
    },
});
