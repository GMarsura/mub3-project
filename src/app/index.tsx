import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Pagination from "../components/Pagination/Pagination";
import Button from "../components/Button/Button";

export default function Index() {
  const router = useRouter();

  const [user, onChangeUser] = React.useState("");

  return (
    <View className="flex justify-between flex-col h-screen px-6 py-4 bg-[#231F20]">
      <View className="w-full flex items-center">
        <Image
        style={{ width: 225 }}
        resizeMode="contain"
        source={require("../../assets/images/mub3-logo.png")} 
        />

        <Text className="text-3xl font-semibold color-slate-50 mt-6">
          Olá, bem vindo!
        </Text>
        <Text className="text-center text-base color-gray-200 mt-2">
          Para uma experiência mais proveitosa, responda algumas perguntas rápidas:
        </Text>

        {/* Input */}
        <View className="w-full bg-[#333333] rounded-2xl p-6 mt-6">
          <Text className="text-base text-left color-slate-50 mb-2">Qual o seu nome?</Text>

          <SafeAreaProvider>
            <SafeAreaView>
              <TextInput
                onChangeText={onChangeUser}
                value={user}
                placeholder="Ex.: Matheus Fornalha"
                placeholderTextColor={"#989898"}
                keyboardType="default"
                className="text-base font-medium bg-[#D9D9D9] rounded-2xl border-none px-6 py-2"
              />
            </SafeAreaView>
          </SafeAreaProvider>
        </View>
      </View>

      <View>
        {/* <Text className="text-center color-white">Nome: {user}</Text> */}
        <Button text="Próximo" href="./avatar" />
        <Pagination active={1} />
      </View>
    </View>
  );
}
