import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import InputView from "@/components/InputView";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
export default function Index() {
  const [euro, setEuro] = useState<string>("");
  const [xof, setXof] = useState<string>("");

  const [result, setResult] = useState<number | undefined>(0);

  const handleChangeEuro = (input: string) => {
    setResult(parseInt(input) * 655.96);
    setEuro(input);
  };

  const handleChangeXof = (input: string) => {
    setResult(parseInt(input) / 655.96);
    setXof(input);
  };

  const pressEuro = () => {
    setResult(result ? result + 1 : result);
    console.log("pressEuro");
  };

  const handleRestart = () => {
    setEuro("");
    setXof("");
    setResult(0);
  };
  const handleConvert = () => {
    console.log("handleConvert");
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerResult}>
        <Text style={styles.result}>€ {result ? result : 0}</Text>
      </View>

      <View style={styles.containerInput}>
        <InputView
          value={euro}
          onChangeText={(euro) => handleChangeEuro(euro)}
          placeholder="Entrez l'argent en Euro"
        />
        <InputView
          value={xof}
          onChangeText={(xof) => handleChangeXof(xof)}
          placeholder="Entrez votre monnaie en XOF"
        />
      </View>
      <View style={styles.chooseDevise}>
        <IconButton
          backgroundColor="#ececec"
          icon="arrow-downward"
          onPress={pressEuro}
        />
        <IconButton
          backgroundColor="#000"
          onPress={handleRestart}
          icon="restore"
          color="#fff"
        />
        <IconButton
          backgroundColor="#ececec"
          icon="arrow-upward"
        />
      </View>
      <View style={styles.button}>
        <Button label="Calculer" onPress={handleConvert} />
      </View>

      {true && result !== 0
        ? (
          <View style={styles.contentResult}>
            <Text style={styles.resultat}>
              Le résultat est : {result ? result : 0} XOF
            </Text>
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
    backgroundColor: "#fff",
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
    width: 370,
    height: 80,
    flexWrap: "wrap",
  },
  chooseDevise: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  resultat: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6c7a89",
    marginTop: 10,
    marginBottom: 10,
    flexWrap: "wrap",
  },
});
