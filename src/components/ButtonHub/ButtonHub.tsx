import { RelativePathString, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FaStar } from "react-icons/fa";

type ButtonHubProps = {
  text: string;
  href: RelativePathString;
  sessionId: number; // ADICIONADO
  isNormal?: boolean; // True -> cores normais | False -> cores invertidas
  typeColor?: number;
};

export default function ButtonHub({ text, href, sessionId, isNormal = true, typeColor = 0 }: ButtonHubProps) {
  const typeColorButton = [
    { bgColor: "#81D2E2", starColor: "#231F20", borderColor: "#51b5c9" },
    { bgColor: "#54e8dc", starColor: "#231F20", borderColor: "#25a197" },
    { bgColor: "#8091ff", starColor: "#231F20", borderColor: "#5665c4" },
  ];

  const { bgColor, starColor, borderColor } = typeColorButton[typeColor];

  const handlePress = async () => {
    // salva sessionId e text no AsyncStorage
    await AsyncStorage.setItem(
      "session",sessionId
    );
    await AsyncStorage.setItem(
      "level",text
    );


    // navega para a tela
    router.navigate(href);
  };

  return (
    <View className="flex justify-center items-center my-4">
      <Pressable
        onPress={handlePress}
        style={{ backgroundColor: !isNormal ? starColor : bgColor, borderColor: !isNormal ? bgColor : borderColor }}
        className="w-[100px] h-[100px] flex justify-center items-center rounded-full px-6 py-3 border-b-8 border-4"
      >
        <FaStar size={32} style={{ color: !isNormal ? bgColor : starColor, transform: "translate(0px, -2px)" }} />
      </Pressable>

      <Text className="text-base font-medium text-center color-slate-50">
        Fase <span style={{ color: bgColor }}>{text}</span>
      </Text>
    </View>
  );
}
