import Button from "@/src/components/Button/Button";
import Header from "@/src/components/Header/Header";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Quiz() {

  const respostas = [true, true, false, false, undefined];

  return (
    <View className="flex flex-col h-screen bg-[#231F20]">
      <Header />

      <View className="h-[calc(100%-76px)] px-6">

        {/* Marcador de questões + Botão de dica */}
        <View className="flex flex-row justify-between">

          <ScrollView className="flex flex-row flex-grow-0 items-center rounded-full px-2 py-2 bg-[#333333]" horizontal>
            {
              respostas.map((valor, id) => 
                <span 
                  key={id} 
                  className="w-[33px] h-[33px] rounded-full mx-1" 
                  style={{ backgroundColor: valor ? "#41FF8A" : valor?.valueOf === undefined ? "#8D8D8D" : "#FF7C7C" }}>
                </span>
              )
            }
          </ScrollView>

          {/* Botão da dica */}
          <Pressable>
            <Text className="w-[44px] text-base font-medium color-[#81D2E2] rounded-full px-4 py-2 border-2 border-[#81D2E2] bg-[#333333]">?</Text>
          </Pressable>
        </View>

        {/* Imagem Ilustrativa (? talvez nem precise) */}
        <View className="w-full h-5 bg-[#333333] rounded-2xl my-4"></View>

        {/* Texto da Questão */}
        <Text className="text-base text-center color-slate-50 mb-4">
          1. Para uma experiência mais proveitosa, responda algumas perguntas rápidas?
        </Text>

        {/* Alternativas */}
        <View className="gap-4">
          <Button
          text="Alternativa 1"
          href="./resultado"
          />
          
          <Button 
          text="Alternativa 2"
          href="./resultado"
          />

          <Button 
          text="Alternativa 3"
          href="./resultado"
          />

          <Button 
          text="Alternativa 4"
          href="./resultado"
          />
        </View>
      </View>
    </View>
  );
}