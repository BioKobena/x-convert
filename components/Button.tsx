import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
type Props = {
    label: string;
    onPress?: () => void;
};

export default function Button({ label, onPress }: Props) {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={onPress}
            >
                {/* <FontAwesome
                    name="money"
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                /> */}
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 45,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        backgroundColor: "#000",
        borderRadius: 5,
        marginVertical: 5,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonIcon: {
        paddingRight: 8,
        color: "white",
    },
    buttonLabel: {
        color: "white",
        fontSize: 16,
    },
});
