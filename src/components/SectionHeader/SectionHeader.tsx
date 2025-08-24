import { Text, View } from "react-native";

type SectionHeaderProps = {
  title: string,
  subtitle: string,
  bgColor?: string, // Cor do background
  borderColor?: string // Cor da borda
};

export default function SectionHeader({ title, subtitle, bgColor = "#81D2E2", borderColor = "#51b5c9" }: SectionHeaderProps) {
  return (
    <View 
    style={{ backgroundColor: bgColor, borderColor: borderColor }}
    className="w-[calc(100dvw-48px)] rounded-2xl p-4 border-b-8 mb-4 shadow-2xl shadow-[#231F20]">
      <Text className="text-base font-medium color-gray-700">{title}</Text>
      <Text className="text-base font-bold text-black">{subtitle}</Text>
    </View>
  );
}