import Header from "@/src/components/Header/Header";
import { router } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";

import { FaHome, FaInfoCircle  } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import ButtonHub from "@/src/components/ButtonHub/ButtonHub";
import SectionHeader from "@/src/components/SectionHeader/SectionHeader";
import { questionsBySession } from '../../questions/questions';

export default function Hub() {

  const backgrounds = [`#54e8dc`, `#8091ff`, `#81D2E2`];

  // Função para pegar cor aleatória
  const getRandomBackground = () => backgrounds[Math.floor(Math.random() * backgrounds.length)];

  return (
    <View className="flex flex-col h-screen bg-[#231F20]">
      <Header />

      <View className="w-full h-[calc(100%-148px)] flex justify-between items-center flex-col px-6">

        <ScrollView className="w-full flex items-center">
          {questionsBySession.map((session, sessionIndex) => {
            // Pegando níveis únicos
            const uniqueLevels = [...new Set(session.questions.map(q => q.level))];

            const bgColor = getRandomBackground();

            return (
              <View key={sessionIndex} className="w-full items-center mb-6">
                  <SectionHeader 
                    title={`Seção ${sessionIndex + 1}, Level ${uniqueLevels[0]}`} 
                    subtitle={session.session} 
                    bgColor={bgColor} 
                  />

                  {uniqueLevels.map((level, levelIndex) => (
                    <ButtonHub 
                      key={levelIndex}
                      isNormal={levelIndex % 2 === 0}
                      text={`${level}`}
                      href="./quiz"
                      sessionId={`${sessionIndex + 1}`} // Aqui atribuímos o ID da sessão
                    />
                  ))}
                </View>
            )
          })}
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
