import Header from "@/src/components/Header/Header";
import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Hub() {
  return (
    <View className="bg-orange-400">
      <Header />
      TELA 4
      Eu sou a tela de Hub!
      <Button 
      title="Ir para o Quiz"
      onPress={() => router.push("./quiz")}
      />
    </View>
  );
}