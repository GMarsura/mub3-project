import { Link } from "expo-router";
import { Text, View } from "react-native";
import Header from "../components/Header/Header";

export default function Index() {
  return (
    <View className="bg-[#231F20]">
      <Header></Header>

      <Text>Eu sou o Index</Text>

      <Link href="/quiz/page">
        <Text>Ir para o Quiz!</Text>
      </Link>

      <Link href="/resultado/page">
        <Text>Ir para o Resultado!</Text>
      </Link>
    </View>
  );
}
