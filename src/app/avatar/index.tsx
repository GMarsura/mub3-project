import Header from "@/src/components/Header/Header";
import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Avatar() {
  return (
    <View className="bg-blue-300">
      <Header/>
      TELA 2
      Eu sou a tela de Avatar!
      <Button 
      title="Ir para o Info"
      onPress={() => router.push("./info")}
      />
    </View>
  );
}