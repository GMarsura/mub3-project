import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Resultado() {
  return (
    <View>
      Eu sou a tela de Resultado!

      <Link href="/">
        <Text>Ir para o home!</Text>
      </Link>
    </View>
  );
}