import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    icon?: keyof typeof MaterialIcons.glyphMap;
    label?: string;
    onPress?: () => void;
    backgroundColor?: string;
    color?: string;
};

export default function IconButton(
    { onPress, label, icon, backgroundColor, color }: Props,
) {
    return (
        <Pressable
            style={[styles.iconButton, {
                backgroundColor: backgroundColor,
            }]}
            onPress={(text) => onPress}
        >
            {icon &&
                (
                    <MaterialIcons
                        name={icon}
                        size={20}
                        color={color ? color : "#000"}
                    />
                )}

            {label && (
                <Text
                    style={[styles.iconButtonLabel]}
                >
                    {label}
                </Text>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    iconButton: {
        alignItems: "center",
        width: 55,
        borderRadius: 35,
        height: 35,
        justifyContent: "center",
        marginHorizontal: 5,
        marginVertical: 5,
        padding: 5,
    },
    iconButtonLabel: {
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
