import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

const stylePagination = StyleSheet.create({
  circle: {
    width: 24,
    height: 24,
    backgroundColor: "#8D8D8D",
    borderRadius: 999
  }
});

type PaginationProps = {
  active: number,
};

export default function Pagination({ active }: PaginationProps) {
  return (
    <View className="w-full flex flex-row justify-center items-center gap-2 my-4">
      <Pressable onPress={() => router.navigate("/")}>
        <View style={stylePagination.circle} className={active === 1 ? "bg-white" : ""}></View>
      </Pressable>
      <Pressable onPress={() => router.navigate("/avatar")}>
        <View style={stylePagination.circle} className={active === 2 ? "bg-white" : ""}></View>
      </Pressable>
      <Pressable onPress={() => router.navigate("/info")}>
        <View style={stylePagination.circle} className={active === 3 ? "bg-white" : ""}></View>
      </Pressable>
    </View>
  );
}