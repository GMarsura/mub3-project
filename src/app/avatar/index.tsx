import Button from "@/src/components/Button/Button";
import Header from "@/src/components/Header/Header";
import Pagination from "@/src/components/Pagination/Pagination";
import { Image, Pressable, Text, View } from "react-native";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Avatar() {
  return (
    <View className="flex justify-between flex-col h-screen bg-[#231F20]">
      <Header/>
      
      <View className="flex justify-center items-center px-6">
        <Text className="text-3xl text-center color-slate-50 mb-6">Escolha <br></br>seu <span className="font-medium color-[#81D2E2]">avatar</span></Text>


        <View className="flex flex-row justify-between items-center">
          <Pressable>
            <BiChevronLeft size={48} color="8D8D8D" />
          </Pressable>
          <View className="flex flex-row justify-between items-center w-[170px] h-[170px] rounded-full bg-[#D9D9D9]">
              <Image />
          </View>
          <Pressable>
            <BiChevronRight size={48} color="8D8D8D" />
          </Pressable>
        </View>
      </View>

      <View className="px-6">
        <Button text="Próximo" href="./info" />
        <Pagination active={2} />
      </View>
    </View>
  );
}