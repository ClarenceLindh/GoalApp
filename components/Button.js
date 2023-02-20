import { StyleSheet, Pressable, Text, View } from "react-native";

function Button(props) {
    return (
        <View style={styles.button}>
            <Pressable
                android_ripple={{ color: "#54cfd1" }} // for Android
                onPress={props.onPress}
                style={({ pressed }) => [
                    // for iOs
                    {
                        backgroundColor: pressed
                            ? styles.buttonPressed
                            : styles.buttonNotPressed,
                    },
                ]}
            >
                <Text style={styles.buttonText}>{props.title}</Text>
            </Pressable>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#1b96cf",
        borderRadius: 5,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 16,
        padding: 8,
        color: "#ffffff",
    },
    buttonPressed: {
        backgroundColor: "#54cfd1",
    },
    buttonNotPressed: {
        backgroundColor: "#1b96cf",
    },
});
