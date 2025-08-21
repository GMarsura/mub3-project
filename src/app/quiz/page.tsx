import { Text } from "@react-navigation/elements";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Quiz() {
  return (
    <View>
      Eu sou a tela de Quiz!

      <Link href="/">
        <Text>Ir para o home!</Text>
      </Link>
    </View>
  );
}