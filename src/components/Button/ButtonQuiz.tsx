import { RelativePathString, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { FaStar } from "react-icons/fa";

type ButtonQuizProps = {
  text: string;
  href: RelativePathString;
  isNormal?: boolean; // True -> cores normais | False -> cores invertidas
  typeColor?: number,
};

export default function ButtonQuiz({ text, href, isNormal = true, typeColor = 0 }: ButtonQuizProps) {
  const typeColorButton = [
    { // Azul MUB3
      bgColor: "#81D2E2",
      starColor: "#231F20",
      borderColor: "#51b5c9",
    },
    { // Ciano
      bgColor: "#54e8dc",
      starColor: "#231F20",
      borderColor: "#25a197",
    },
    { // Roxo
      bgColor: "#8091ff",
      starColor: "#231F20",
      borderColor: "#5665c4",
    },
    // { // Adicione mais tipos de cores aqui...
    //   bgColor: "#",
    //   starColor: "#",
    //   borderColor: "#",
    // }
  ];

  let bgColor = typeColorButton[typeColor].bgColor;
  let starColor = typeColorButton[typeColor].starColor;
  let borderColor = typeColorButton[typeColor].borderColor;

  return (
    <View className="flex justify-center items-center my-4">
      <Pressable
        onPress={() => router.navigate(href)}
        style={{ 
          backgroundColor: !isNormal ? starColor : bgColor, 
          borderColor: !isNormal ? bgColor : borderColor }}
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