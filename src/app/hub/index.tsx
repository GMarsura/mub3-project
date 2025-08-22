import Header from "@/src/components/Header/Header";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { FaHome, FaInfoCircle  } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import ButtonQuiz from "@/src/components/Button/ButtonQuiz";

export default function Hub() {
  return (
    <View className="flex justify-between flex-col h-screen bg-[#231F20]">
      <Header />

      <View className="flex justify-between items-center flex-col px-6">
        <View className="w-full rounded-2xl p-4 bg-[#81D2E2] border-b-8 border-[#51b5c9] mb-6">
          <Text className="text-base font-medium color-gray-700">Seção 1, Level 1</Text>
          <Text className="text-base font-bold text-black">Conceitos Importantes</Text>
        </View>
        
        <ButtonQuiz text="Ir pro Quiz" href="./quiz" />
      </View>

      <View className="flex flex-row justify-around items-center mx-6 p-6 bg-[#333333] rounded-t-2xl">
        <Pressable onPress={() => router.navigate("./")}>
          <FaHome size={24} color="#fff" />
        </Pressable>

        <View className="w-[2px] h-full bg-[#555555]"></View>

        <Pressable onPress={() => router.navigate("./avatar")}>
          <FaUser  size={24} color="#fff" />
        </Pressable>

        <View className="w-[2px] h-full bg-[#555555]"></View>

        <Pressable onPress={() => router.navigate("./info")}>
          <FaInfoCircle  size={24} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}