import Header from "@/src/components/Header/Header";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

import { FaHome, FaInfoCircle  } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import ButtonQuiz from "@/src/components/Button/ButtonQuiz";
import SectionHeader from "@/src/components/SectionHeader/SectionHeader";

export default function Hub() {
  return (
    <View className="flex flex-col h-screen bg-[#231F20]">
      <Header />

      <View className="w-full h-[calc(100%-148px)] flex justify-between items-center flex-col px-6">

        <ScrollView className="w-full flex items-center" stickyHeaderIndices={[0, 6, 12]}>

          <SectionHeader title="Seção 1, Level 1" subtitle="Conceitos Importantes" />

          <ButtonQuiz isNormal={true} text="1" href="./quiz" />
          <ButtonQuiz isNormal={false} text="2" href="./quiz" />
          <ButtonQuiz isNormal={true} text="3" href="./quiz" />
          <ButtonQuiz isNormal={false} text="4" href="./quiz" />
          <ButtonQuiz isNormal={true} text="5" href="./quiz" />
          
          <SectionHeader title="Seção 1, Level 2" subtitle="Conceitos Importantes" bgColor="#54e8dc" borderColor="#25a197" />

          <ButtonQuiz isNormal={false} text="1" href="./quiz" typeColor={1} />
          <ButtonQuiz isNormal={true} text="2" href="./quiz" typeColor={1} />
          <ButtonQuiz isNormal={false} text="3" href="./quiz" typeColor={1} />
          <ButtonQuiz isNormal={true} text="4" href="./quiz" typeColor={1} />
          <ButtonQuiz isNormal={false} text="5" href="./quiz" typeColor={1} />

          <SectionHeader title="Seção 1, Level 3" subtitle="Conceitos Importantes" bgColor="#8091ff" borderColor="#5665c4" />

          <ButtonQuiz isNormal={true} text="1" href="./quiz" typeColor={2} />
          <ButtonQuiz isNormal={false} text="2" href="./quiz" typeColor={2} />
          <ButtonQuiz isNormal={true} text="3" href="./quiz" typeColor={2} />
          <ButtonQuiz isNormal={false} text="4" href="./quiz" typeColor={2} />
          <ButtonQuiz isNormal={true} text="5" href="./quiz" typeColor={2} />
        </ScrollView>
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