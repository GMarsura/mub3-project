import Button from "@/src/components/Button/Button";
import Header from "@/src/components/Header/Header";
import Pagination from "@/src/components/Pagination/Pagination";
import { Text, View } from "react-native";

export default function Info() {
  return (
    <View className="flex justify-between flex-col h-screen bg-[#231F20]">
      <Header />

      <View className="flex justify-center items-center px-6">
      <Text className="text-3xl font-medium text-center color-[#81D2E2]">MUB3:</Text>
      <Text className="text-xl color-slate-50">Museu da bolsa do Brasil</Text>

        <View className="w-full bg-[#333333] rounded-2xl p-6 my-6">
          <Text className="text-justify text-base color-slate-50">
          O MUB3 – <span className="font-bold">Museu da bolsa do Brasil</span> nasceu do desejo de preservar e compartilhar a história do mercado de capitais brasileiro, a partir de uma potente plataforma de conhecimento, aberta a todas as pessoas que se interessam pelo tema e o pesquisam. O acervo permitiu a criação do Museu, que passou a integrar uma rede de equipamentos culturais no centro de São Paulo ligados à história econômica brasileira, com importância para todo o Brasil.
          </Text>
        </View>
      </View>

      <View className="px-6">
        <Button text="Próximo" href="./hub" />
        <Pagination active={3} />
      </View>
    </View>
  );
}