import { RelativePathString, router } from "expo-router";
import { Pressable, Text } from "react-native";

type ButtonProps = {
  text: string,
  href: RelativePathString,
};

export default function Button({ text, href }: ButtonProps) {
  return (
    <Pressable 
    onPress={() => router.navigate(href)}
    className="w-full rounded-2xl px-6 py-3 bg-[#81D2E2]"
    >
      <Text className="text-center text-base font-semibold ">{text}</Text>
    </Pressable>
  );
}