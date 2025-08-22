import { router } from "expo-router";
import { Image, Pressable, View } from "react-native";

import { FaArrowLeft } from "react-icons/fa";

export default function Header() {
  return (
    <View className="w-screen flex flex-row justify-between items-center px-6 py-2 bg-[#231F20]">
      <Pressable onPress={() => router.back()}>
        <FaArrowLeft size={24} color="#81D2E2" />
      </Pressable>

      <Pressable onPress={() => router.push("/")}>
        <Image
        style={{ width: 120, height: 60 }}
        resizeMode="contain"
        source={require("../../../assets/images/mub3-logo.png")} 
        />
      </Pressable>
    </View>
  );
}