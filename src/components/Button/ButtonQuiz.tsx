import { RelativePathString, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { FaStar } from "react-icons/fa";

type ButtonQuizProps = {
  text: string,
  href: RelativePathString,
};

export default function ButtonQuiz({ text, href }: ButtonQuizProps) {
  return (
    <View>
        <Pressable 
        onPress={() => router.navigate(href)}
        className="w-[100px] h-[100px] flex justify-center items-center rounded-full px-6 py-3  bg-[#81D2E2] border-b-8 border-[#51b5c9]"
        >
        <FaStar size={32} color="#231F20" />
        </Pressable>
    </View>
  );
}