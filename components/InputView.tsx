import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

type Props = {
    placeholder: string;
    value: string;
    onChangeText?: () => void;
};
const InputView = ({ placeholder, value, onChangeText }: Props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                value={value}
                style={styles.input}
                onChangeText={onChangeText}
            />
        </View>
    );
};

export default InputView;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 2,
        margin: 5,
    },
    input: {
        height: 45,
        borderColor: "transparent",
        backgroundColor: "#e4e9ed",
        borderWidth: 1,
        width: 330,
        borderRadius: 4,
        padding: 5,
        fontSize: 15,
        fontWeight: "400",
        color: "#000000",
    },
});
