import Header from "@/src/components/Header/Header";
import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Quiz() {
  return (
    <View className="bg-red-300">
      <Header />
      TELA 5
      Eu sou a tela de Quiz!
      <Button 
      title="Ir para o Resultado"
      onPress={() => router.push("./resultado")}
      />
    </View>
  );
}