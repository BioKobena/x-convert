import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import InputView from "@/components/InputView";
import Button from "@/components/Button";
export default function Index() {
  const [text, setText] = useState<string>("");

  const [result, setResult] = useState<number>(0);

  const handleChange = (text: string) => {
    setText(text);
  };

  const handleConvert = () => {
    console.log("handleConvert");
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerResult}>
        <Text style={styles.result}>$ {result}</Text>
      </View>

      <View style={styles.containerInput}>
        <InputView
          value={text}
          placeholder="Entrez votre devise"
        />
        <InputView
          value={text}
          placeholder="Entrez votre devise"
        />
        <InputView
          value={text}
          placeholder="Entrez votre devise"
        />
      </View>
      <View style={styles.button}>
        <Button label="Calculer" onPress={handleConvert} />
      </View>

      {true && result !== 0
        ? (
          <View style={styles.contentResult}>
          </View>
        )
        : (
          <>
          </>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerResult: {},
  result: {
    fontSize: 56,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 255)",
  },
  containerInput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  button: {},
  contentResult: {
    backgroundColor: "#e8e8e8",
    padding: 10,
    margin: 5,
    borderRadius: 3,
    width: 350,
    height: 100,
  },
});
