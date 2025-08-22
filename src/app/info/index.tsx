import Header from "@/src/components/Header/Header";
import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Info() {
  return (
    <View className="bg-violet-300">
      <Header />
      TELA 3
      Eu sou a tela de Info!
      <Button 
      title="Ir para o Hub"
      onPress={() => router.push("./hub")}
      />
    </View>
  );
}